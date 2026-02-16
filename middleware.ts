import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: any) {
  const token = req.cookies.get("admin_token")?.value;

  // Allow login page
  if (req.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.ADMIN_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
