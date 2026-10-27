import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { absoluteUrl, canonical } from "@/lib/seo";
import HomePage from "@/components/HomePage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: canonical(locale),
        logo: absoluteUrl("/brand/aurove-mark.svg"),
        email: dict.reservation.email,
      },
      {
        "@type": "Product",
        name: "Aurove R1",
        description: dict.meta.description,
        brand: { "@type": "Brand", name: site.name },
        category: "Electric roadster concept",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage dict={dict} locale={locale} />
    </>
  );
}
