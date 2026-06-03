import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { appsyncQuery } from "@/lib/appsync";

const JWT_SECRET = new TextEncoder().encode(
  "a-string-secret-at-least-256-bits-long",
);

const CHECK_USER_BY_EMAIL = /* GraphQL */ `
  query CheckUserByEmail($email: String!, $limit: Int) {
    listV2UsersByEmail(email: $email, limit: $limit) {
      items {
        id
        name
        email
      }
    }
  }
`;

interface CheckUserData {
  listV2UsersByEmail: { items: { id: string; name: string; email: string }[] };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = body?.token as string | undefined;

    if (!token) {
      return NextResponse.json({ error: "Token requerido" }, { status: 400 });
    }

    // Verificar JWT
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const email = payload.sub as string;

    if (!email) {
      return NextResponse.json(
        { error: "Token inválido: sin sub" },
        { status: 400 },
      );
    }

    // Consultar AppSync
    const data = await appsyncQuery<CheckUserData>(CHECK_USER_BY_EMAIL, {
      email: email.toLowerCase().trim(),
      limit: 1,
    });

    const exists = (data?.listV2UsersByEmail?.items?.length ?? 0) > 0;

    return NextResponse.json({ exists, email });
  } catch (err) {
    console.error("[api/check] error:", err);
    return NextResponse.json(
      { error: "Error al verificar el token" },
      { status: 500 },
    );
  }
}
