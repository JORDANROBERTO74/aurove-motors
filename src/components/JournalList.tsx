"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/i18n/config";

gsap.registerPlugin(ScrollTrigger);

/**
 * Journal — minimal editorial news list. Hairline rows: date / category pill /
 * title. Hover shifts title. "VIEW ALL" pill below.
 */
export default function JournalList({
  content,
  locale,
}: Readonly<{ content: Dictionary["journal"]; locale: Locale }>) {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journal__row",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: rootRef.current, start: "top 72%" },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      id="journal"
      data-theme="light"
      style={{ background: "var(--bone)", paddingBlock: "clamp(100px, 16vh, 200px)" }}
    >
      <div className="container-x">
        <h2 className="display-m" style={{ marginBottom: 64 }}>
          {content.heading}
        </h2>

        <ul>
          {content.items.map((item) => (
            <li key={item.title} className="journal__row" style={{ borderTop: "1px solid var(--hairline-light)" }}>
              <div
                className="journal__link"
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px auto 1fr",
                  alignItems: "center",
                  gap: "clamp(16px, 3vw, 48px)",
                  paddingBlock: "clamp(20px, 3vh, 32px)",
                }}
              >
                <span className="small" style={{ color: "var(--text-secondary-light)", fontVariantNumeric: "tabular-nums" }}>
                  {formatDate(item.date, locale)}
                </span>
                <span className="journal__pill micro-label">{item.category}</span>
                <span className="journal__title body-l">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
