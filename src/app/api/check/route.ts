import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  "a-string-secret-at-least-256-bits-long",
);

const V1_ENDPOINT =
  "https://m2hmnszh4je2rk3mdemcrudxw4.appsync-api.us-east-2.amazonaws.com/graphql";
const V1_API_KEY = "da2-ccnqqjpecvc33ijvwiphn2gjku";

const EXPO_COURSE_IDS = new Set([
  "expo-bebes-PENALOLEN-COMUNIDAD-ECOLOGICA",
  "MAMI SWIMMER-PENALOLEN-COMUNIDAD-ECOLOGICA",
]);

async function v1Query<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(V1_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": V1_API_KEY },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`AppSync v1 HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

// Lookup directo por PK (id = email)
const GET_USER_BY_ID = /* GraphQL */ `
  query GetUserById($id: ID!) {
    getUsers(id: $id) { id name email }
  }
`;

// Buscar carritos del usuario y sus enrollments
const LIST_SHOPPING_CARTS = /* GraphQL */ `
  query CheckEnrollment($filter: ModelShoppingCartFilterInput) {
    listShoppingCarts(filter: $filter, limit: 100) {
      items {
        id
        cartDetails {
          items {
            enrollment {
              id
              courseEnrollmentsId
            }
          }
        }
      }
    }
  }
`;

async function checkAlreadyEnrolled(email: string): Promise<boolean> {
  try {
    const data = await v1Query<{
      listShoppingCarts?: {
        items: Array<{
          cartDetails?: {
            items: Array<{
              enrollment?: { id: string; courseEnrollmentsId?: string } | null;
            }>;
          } | null;
        }>;
      } | null;
    }>(LIST_SHOPPING_CARTS, {
      filter: { usersShoppingCartId: { contains: email } },
    });

    const carts = data?.listShoppingCarts?.items ?? [];

    for (const cart of carts) {
      const details = cart.cartDetails?.items ?? [];
      for (const detail of details) {
        const courseId = detail.enrollment?.courseEnrollmentsId;
        // Solo bloqueamos si hay coincidencia EXACTA con un courseId expo
        if (courseId && EXPO_COURSE_IDS.has(courseId)) return true;
      }
    }
    return false;
  } catch {
    // Si la query falla, no bloqueamos — permitimos que continue
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = body?.token as string | undefined;

    if (!token) {
      return NextResponse.json({ error: "Token requerido" }, { status: 400 });
    }

    const { payload } = await jwtVerify(token, JWT_SECRET);
    const email = payload.sub as string;

    if (!email) {
      return NextResponse.json({ error: "Token inválido: sin sub" }, { status: 400 });
    }

    const emailNorm = email.toLowerCase().trim();

    // 1. Verificar que el usuario existe
    const data = await v1Query<{ getUsers: { id: string } | null }>(
      GET_USER_BY_ID,
      { id: emailNorm },
    );
    const exists = data?.getUsers !== null;

    // 2. Si existe, verificar si ya tiene inscripción expo (no bloquea si falla)
    const alreadyEnrolled = exists ? await checkAlreadyEnrolled(emailNorm) : false;

    return NextResponse.json({ exists, email: emailNorm, alreadyEnrolled });
  } catch (err) {
    console.error("[api/check] error:", err);
    return NextResponse.json({ error: "Error al verificar el token" }, { status: 500 });
  }
}
