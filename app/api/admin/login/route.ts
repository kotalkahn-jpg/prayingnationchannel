
import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.ADMIN_SECRET);

  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2h")
    .sign(secret);

  const response = NextResponse.json({ success: true });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
