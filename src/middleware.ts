import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // защищаем только /admin
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`,
      {
        headers: {
          cookie: req.headers.get("cookie") ?? "",
        },
      }
    );

    // не залогинен
    if (!res.ok) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    const user = await res.json();

    // не админ
    if (user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // всё ок
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
