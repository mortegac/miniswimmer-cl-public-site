import { NextRequest, NextResponse } from "next/server";
import { appsyncQueryAll } from "@/lib/appsync";

/* ── Constantes de negocio ── */
const CUPO_TOTAL = 7;

const COURSE_IDS: Record<string, string> = {
  bebe: "expo-bebes-PENALOLEN-COMUNIDAD-ECOLOGICA",
  mami: "MAMI SWIMMER-PENALOLEN-COMUNIDAD-ECOLOGICA",
};

/* ── Tipos ── */
interface SlotEntry { t: string; scheduleId?: string; }

/* Horarios por día de la semana para bebé (con IDs reales donde aplica) */
const BEBE_SCHEDULES: Record<string, SlotEntry[]> = {
  Viernes: [
    { t: "10:00", scheduleId: "b1c0676b-13b2-4cc9-933a-960721713dda" },
    { t: "10:30", scheduleId: "f7f21ba2-93f5-4fb2-8ff2-52c264709455" },
    { t: "11:00", scheduleId: "9099a579-d793-4849-86f1-76c7d8df1373" },
    { t: "11:30", scheduleId: "8d9f4e94-42a6-4018-b10d-5934d82b55e9" },
    { t: "13:30", scheduleId: "975d6856-d33f-444e-b46f-38e6346e63be" },
    { t: "15:00", scheduleId: "2c1cc4c2-1a37-4915-86ad-08121d7bc0a4" },
    { t: "15:00", scheduleId: "1242479c-d4e6-4520-87fa-d08c09c9e959" },
    { t: "15:40", scheduleId: "2f24853d-2397-414c-a4bf-9e0cf04ed808" },
    { t: "16:00", scheduleId: "a3b52d49-d6a4-4466-a56d-bdfd67886f25" },
    { t: "16:30", scheduleId: "ce3a2d94-967c-4d8f-b3e6-61386868d399" },
    { t: "17:10", scheduleId: "cf9e59e3-0a47-4138-a22e-53601054809c" },
    { t: "17:50", scheduleId: "f1c75c34-2be2-4717-9a74-895ae316501a" },
    { t: "18:30", scheduleId: "1dd4ef94-0fea-4e89-9c47-e2dcf2597b4b" },
  ],
  Sábado: [
    { t: "13:30" },
    { t: "15:00" },
    { t: "15:40" },
  ],
  Domingo: [
    { t: "9:00",  scheduleId: "6643245f-c948-468c-8c25-5e7b622aa481" },
    { t: "12:30", scheduleId: "5f3bb13f-31b8-44dc-98bf-2f433a4c9c10" },
    { t: "13:10", scheduleId: "0e2497fc-7559-40dc-afb3-8ade08f19b9e" },
    { t: "13:45", scheduleId: "78259153-c9e6-4225-9ff8-0c858eefb6ba" },
  ],
};

const MAMI_SCHEDULES: SlotEntry[] = [
  { t: "11:45" },
  { t: "12:30" },
];

/* Solo estas 4 semanas de junio */
const JUNE_2026 = [
  { week: 1, dates: [{ dow:"Viernes",d:5 },{ dow:"Sábado",d:6 },{ dow:"Domingo",d:7 }] },
  { week: 2, dates: [{ dow:"Viernes",d:12 },{ dow:"Sábado",d:13 },{ dow:"Domingo",d:14 }] },
  { week: 3, dates: [{ dow:"Viernes",d:19 },{ dow:"Sábado",d:20 },{ dow:"Domingo",d:21 }] },
  { week: 4, dates: [{ dow:"Viernes",d:26 },{ dow:"Sábado",d:27 },{ dow:"Domingo",d:28 }] },
];

/* ── GraphQL ── */
const LIST_SESSION_DETAILS = /* GraphQL */ `
  query ListV2SessionDetailsByCourse(
    $filter: ModelV2SessionDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listV2SessionDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        courseId
        status
      }
      nextToken
    }
  }
`;

interface SessionDetailItem {
  id: string;
  date: string;       // ISO datetime "2026-06-05T..."
  courseId: string;
  status: string;
}

/* ── Helpers ── */
function isoForDay(d: number) {
  return `2026-06-${String(d).padStart(2, "0")}`;
}

function schedulesForDate(dow: string, _iso: string, tipo: string): SlotEntry[] {
  if (tipo === "mami") return MAMI_SCHEDULES;
  return BEBE_SCHEDULES[dow] ?? [];
}

/* Convierte fecha datetime "2026-06-05T14:00:00.000Z" → "2026-06-05" */
function isoDateOnly(datetimeStr: string): string {
  return datetimeStr.slice(0, 10);
}

/* Distribuye inscritos entre slots y calcula remaining */
function buildSlots(
  schedules: SlotEntry[],
  enrolledTotal: number,
): { t: string; rem: number; scheduleId?: string }[] {
  const n = schedules.length;
  if (n === 0) return [];

  const enrolledPerSlot = Math.floor(enrolledTotal / n);
  const extra = enrolledTotal % n;

  return schedules.map((s, i) => {
    const enrolled = enrolledPerSlot + (i < extra ? 1 : 0);
    return { t: s.t, rem: Math.max(0, CUPO_TOTAL - enrolled), scheduleId: s.scheduleId };
  });
}

/* ── Handler ── */
export async function GET(request: NextRequest) {
  const tipo = request.nextUrl.searchParams.get("tipo") || "bebe";
  const courseId = COURSE_IDS[tipo] ?? COURSE_IDS.bebe;

  /* 1. Traer todos los SessionDetails del curso en junio 2026 */
  let enrolledByDate: Record<string, number> = {};

  try {
    const items = await appsyncQueryAll<SessionDetailItem>(
      LIST_SESSION_DETAILS,
      {
        filter: {
          courseId: { eq: courseId },
          date: { between: ["2026-06-05", "2026-06-29"] },
          status: { ne: "DELETED" },
        },
        limit: 1000,
      },
      (data: any) => data?.listV2SessionDetails ?? { items: [], nextToken: null },
    );

    /* 2. Agrupar por fecha (YYYY-MM-DD) y contar */
    for (const item of items) {
      const dateKey = isoDateOnly(item.date);
      enrolledByDate[dateKey] = (enrolledByDate[dateKey] ?? 0) + 1;
    }
  } catch (err) {
    console.error("[api/slots] AppSync error:", err);
    /* Si falla la query, devuelve datos sin cupos para no romper la UI */
    enrolledByDate = {};
  }

  /* 3. Construir estructura de semanas/fechas con cupos reales */
  const weeks = JUNE_2026.map((wk) => {
    const dates = wk.dates
      .filter((dt) => tipo === "mami" ? dt.dow === "Domingo" : true)
      .map((dt) => {
        const iso = isoForDay(dt.d);
        const schedules = schedulesForDate(dt.dow, iso, tipo);
        const enrolled = enrolledByDate[iso] ?? 0;
        const slots = buildSlots(schedules, enrolled);
        const totalRem = slots.reduce((acc, s) => acc + s.rem, 0);

        return {
          dow: dt.dow,
          d: dt.d,
          iso,
          label: `${dt.dow} ${dt.d} de junio`,
          slots,
          totalRem,
          enrolled,
        };
      });

    return { week: wk.week, dates };
  }).filter((wk) => wk.dates.length > 0);

  return NextResponse.json({ weeks, cupoTotal: CUPO_TOTAL });
}
