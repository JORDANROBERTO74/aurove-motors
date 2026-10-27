import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { site } from "@/config/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl, alternates, canonical } from "@/lib/seo";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0B0E0D",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);
  const image = absoluteUrl(`/${locale}/opengraph-image`);

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: canonical(locale),
      languages: alternates(),
    },
    openGraph: {
      type: "website",
      url: canonical(locale),
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [image],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
