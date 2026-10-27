import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { absoluteUrl, alternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = alternates();

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
