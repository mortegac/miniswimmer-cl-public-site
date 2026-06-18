import { NextRequest, NextResponse } from "next/server";

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
    { t: "10:30", scheduleId: "f7f21ba2-93f5-4fb2-8ff2-52c264709455" },
    { t: "11:00", scheduleId: "9099a579-d793-4849-86f1-76c7d8df1373" },
    { t: "11:30", scheduleId: "8d9f4e94-42a6-4018-b10d-5934d82b55e9" },
    { t: "16:00", scheduleId: "a3b52d49-d6a4-4466-a56d-bdfd67886f25" },
    { t: "16:30", scheduleId: "ce3a2d94-967c-4d8f-b3e6-61386868d399" },
    { t: "17:10", scheduleId: "cf9e59e3-0a47-4138-a22e-53601054809c" },
    { t: "17:50", scheduleId: "f1c75c34-2be2-4717-9a74-895ae316501a" },
  ],
  Sábado: [
    { t: "13:30", scheduleId: "24ab9864-e872-4e9b-8dec-210da47916db" },
    { t: "15:00", scheduleId: "e6ce91e1-f18b-4f5b-a95a-0476ad2b06cd" },
    { t: "15:40", scheduleId: "3c0b7c42-de68-4d0b-a1bc-b5b9b999bbcb" },
  ],
  Domingo: [
    { t: "9:00",  scheduleId: "6643245f-c948-468c-8c25-5e7b622aa481" },
    { t: "12:30", scheduleId: "5f3bb13f-31b8-44dc-98bf-2f433a4c9c10" },
    { t: "13:10", scheduleId: "0e2497fc-7559-40dc-afb3-8ade08f19b9e" },
    { t: "13:45", scheduleId: "78259153-c9e6-4225-9ff8-0c858eefb6ba" },
  ],
};

const MAMI_SCHEDULES: SlotEntry[] = [
  { t: "12:30", scheduleId: "5bcb4a86-73c0-46b6-9601-c2b74bc0e2ff" },
];

/* Solo estas 4 semanas de junio */
const JUNE_2026 = [
  { week: 1, dates: [{ dow:"Viernes",d:5 },{ dow:"Sábado",d:6 },{ dow:"Domingo",d:7 }] },
  { week: 2, dates: [{ dow:"Viernes",d:12 },{ dow:"Sábado",d:13 },{ dow:"Domingo",d:14 }] },
  { week: 3, dates: [{ dow:"Viernes",d:19 },{ dow:"Sábado",d:20 },{ dow:"Domingo",d:21 }] },
  { week: 4, dates: [{ dow:"Viernes",d:26 },{ dow:"Sábado",d:27 },{ dow:"Domingo",d:28 }] },
];

/* ── AppSync v1 client ── */
const V1_ENDPOINT =
  "https://m2hmnszh4je2rk3mdemcrudxw4.appsync-api.us-east-2.amazonaws.com/graphql";
const V1_API_KEY = "da2-ccnqqjpecvc33ijvwiphn2gjku";

async function v1QueryAll<T>(
  query: string,
  variables: Record<string, unknown>,
  getPage: (data: unknown) => { items: T[]; nextToken?: string | null },
): Promise<T[]> {
  const all: T[] = [];
  let nextToken: string | null = null;
  do {
    const res = await fetch(V1_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": V1_API_KEY,
      },
      body: JSON.stringify({ query, variables: { ...variables, nextToken } }),
      cache: "no-store",
    });
    const json = (await res.json()) as { data?: unknown; errors?: { message: string }[] };
    if (json.errors?.length) throw new Error(json.errors[0].message);
    const page = getPage(json.data);
    all.push(...page.items);
    nextToken = page.nextToken ?? null;
  } while (nextToken);
  return all;
}

/* ── GraphQL ── */
const LIST_SESSION_DETAILS = /* GraphQL */ `
  query ListSessionDetailsByCourse(
    $filter: ModelSessionDetailFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        courseId
        scheduleId
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
  scheduleId?: string;
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

/* Calcula remaining por slot usando el scheduleId exacto */
function buildSlots(
  schedules: SlotEntry[],
  enrolledBySchedule: Record<string, number>,
): { t: string; rem: number; scheduleId?: string }[] {
  return schedules.map((s) => {
    const enrolled = s.scheduleId ? (enrolledBySchedule[s.scheduleId] ?? 0) : 0;
    return { t: s.t, rem: Math.max(0, CUPO_TOTAL - enrolled), scheduleId: s.scheduleId };
  });
}

/* ── Handler ── */
export async function GET(request: NextRequest) {
  const tipo = request.nextUrl.searchParams.get("tipo") || "bebe";
  const courseId = COURSE_IDS[tipo] ?? COURSE_IDS.bebe;

  /* 1. Traer todos los SessionDetails del curso en junio 2026 */
  // date → scheduleId → count
  let enrolledMap: Record<string, Record<string, number>> = {};

  try {
    const items = await v1QueryAll<SessionDetailItem>(
      LIST_SESSION_DETAILS,
      {
        filter: {
          courseId: { eq: courseId },
          date: { between: ["2026-06-05", "2026-06-29"] },
          status: { ne: "DELETED" },
        },
        limit: 1000,
      },
      (data: unknown) =>
        (data as { listSessionDetails?: { items: SessionDetailItem[]; nextToken?: string | null } })
          ?.listSessionDetails ?? { items: [], nextToken: null },
    );

    /* 2. Agrupar por fecha + scheduleId */
    for (const item of items) {
      // Las fechas se guardan en UTC ("2026-06-20T00:00:00.000Z") → tomamos los primeros 10 chars
      const dateKey = isoDateOnly(item.date);
      const sid = item.scheduleId ?? "__unknown__";
      if (!enrolledMap[dateKey]) enrolledMap[dateKey] = {};
      enrolledMap[dateKey][sid] = (enrolledMap[dateKey][sid] ?? 0) + 1;
    }
  } catch (err) {
    console.error("[api/slots] AppSync error:", err);
    enrolledMap = {};
  }

  /* 3. Construir estructura de semanas/fechas con cupos reales */
  const weeks = JUNE_2026.map((wk) => {
    const dates = wk.dates
      .filter((dt) => tipo === "mami" ? dt.dow === "Domingo" : true)
      .map((dt) => {
        const iso = isoForDay(dt.d);
        const schedules = schedulesForDate(dt.dow, iso, tipo);
        const enrolledBySchedule = enrolledMap[iso] ?? {};
        const slots = buildSlots(schedules, enrolledBySchedule);
        const totalRem = slots.reduce((acc, s) => acc + s.rem, 0);
        const totalEnrolled = Object.values(enrolledBySchedule).reduce((a, b) => a + b, 0);

        return {
          dow: dt.dow,
          d: dt.d,
          iso,
          label: `${dt.dow} ${dt.d} de junio`,
          slots,
          totalRem,
          enrolled: totalEnrolled,
        };
      });

    return { week: wk.week, dates };
  }).filter((wk) => wk.dates.length > 0);

  return NextResponse.json({ weeks, cupoTotal: CUPO_TOTAL });
}
