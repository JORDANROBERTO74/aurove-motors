import { site } from "@/config/site";
import { defaultLocale, type Locale } from "@/i18n/config";

export function absoluteUrl(path = "") {
  return new URL(path, site.url).toString();
}

export function canonical(locale: Locale, path = "") {
  return absoluteUrl(`/${locale}${path}`);
}

export function alternates(path = "") {
  return {
    en: canonical("en", path),
    es: canonical("es", path),
    "x-default": canonical(defaultLocale, path),
  };
}
