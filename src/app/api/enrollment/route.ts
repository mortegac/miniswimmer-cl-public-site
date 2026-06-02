import { NextRequest, NextResponse } from "next/server";

interface EnrollmentPayload {
  tipo: "bebe" | "mami";
  email: string;
  nombre: string;
  fechaNacimiento?: string | null;
  relacion?: string | null;
  fechaISO: string;
  fechaLabel: string;
  hora: string;
  sede: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EnrollmentPayload = await request.json();
    const required: (keyof EnrollmentPayload)[] = ["tipo","email","nombre","fechaISO","fechaLabel","hora","sede"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Campo requerido: ${field}` }, { status: 400 });
      }
    }
    if (body.tipo === "bebe" && !body.fechaNacimiento) {
      return NextResponse.json({ error: "Fecha de nacimiento requerida para bebé" }, { status: 400 });
    }
    // TODO: concurrency check against DB + persist enrollment
    return NextResponse.json({
      success: true,
      enrollment: { ...body, id: `ENR-${Date.now()}`, createdAt: new Date().toISOString() },
    });
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
