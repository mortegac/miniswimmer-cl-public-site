import { NextRequest, NextResponse } from "next/server";

const V1_ENDPOINT = "https://m2hmnszh4je2rk3mdemcrudxw4.appsync-api.us-east-2.amazonaws.com/graphql";
const V1_API_KEY = "da2-ccnqqjpecvc33ijvwiphn2gjku";

async function appsyncMutation<T = unknown>(
  query: string,
  variables: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(V1_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": V1_API_KEY },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`AppSync HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

// YYYY-MM-DD → DD/MM/YYYY
function toBirthdate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

// YYYY-MM-DD → MM-DD-YYYY
function toStartDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${m}-${d}-${y}`;
}

const RELATION_MAP: Record<string, string> = {
  "Mamá": "MOTHER",
  "Papá": "FATHER",
  "Abuela": "GRANDMOTHER",
  "Abuelo": "GRANDFATHER",
  "Otro": "OTHER",
};

const COURSE_CONFIG: Record<string, { courseId: string; sessionTypeId: string }> = {
  bebe: { courseId: "expo-bebes-PENALOLEN-COMUNIDAD-ECOLOGICA", sessionTypeId: "1-CLASE-BEBE-PREMIUM" },
  mami: { courseId: "MAMI SWIMMER-PENALOLEN-COMUNIDAD-ECOLOGICA", sessionTypeId: "1-CLASE-MAMI-PREMIUM" },
};

const CREATE_STUDENT = `
  mutation CreateStudent($input: CreateStudentInput!) {
    createStudent(input: $input) { id }
  }
`;

const CREATE_RELATIONSHIP = `
  mutation CreateRelationship($input: CreateRelationshipInput!) {
    createRelationship(input: $input) { id }
  }
`;

const GENERATE_ENROLLMENT = `
  mutation GenerateEnrollment(
    $userId: String! $studentId: String! $startDate: String!
    $sessionTypeId: String! $scheduleId: String! $courseId: String!
  ) {
    generateEnrollment(
      userId: $userId studentId: $studentId startDate: $startDate
      sessionTypeId: $sessionTypeId scheduleId: $scheduleId courseId: $courseId
    )
  }
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      tipo = "bebe",
      email,
      nombreApoderado,
      nombreAlumno,
      apellidoAlumno,
      nombre,
      fechaNacimiento,
      relacion,
      fechaISO,
      scheduleId,
    } = body;

    // Validaciones
    if (!email) return NextResponse.json({ error: "email requerido" }, { status: 400 });
    if (!fechaISO) return NextResponse.json({ error: "fechaISO requerido" }, { status: 400 });
    if (!scheduleId) return NextResponse.json({ error: "scheduleId requerido" }, { status: 400 });
    if (tipo === "bebe" && !fechaNacimiento) {
      return NextResponse.json({ error: "fechaNacimiento requerida para bebé" }, { status: 400 });
    }

    // Resolver nombre y apellido
    const parts = (nombreAlumno || nombre || "").trim().split(/\s+/);
    const studentName = nombreAlumno || parts[0] || "";
    const studentLastName = apellidoAlumno || parts.slice(1).join(" ") || "";

    // ── Paso 1: createStudent ──
    const studentData = await appsyncMutation<{ createStudent: { id: string } }>(
      CREATE_STUDENT,
      {
        input: {
          name: studentName,
          lastName: studentLastName,
          middleName: "",
          birthdate: tipo === "bebe" && fechaNacimiento ? toBirthdate(fechaNacimiento) : "",
          placeOfResidence: "",
          contactPhone: "",
          whoIsTheContact: "",
          emailPhone: email,
          gender: "MALE",
          anyIllnessInjuryMedicalCondition: "No ninguna",
        },
      },
    );
    const studentId = studentData?.createStudent?.id;
    if (!studentId) throw new Error("createStudent no retornó id");

    // ── Paso 2: createRelationship (solo bebé con relación) ──
    if (tipo === "bebe" && relacion && RELATION_MAP[relacion]) {
      await appsyncMutation(CREATE_RELATIONSHIP, {
        input: {
          relationType: RELATION_MAP[relacion],
          usersRelationshipsId: email,
          studentRelationshipsId: studentId,
        },
      });
    }

    // ── Paso 3: generateEnrollment ──
    const config = COURSE_CONFIG[tipo] ?? COURSE_CONFIG.bebe;
    const enrollmentResult = await appsyncMutation<{ generateEnrollment: unknown }>(
      GENERATE_ENROLLMENT,
      {
        userId: email,
        studentId,
        startDate: toStartDate(fechaISO),
        sessionTypeId: config.sessionTypeId,
        scheduleId,
        courseId: config.courseId,
      },
    );

    return NextResponse.json({
      success: true,
      studentId,
      enrollmentResult: enrollmentResult?.generateEnrollment,
    });
  } catch (err) {
    console.error("[api/enrollment] error:", err);
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
