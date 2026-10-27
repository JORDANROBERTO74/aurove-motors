"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeCookie, locales, type Locale } from "@/i18n/config";

export default function LocaleSwitcher({
  locale,
  label,
}: Readonly<{ locale: Locale; label: string }>) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div className="locale-switcher" role="group" aria-label={label}>
      {locales.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${rest ? `/${rest}` : ""}`}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              document.cookie = `${localeCookie}=${item};path=/;max-age=31536000;samesite=lax`;
            }}
            className="locale-switcher__item"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
