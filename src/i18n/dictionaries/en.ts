export type NavLink = { label: string; href: string };

export type Feature = {
  index: string;
  title: string;
  description: string;
  media: string;
  mediaAlt: string;
  meta: [string, string];
};

export type JournalItem = {
  date: string;
  category: string;
  title: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogHeadline: string;
    ogTagline: string;
  };
  nav: NavLink[];
  header: { cta: string; menuOpen: string; menuClose: string; home: string };
  hero: {
    eyebrow: string;
    line: string;
    support: string;
    meta: string[];
    cta: string;
    video: string;
    poster: string;
  };
  vision: {
    label: string;
    headline: string[];
    body: string;
    media: string;
    mediaAlt: string;
  };
  driver: {
    label: string;
    headline: string;
    body: string;
    secondary: string;
    cta: string;
    media: string;
    mediaAlt: string;
  };
  interlude: { label: string; video: string; poster: string };
  manifesto: {
    label: string;
    headline: string[];
    body: string;
    statement: string;
    mediaWide: string;
    mediaWideAlt: string;
    mediaSmall: string;
    mediaSmallAlt: string;
    mediaVertical: string;
    mediaVerticalAlt: string;
  };
  systems: {
    label: string;
    featureLabel: string;
    features: Feature[];
  };
  material: { media: string; mediaAlt: string };
  purpose: {
    label: string;
    headline: string[];
    body: string;
    cta: string;
    media: string;
    mediaAlt: string;
    gallery: { src: string; alt: string }[];
  };
  journal: { heading: string; items: JournalItem[] };
  reservation: {
    headline: string[];
    body: string;
    circularCta: string;
    secondaryLink: string;
    secondaryHref: string;
    email: string;
  };
  footer: {
    legal: string;
    navLabel: string;
    finalLine: string;
    backToTop: string;
  };
  localeSwitcher: { label: string };
  notFound: { title: string; body: string; back: string };
};

export const en: Dictionary = {
  meta: {
    title: "Aurove Motors — Quiet, at speed",
    description:
      "The Aurove R1 is an electric roadster concept built around restraint: axial-flux power, active aerodynamics and a cabin that stays out of the way.",
    ogHeadline: "Quiet, at speed.",
    ogTagline: "The Aurove R1 electric roadster concept",
  },
  nav: [
    { label: "Model", href: "#roadster" },
    { label: "Design", href: "#design" },
    { label: "Engineering", href: "#technology" },
    { label: "Purpose", href: "#experience" },
    { label: "Journal", href: "#journal" },
  ],
  header: {
    cta: "Reserve",
    menuOpen: "Open menu",
    menuClose: "Close",
    home: "Aurove Motors home",
  },
  hero: {
    eyebrow: "Aurove R1 / 01",
    line: "Quiet, at speed.",
    support:
      "An electric roadster built on restraint: less noise, less weight, more road.",
    meta: ["Dual-motor", "610 km target range", "Concept 2027"],
    cta: "Discover the R1",
    video: "/video/r1-film.mp4",
    poster: "/assets/wide-dark-cinematic.webp",
  },
  vision: {
    label: "01 / Vision",
    headline: ["The", "Shape of", "Restraint"],
    body: "Aurove began with a subtraction. Remove the grille, the excess and the interface between driver and road, and what remains is a single continuous surface shaped by air.",
    media: "/assets/front-light-macro.webp",
    mediaAlt: "Macro detail of the Aurove R1 front light bar",
  },
  driver: {
    label: "02 / Engineering",
    headline: "Built around the driver",
    body: "The R1 places every control, surface and sightline around one idea: response without delay.",
    secondary:
      "An aluminium-intensive structure, adaptive dampers and a low-mounted battery keep the mass centred and the feedback direct.",
    cta: "Read the engineering notes",
    media: "/assets/interior-cockpit.webp",
    mediaAlt: "Aurove R1 cockpit in undyed wool and brushed aluminium",
  },
  interlude: {
    label: "Aurove R1 at the proving ground",
    video: "/video/r1-film.mp4",
    poster: "/assets/rear-three-quarter.webp",
  },
  manifesto: {
    label: "About / Aurove",
    headline: ["Less Noise.", "More Road."],
    body: "We build electric cars for people who still enjoy driving. That means fewer screens, honest materials and power delivered with precision rather than drama.",
    statement: "Engineering you can feel, not hear.",
    mediaWide: "/assets/wide-dark-cinematic.webp",
    mediaWideAlt: "Aurove R1 in a dark studio, rear three-quarter view",
    mediaSmall: "/assets/side-profile.webp",
    mediaSmallAlt: "Aurove R1 side profile",
    mediaVertical: "/assets/vertical-detail.webp",
    mediaVerticalAlt: "Vertical crop of the Aurove R1 bodywork",
  },
  systems: {
    label: "R1 Systems",
    featureLabel: "System",
    features: [
      {
        index: "01",
        title: "Axial-Flux Drive",
        description:
          "Two compact axial-flux motors deliver torque exactly where the road asks for it.",
        media: "/assets/front-three-quarter.webp",
        mediaAlt: "Front quarter of the Aurove R1 with its low nose",
        meta: ["Dual-motor", "425 kW combined"],
      },
      {
        index: "02",
        title: "Active Aero",
        description:
          "A moving rear deck and underbody flaps trim drag without adding height or noise.",
        media: "/assets/wheel-aero-channel.webp",
        mediaAlt: "Rear wheel and aerodynamic channel of the Aurove R1",
        meta: ["Adaptive downforce", "0.21 Cd target"],
      },
      {
        index: "03",
        title: "Vectoring",
        description:
          "Independent wheel torque rotates the car around the corner instead of into it.",
        media: "/assets/rear-light-macro.webp",
        mediaAlt: "Full-width rear light bar of the Aurove R1",
        meta: ["Torque vectoring", "Rear-biased"],
      },
      {
        index: "04",
        title: "Regenerative Braking",
        description:
          "Up to 0.3 g of deceleration recovers energy before the friction brakes are needed.",
        media: "/assets/steering-detail.webp",
        mediaAlt: "Steering wheel and material detail inside the Aurove R1",
        meta: ["One-pedal driving", "Recovers up to 0.3 g"],
      },
    ],
  },
  material: {
    media: "/assets/silver-reflection.webp",
    mediaAlt: "Brushed aluminium body panel of the Aurove R1",
  },
  purpose: {
    label: "Purpose / 02",
    headline: ["Build", "The Quiet", "Standard"],
    body: "Aurove is a small team of designers and engineers working in one studio, from first sketch to first prototype.",
    cta: "Our approach",
    media: "/assets/design-studio.webp",
    mediaAlt: "Aurove design studio with a full-scale clay model",
    gallery: [
      { src: "/assets/design-studio.webp", alt: "Aurove design studio" },
      { src: "/assets/front-three-quarter.webp", alt: "Aurove R1 front three-quarter" },
      { src: "/assets/wheel-aero-channel.webp", alt: "Wheel and aero channel" },
      { src: "/assets/interior-cockpit.webp", alt: "Cockpit detail" },
      { src: "/assets/silver-reflection.webp", alt: "Body reflection" },
    ],
  },
  journal: {
    heading: "Journal",
    items: [
      {
        date: "18.02.2027",
        category: "Design",
        title: "Why the R1 has no grille",
      },
      {
        date: "30.01.2027",
        category: "Engineering",
        title: "Tuning regen for a mountain road",
      },
      {
        date: "11.12.2026",
        category: "Materials",
        title: "The case against chrome",
      },
      {
        date: "04.11.2026",
        category: "Testing",
        title: "Cold-weather validation in northern Sweden",
      },
    ],
  },
  reservation: {
    headline: ["Reserve", "the R1"],
    body: "A refundable $500 deposit holds a place in the first build allocation. This site is a concept demo: no payment is taken.",
    circularCta: "Request access",
    secondaryLink: "Read the engineering notes",
    secondaryHref: "#technology",
    email: "reserve@aurove.example",
  },
  footer: {
    legal: "Aurove Motors © 2026",
    navLabel: "Footer",
    finalLine: "Designed in one studio. Built for the road.",
    backToTop: "Back to top",
  },
  localeSwitcher: { label: "Language" },
  notFound: {
    title: "Page not found",
    body: "The road ends here. The R1 is still on the model page.",
    back: "Back to the R1",
  },
};
