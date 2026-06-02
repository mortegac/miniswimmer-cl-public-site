import { NextRequest, NextResponse } from "next/server";

const CUPO_TOTAL = 7;
const WEEKDAY_TIMES: Record<string, string[]> = {
  Viernes: ["10:00","10:30","11:00","11:30","15:00","16:00","16:30","17:10","17:50","18:30"],
  Sábado: ["13:30","15:00","15:40"],
  Domingo: ["9:00","12:30","13:10","13:45"],
};
const DATE_OVERRIDES: Record<string, string[]> = {
  "2026-06-05": ["11:40","12:30"],
};
const MAMI_TIMES = ["11:45","12:30"];
const JUNE_2026 = [
  { week: 1, dates: [{ dow:"Viernes",d:5 },{ dow:"Sábado",d:6 },{ dow:"Domingo",d:7 }] },
  { week: 2, dates: [{ dow:"Viernes",d:12 },{ dow:"Sábado",d:13 },{ dow:"Domingo",d:14 }] },
  { week: 3, dates: [{ dow:"Viernes",d:19 },{ dow:"Sábado",d:20 },{ dow:"Domingo",d:21 }] },
  { week: 4, dates: [{ dow:"Viernes",d:26 },{ dow:"Sábado",d:27 },{ dow:"Domingo",d:28 }] },
];

function seededRem(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0) % 8;
}

function buildSchedule(tipo: string) {
  return JUNE_2026.map((wk) => {
    const dates = wk.dates
      .filter((dt) => tipo === "mami" ? dt.dow === "Domingo" : true)
      .map((dt) => {
        const iso = `2026-06-${String(dt.d).padStart(2, "0")}`;
        const times = tipo === "mami" ? MAMI_TIMES : (DATE_OVERRIDES[iso] || WEEKDAY_TIMES[dt.dow] || []);
        const slots = times.map((t) => ({ t, rem: seededRem(`${iso}|${t}|${tipo}`) }));
        const totalRem = slots.reduce((a, s) => a + s.rem, 0);
        return { ...dt, iso, slots, totalRem, label: `${dt.dow} ${dt.d} de junio` };
      });
    return { week: wk.week, dates };
  }).filter((wk) => wk.dates.length > 0);
}

export async function GET(request: NextRequest) {
  const tipo = request.nextUrl.searchParams.get("tipo") || "bebe";
  return NextResponse.json({ weeks: buildSchedule(tipo), cupoTotal: CUPO_TOTAL });
}
