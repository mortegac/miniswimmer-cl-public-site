import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  "a-string-secret-at-least-256-bits-long",
);

// API v1 — donde se crearon los usuarios con createUsers (id = email)
const V1_ENDPOINT =
  "https://m2hmnszh4je2rk3mdemcrudxw4.appsync-api.us-east-2.amazonaws.com/graphql";
const V1_API_KEY = "da2-ccnqqjpecvc33ijvwiphn2gjku";

// Lookup directo por PK (id = email) — sin scan
const GET_USER_BY_ID = /* GraphQL */ `
  query GetUserById($id: ID!) {
    getUsers(id: $id) {
      id
      name
      email
    }
  }
`;

async function getUserByEmail(email: string) {
  const res = await fetch(V1_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": V1_API_KEY,
    },
    body: JSON.stringify({
      query: GET_USER_BY_ID,
      variables: { id: email },
    }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`AppSync v1 HTTP ${res.status}`);

  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data?.getUsers ?? null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = body?.token as string | undefined;

    if (!token) {
      return NextResponse.json({ error: "Token requerido" }, { status: 400 });
    }

    // Verificar firma JWT
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const email = payload.sub as string;

    if (!email) {
      return NextResponse.json(
        { error: "Token inválido: sin sub" },
        { status: 400 },
      );
    }

    const emailNorm = email.toLowerCase().trim();

    // Consultar API v1 por id = email
    const user = await getUserByEmail(emailNorm);
    const exists = user !== null;

    return NextResponse.json({ exists, email: emailNorm });
  } catch (err) {
    console.error("[api/check] error:", err);
    return NextResponse.json(
      { error: "Error al verificar el token" },
      { status: 500 },
    );
  }
}
