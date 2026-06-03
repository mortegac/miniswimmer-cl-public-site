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

const UPDATE_SHOPPING_CART = `
  mutation UpdateShoppingCart($input: UpdateShoppingCartInput!) {
    updateShoppingCart(input: $input) { id }
  }
`;

const GET_SESSION_DETAIL = `
  query GetSessionDetail($id: ID!) {
    getSessionDetail(id: $id) {
      id
      enrollmentSessionDetailsId
    }
  }
`;

const UPDATE_ENROLLMENT = `
  mutation UpdateEnrollment($input: UpdateEnrollmentInput!) {
    updateEnrollment(input: $input) { id }
  }
`;

/**
 * Parses the raw string returned by generateEnrollment.
 * The Lambda returns a string shaped like:
 *   {statusCode=200, body={sessions=[{id=abc, ...}], cartId=xyz}}
 * We do a best-effort JSON parse after normalising the format.
 */
function parseGenerateEnrollmentResponse(raw: string): {
  statusCode: number;
  cartId: string | null;
  sessions: Array<{ id: string }>;
} | null {
  try {
    // Replace = separators with : to make it JSON-like, then wrap values
    // The string may be in Java Map toString format or already JSON.
    // Try direct JSON parse first (in case it is proper JSON).
    const attemptJson = raw.trim();
    if (attemptJson.startsWith("{")) {
      // Normalise Java/Groovy Map format: {key=value, ...} → {"key":"value", ...}
      // 1. Replace top-level key=value pairs (non-nested)
      const normalised = attemptJson
        // Replace `=` used as key-value separator with `:`
        .replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)=/g, '$1"$2":')
        // Wrap unquoted scalar values that follow `:` — but only non-{ non-[ values
        .replace(/:\s*([^",\[\]{}\s][^,\[\]{}]*?)(?=[,}\]])/g, (_, v) => {
          const trimmed = v.trim();
          // Already quoted or numeric-ish
          if (/^-?\d+(\.\d+)?$/.test(trimmed)) return `: ${trimmed}`;
          return `: "${trimmed}"`;
        });
      const parsed = JSON.parse(normalised);
      const body = parsed.body ?? parsed;
      const sessions = Array.isArray(body?.sessions)
        ? (body.sessions as Array<{ id: string }>)
        : [];
      return {
        statusCode: Number(parsed.statusCode ?? 200),
        cartId: body?.cartId ?? null,
        sessions,
      };
    }
    return null;
  } catch {
    return null;
  }
}

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

    // ── Pasos post-enrollment (fallos no cancelan el enrollment) ──
    const rawEnrollment = enrollmentResult?.generateEnrollment;
    const postSteps: {
      cartUpdated: boolean;
      enrollmentUpdated: boolean;
      cartId: string | null;
      sessionId: string | null;
      enrollmentId: string | null;
      errors: string[];
    } = {
      cartUpdated: false,
      enrollmentUpdated: false,
      cartId: null,
      sessionId: null,
      enrollmentId: null,
      errors: [],
    };

    // Paso 4: Parsear respuesta de generateEnrollment
    const parsed = typeof rawEnrollment === "string"
      ? parseGenerateEnrollmentResponse(rawEnrollment)
      : null;

    if (!parsed) {
      postSteps.errors.push("No se pudo parsear la respuesta de generateEnrollment");
    } else {
      postSteps.cartId = parsed.cartId;
      postSteps.sessionId = parsed.sessions?.[0]?.id ?? null;

      // Paso 5: updateShoppingCart con status AUTHORIZED
      if (parsed.cartId) {
        try {
          await appsyncMutation(UPDATE_SHOPPING_CART, {
            input: { id: parsed.cartId, status: "AUTHORIZED" },
          });
          postSteps.cartUpdated = true;
        } catch (cartErr) {
          const msg = cartErr instanceof Error ? cartErr.message : String(cartErr);
          console.error("[api/enrollment] updateShoppingCart error:", msg);
          postSteps.errors.push(`updateShoppingCart: ${msg}`);
        }
      } else {
        postSteps.errors.push("cartId no disponible para updateShoppingCart");
      }

      // Paso 6: Obtener SessionDetail → extraer enrollmentSessionDetailsId
      const sessionId = parsed.sessions?.[0]?.id;
      if (sessionId) {
        try {
          const sessionDetailResult = await appsyncMutation<{
            getSessionDetail: { id: string; enrollmentSessionDetailsId: string | null } | null;
          }>(GET_SESSION_DETAIL, { id: sessionId });

          const enrollmentId = sessionDetailResult?.getSessionDetail?.enrollmentSessionDetailsId ?? null;
          postSteps.enrollmentId = enrollmentId;

          // Paso 7: updateEnrollment con wasPaid: true
          if (enrollmentId) {
            try {
              await appsyncMutation(UPDATE_ENROLLMENT, {
                input: { id: enrollmentId, wasPaid: "true" },
              });
              postSteps.enrollmentUpdated = true;
            } catch (enrollErr) {
              const msg = enrollErr instanceof Error ? enrollErr.message : String(enrollErr);
              console.error("[api/enrollment] updateEnrollment error:", msg);
              postSteps.errors.push(`updateEnrollment: ${msg}`);
            }
          } else {
            postSteps.errors.push("enrollmentSessionDetailsId no disponible en SessionDetail");
          }
        } catch (sessionErr) {
          const msg = sessionErr instanceof Error ? sessionErr.message : String(sessionErr);
          console.error("[api/enrollment] getSessionDetail error:", msg);
          postSteps.errors.push(`getSessionDetail: ${msg}`);
        }
      } else {
        postSteps.errors.push("sessions[0].id no disponible para getSessionDetail");
      }
    }

    return NextResponse.json({
      success: true,
      studentId,
      enrollmentResult: rawEnrollment,
      postEnrollment: postSteps,
    });
  } catch (err) {
    console.error("[api/enrollment] error:", err);
    const message = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
