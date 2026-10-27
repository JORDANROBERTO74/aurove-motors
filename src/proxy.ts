import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, locales } from "@/i18n/config";

function fromHeader(header: string | null) {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { tag: tag.split("-")[0].toLowerCase(), quality: Number(quality ?? 1) };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    if (locales.includes(tag as (typeof locales)[number])) {
      return tag as (typeof locales)[number];
    }
  }
  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (isLocale(segment)) return NextResponse.next();

  const stored = request.cookies.get(localeCookie)?.value;
  const locale = isLocale(stored)
    ? stored
    : fromHeader(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
