"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandMark from "./BrandMark";
import LocaleSwitcher from "./LocaleSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

gsap.registerPlugin(ScrollTrigger);

/**
 * Thin minimal header. Transparent over the hero (white text over dark media),
 * switches to dark text + light backdrop over light sections via ScrollTrigger
 * on [data-theme] sections.
 */
export default function Header({
  content,
  nav,
  locale,
  localeLabel,
  onMenuOpen,
}: Readonly<{
  content: Dictionary["header"];
  nav: Dictionary["nav"];
  locale: Locale;
  localeLabel: string;
  onMenuOpen: () => void;
}>) {
  const headerRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 0,
        end: "max",
        onUpdate: () => {
          // Sample the stack under the header (the header itself is fixed on top)
          const section = document
            .elementsFromPoint(window.innerWidth / 2, 72)
            .map((el) => el.closest("[data-theme]"))
            .find(Boolean);
          setTheme(section?.getAttribute("data-theme") === "light" ? "light" : "dark");
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const dark = theme === "dark";

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 100,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "var(--gutter)",
        color: dark ? "var(--text-on-dark)" : "var(--text-on-light)",
        transition: "color 400ms var(--ease-soft), background-color 400ms var(--ease-soft)",
        backgroundColor: "transparent",
      }}
    >
      <a href="#top" aria-label={content.home} style={{ color: "inherit" }}>
        <BrandMark />
      </a>

      <nav aria-label="Primary" className="header-nav">
        <ul
          style={{
            display: "flex",
            gap: "clamp(20px, 2.4vw, 40px)",
            alignItems: "center",
          }}
        >
          {nav.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="header-link">
                <span className="header-link__inner">
                  <span>{link.label}</span>
                  <span aria-hidden="true">{link.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <LocaleSwitcher locale={locale} label={localeLabel} />
        <a href="#reserve" className="header-cta micro-label">
          {content.cta}
        </a>
        <button
          type="button"
          className="header-burger"
          aria-label={content.menuOpen}
          onClick={onMenuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
