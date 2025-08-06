import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth"; // فرض بر اینکه تابع auth سشن را برمی‌گرداند

// مسیرهایی که نیاز به لاگین دارند
const protectedRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  const session = await auth(); // گرفتن سشن کاربر

  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // اگر مسیر محافظت‌شده است و سشنی وجود ندارد، به صفحه لاگین ریدایرکت شود
  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // در غیر اینصورت، ادامه پیدا می‌کند
  return NextResponse.next();
}
