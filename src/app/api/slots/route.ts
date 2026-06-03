import { NextRequest, NextResponse } from "next/server";
import { appsyncQueryAll } from "@/lib/appsync";

/* ── Constantes de negocio ── */
const CUPO_TOTAL = 7;

const COURSE_IDS: Record<string, string> = {
  bebe: "expo-bebes-PENALOLEN-COMUNIDAD-ECOLOGICA",
  mami: "MAMI SWIMMER-PENALOLEN-COMUNIDAD-ECOLOGICA",
};

/* Horarios por día de la semana */
const WEEKDAY_TIMES: Record<string, string[]> = {
  Viernes: ["10:00","10:30","11:00","11:30","15:00","16:00","16:30","17:10","17:50","18:30"],
  Sábado: ["13:30","15:00","15:40"],
  Domingo: ["9:00","12:30","13:10","13:45"],
};
const DATE_OVERRIDES: Record<string, string[]> = {
  "2026-06-05": ["11:40","12:30"],
};
const MAMI_TIMES = ["11:45","12:30"];

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

function timesForDate(dow: string, iso: string, tipo: string): string[] {
  if (tipo === "mami") return MAMI_TIMES;
  return DATE_OVERRIDES[iso] ?? WEEKDAY_TIMES[dow] ?? [];
}

/* Convierte fecha datetime "2026-06-05T14:00:00.000Z" → "2026-06-05" */
function isoDateOnly(datetimeStr: string): string {
  return datetimeStr.slice(0, 10);
}

/* Distribuye inscritos entre slots y calcula remaining */
function buildSlots(
  times: string[],
  enrolledTotal: number,
): { t: string; rem: number }[] {
  const n = times.length;
  if (n === 0) return [];

  const enrolledPerSlot = Math.floor(enrolledTotal / n);
  const extra = enrolledTotal % n;

  return times.map((t, i) => {
    const enrolled = enrolledPerSlot + (i < extra ? 1 : 0);
    return { t, rem: Math.max(0, CUPO_TOTAL - enrolled) };
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
        const times = timesForDate(dt.dow, iso, tipo);
        const enrolled = enrolledByDate[iso] ?? 0;
        const slots = buildSlots(times, enrolled);
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
