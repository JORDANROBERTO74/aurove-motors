import { site } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function formatDate(value: string, locale: Locale) {
  const [day, month, year] = value.split(".");
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 12));
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    dateStyle: "medium",
    timeZone: site.region.timeZone,
  }).format(date);
}
