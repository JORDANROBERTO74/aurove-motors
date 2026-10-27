"use client";

import BrandMark from "./BrandMark";
import LocaleSwitcher from "./LocaleSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function Footer({
  content,
  nav,
  locale,
  localeLabel,
}: Readonly<{
  content: Dictionary["footer"];
  nav: Dictionary["nav"];
  locale: Locale;
  localeLabel: string;
}>) {
  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-theme="dark"
      style={{
        background: "var(--ink-deep)",
        color: "var(--text-on-dark)",
        paddingBlock: "clamp(64px, 10vh, 120px) 40px",
      }}
    >
      <div className="container-x">
        <div
          className="footer__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr auto",
            gap: "clamp(32px, 4vw, 64px)",
            paddingBottom: 64,
            borderBottom: "1px solid var(--hairline-dark)",
          }}
        >
          <div>
            <BrandMark />
            <p className="small" style={{ color: "var(--text-secondary-dark)", marginTop: 20 }}>
              {content.legal}
            </p>
            <div style={{ marginTop: 24 }}>
              <LocaleSwitcher locale={locale} label={localeLabel} />
            </div>
          </div>

          <nav aria-label={content.navLabel}>
            <ul style={{ display: "grid", gap: 12 }}>
              {nav.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link small">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <button
              type="button"
              onClick={toTop}
              className="footer__top"
              aria-label={content.backToTop}
              data-cursor
            >
              ↑
            </button>
          </div>
        </div>

        <div style={{ paddingTop: 32 }}>
          <p className="small" style={{ color: "var(--text-secondary-dark)" }}>
            {content.finalLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
