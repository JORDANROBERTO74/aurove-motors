import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
