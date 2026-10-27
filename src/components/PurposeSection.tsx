"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Purpose — pinned center headline while a media mosaic pans horizontally
 * (with vertical stagger) behind it, scrubbed by scroll.
 */
export default function PurposeSection({ content }: Readonly<{ content: Dictionary["purpose"] }>) {
  const rootRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const track = ".purpose__track";
      const getAmount = () => {
        const el = track && (document.querySelector(track) as HTMLElement | null);
        return el ? Math.max(0, el.scrollWidth - window.innerWidth) : 0;
      };

      gsap.to(track, {
        x: () => -getAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: () => `+=${getAmount()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // vertical stagger: odd/even cards drift opposite directions
      gsap.utils.toArray<HTMLElement>(".purpose__card").forEach((card, i) => {
        gsap.to(card, {
          yPercent: i % 2 ? -12 : 12,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: () => `+=${getAmount()}`,
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        ".purpose__line > span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.09,
          scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      id="experience"
      data-theme="dark"
      style={{
        position: "relative",
        height: "100vh",
        background: "var(--ink)",
        color: "var(--text-on-dark)",
        overflow: "clip",
      }}
    >
      {/* horizontal media mosaic behind */}
      <div
        className="purpose__track"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          display: "flex",
          gap: "clamp(16px, 2vw, 32px)",
          paddingInline: "8vw",
          alignItems: "center",
          willChange: "transform",
        }}
      >
        {content.gallery.map((g, i) => (
          <figure
            key={g.src + i}
            className="purpose__card"
            style={{
              flex: "none",
              width: i % 2 ? "clamp(240px, 26vw, 480px)" : "clamp(200px, 22vw, 420px)",
              aspectRatio: i % 2 ? "4/5" : "4/3",
              margin: 0,
              overflow: "hidden",
              opacity: 0.5,
              willChange: "transform",
            }}
          >
            <img src={g.src} alt={g.alt} loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </figure>
        ))}
      </div>

      {/* dark scrim for contrast */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(7,10,9,0.7)" }} />

      {/* pinned center copy */}
      <div
        className="container-x"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p className="micro-label" style={{ color: "var(--text-secondary-dark)", marginBottom: 40 }}>
          {content.label}
        </p>
        <h2 className="display-m">
          {content.headline.map((line) => (
            <span key={line} className="purpose__line" style={{ display: "block", overflow: "hidden" }}>
              <span style={{ display: "block" }}>{line}</span>
            </span>
          ))}
        </h2>
        <p className="body-l" style={{ color: "var(--text-secondary-dark)", maxWidth: "44ch", margin: "32px auto 36px" }}>
          {content.body}
        </p>
        <a href="#vision" className="btn-pill" data-cursor>
          {content.cta}
        </a>
      </div>
    </section>
  );
}
