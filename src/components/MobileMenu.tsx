"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BrandMark from "./BrandMark";
import LocaleSwitcher from "./LocaleSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function MobileMenu({
  open,
  onClose,
  content,
  nav,
  locale,
  localeLabel,
}: Readonly<{
  open: boolean;
  onClose: () => void;
  content: Dictionary["header"];
  nav: Dictionary["nav"];
  locale: Locale;
  localeLabel: string;
}>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const links = el.querySelectorAll(".mobile-menu__link > span");

    if (open) {
      gsap.set(el, { visibility: "visible" });
      gsap
        .timeline()
        .to(el, {
          clipPath: "inset(0% 0 0% 0)",
          duration: 0.7,
          ease: "power4.inOut",
        })
        .fromTo(
          links,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8, ease: "power4.out", stagger: 0.06 },
          "-=0.25",
        );
    } else {
      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.55,
        ease: "power4.inOut",
        onComplete: () => gsap.set(el, { visibility: "hidden" }),
      });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div ref={ref} className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
      <div style={{ position: "absolute", top: 20, left: "var(--gutter)" }}>
        <BrandMark />
      </div>
      <button type="button" className="mobile-menu__close" onClick={onClose}>
        {content.menuClose}
      </button>
      <nav aria-label="Mobile">
        <ul style={{ display: "grid", gap: "0.2em" }}>
          {nav.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="mobile-menu__link" onClick={onClose}>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ position: "absolute", bottom: 40, left: "var(--gutter)" }}>
        <LocaleSwitcher locale={locale} label={localeLabel} />
      </div>
    </div>
  );
}
