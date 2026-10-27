"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import MotionProvider from "./MotionProvider";
import CustomCursor from "./CustomCursor";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Hero from "./Hero";
import VisionIntro from "./VisionIntro";
import DriverEngineering from "./DriverEngineering";
import CinematicInterlude from "./CinematicInterlude";
import Manifesto from "./Manifesto";
import RoadsterSystems from "./RoadsterSystems";
import MaterialInterlude from "./MaterialInterlude";
import PurposeSection from "./PurposeSection";
import JournalList from "./JournalList";
import ReservationSection from "./ReservationSection";
import Footer from "./Footer";

export default function HomePage({
  dict,
  locale,
}: Readonly<{ dict: Dictionary; locale: Locale }>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MotionProvider>
      <CustomCursor />
      <Header
        content={dict.header}
        nav={dict.nav}
        locale={locale}
        localeLabel={dict.localeSwitcher.label}
        onMenuOpen={() => setMenuOpen(true)}
      />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        content={dict.header}
        nav={dict.nav}
        locale={locale}
        localeLabel={dict.localeSwitcher.label}
      />

      <main id="top">
        <Hero content={dict.hero} />
        <VisionIntro content={dict.vision} />
        <DriverEngineering content={dict.driver} />
        <CinematicInterlude content={dict.interlude} />
        <Manifesto content={dict.manifesto} />
        <RoadsterSystems content={dict.systems} />
        <MaterialInterlude content={dict.material} />
        <PurposeSection content={dict.purpose} />
        <JournalList content={dict.journal} locale={locale} />
        <ReservationSection content={dict.reservation} />
        <Footer content={dict.footer} nav={dict.nav} locale={locale} localeLabel={dict.localeSwitcher.label} />
      </main>
    </MotionProvider>
  );
}
