import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale } from "@/i18n/config";

export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        paddingInline: "var(--gutter)",
      }}
    >
      <div>
        <p className="micro-label" style={{ color: "var(--text-secondary-dark)" }}>
          404
        </p>
        <h1 className="heading-l" style={{ marginBlock: 24 }}>
          {dict.notFound.title}
        </h1>
        <p className="body-l" style={{ color: "var(--text-secondary-dark)", marginBottom: 32 }}>
          {dict.notFound.body}
        </p>
        <Link href={`/${defaultLocale}`} className="btn-pill">
          {dict.notFound.back}
        </Link>
      </div>
    </main>
  );
}
