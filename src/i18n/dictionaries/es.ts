import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Aurove Motors — Silencio, a velocidad",
    description:
      "El Aurove R1 es un concept de roadster eléctrico construido desde la contención: propulsión axial-flux, aerodinámica activa y un habitáculo que no estorba.",
    ogHeadline: "Silencio, a velocidad.",
    ogTagline: "El concept de roadster eléctrico Aurove R1",
  },
  nav: [
    { label: "Modelo", href: "#roadster" },
    { label: "Diseño", href: "#design" },
    { label: "Ingeniería", href: "#technology" },
    { label: "Propósito", href: "#experience" },
    { label: "Diario", href: "#journal" },
  ],
  header: {
    cta: "Reservar",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar",
    home: "Inicio de Aurove Motors",
  },
  hero: {
    eyebrow: "Aurove R1 / 01",
    line: "Silencio, a velocidad.",
    support:
      "Un roadster eléctrico construido desde la contención: menos ruido, menos peso, más carretera.",
    meta: ["Dual-motor", "610 km de autonomía objetivo", "Concept 2027"],
    cta: "Descubrir el R1",
    video: "/video/r1-film.mp4",
    poster: "/assets/wide-dark-cinematic.webp",
  },
  vision: {
    label: "01 / Visión",
    headline: ["La forma", "De la", "Contención"],
    body: "Aurove empezó con una resta. Quita la parrilla, el exceso y la interfaz entre conductor y carretera, y lo que queda es una superficie continua moldeada por el aire.",
    media: "/assets/front-light-macro.webp",
    mediaAlt: "Detalle macro de la firma luminosa frontal del Aurove R1",
  },
  driver: {
    label: "02 / Ingeniería",
    headline: "Construido alrededor del conductor",
    body: "El R1 coloca cada control, superficie y línea de visión alrededor de una idea: respuesta sin demora.",
    secondary:
      "Una estructura de aluminio, amortiguadores adaptativos y una batería baja mantienen la masa centrada y el tacto directo.",
    cta: "Leer las notas de ingeniería",
    media: "/assets/interior-cockpit.webp",
    mediaAlt: "Habitáculo del Aurove R1 en lana sin teñir y aluminio cepillado",
  },
  interlude: {
    label: "Aurove R1 en la pista de pruebas",
    video: "/video/r1-film.mp4",
    poster: "/assets/rear-three-quarter.webp",
  },
  manifesto: {
    label: "Acerca de / Aurove",
    headline: ["Menos ruido.", "Más carretera."],
    body: "Construimos coches eléctricos para quien todavía disfruta conduciendo. Eso significa menos pantallas, materiales honestos y potencia entregada con precisión, no con drama.",
    statement: "Ingeniería que se siente, no se escucha.",
    mediaWide: "/assets/wide-dark-cinematic.webp",
    mediaWideAlt: "Aurove R1 en estudio oscuro, vista trasera tres cuartos",
    mediaSmall: "/assets/side-profile.webp",
    mediaSmallAlt: "Perfil lateral del Aurove R1",
    mediaVertical: "/assets/vertical-detail.webp",
    mediaVerticalAlt: "Recorte vertical de la carrocería del Aurove R1",
  },
  systems: {
    label: "Sistemas del R1",
    featureLabel: "Sistema",
    features: [
      {
        index: "01",
        title: "Propulsión axial-flux",
        description:
          "Dos motores axial-flux compactos entregan par exactamente donde la carretera lo pide.",
        media: "/assets/front-three-quarter.webp",
        mediaAlt: "Tres cuartos delantero del Aurove R1 con su morro bajo",
        meta: ["Dual-motor", "425 kW combinados"],
      },
      {
        index: "02",
        title: "Aerodinámica activa",
        description:
          "Un deck trasero móvil y flaps en el piso recortan la resistencia sin sumar altura ni ruido.",
        media: "/assets/wheel-aero-channel.webp",
        mediaAlt: "Rueda trasera y canal aerodinámico del Aurove R1",
        meta: ["Carga aerodinámica adaptativa", "Objetivo 0,21 Cd"],
      },
      {
        index: "03",
        title: "Vectorización",
        description:
          "El par independiente por rueda gira el coche alrededor de la curva, no hacia ella.",
        media: "/assets/rear-light-macro.webp",
        mediaAlt: "Barra luminosa trasera de ancho completo del Aurove R1",
        meta: ["Torque vectoring", "Tracción trasera"],
      },
      {
        index: "04",
        title: "Frenada regenerativa",
        description:
          "Hasta 0,3 g de deceleración recuperan energía antes de que actúen los frenos de fricción.",
        media: "/assets/steering-detail.webp",
        mediaAlt: "Volante y detalle de materiales del interior del Aurove R1",
        meta: ["Conducción con un pedal", "Recupera hasta 0,3 g"],
      },
    ],
  },
  material: {
    media: "/assets/silver-reflection.webp",
    mediaAlt: "Panel de aluminio cepillado de la carrocería del Aurove R1",
  },
  purpose: {
    label: "Propósito / 02",
    headline: ["Construir", "El nuevo", "Estándar"],
    body: "Aurove es un equipo pequeño de diseñadores e ingenieros trabajando en un solo estudio, del primer boceto al primer prototipo.",
    cta: "Nuestro enfoque",
    media: "/assets/design-studio.webp",
    mediaAlt: "Estudio de diseño de Aurove con un modelo a escala real en arcilla",
    gallery: [
      { src: "/assets/design-studio.webp", alt: "Estudio de diseño de Aurove" },
      { src: "/assets/front-three-quarter.webp", alt: "Tres cuartos delantero del Aurove R1" },
      { src: "/assets/wheel-aero-channel.webp", alt: "Rueda y canal aerodinámico" },
      { src: "/assets/interior-cockpit.webp", alt: "Detalle del habitáculo" },
      { src: "/assets/silver-reflection.webp", alt: "Reflejo de la carrocería" },
    ],
  },
  journal: {
    heading: "Diario",
    items: [
      {
        date: "18.02.2027",
        category: "Diseño",
        title: "Por qué el R1 no tiene parrilla",
      },
      {
        date: "30.01.2027",
        category: "Ingeniería",
        title: "Ajustar la regeneración para una carretera de montaña",
      },
      {
        date: "11.12.2026",
        category: "Materiales",
        title: "El caso contra el cromado",
      },
      {
        date: "04.11.2026",
        category: "Pruebas",
        title: "Validación en frío en el norte de Suecia",
      },
    ],
  },
  reservation: {
    headline: ["Reserva", "el R1"],
    body: "Un depósito reembolsable de $500 reserva un lugar en la primera asignación de producción. Este sitio es una demo conceptual: no se cobra nada.",
    circularCta: "Solicitar acceso",
    secondaryLink: "Leer las notas de ingeniería",
    secondaryHref: "#technology",
    email: "reserve@aurove.example",
  },
  footer: {
    legal: "Aurove Motors © 2026",
    navLabel: "Pie de página",
    finalLine: "Diseñado en un solo estudio. Construido para la carretera.",
    backToTop: "Volver arriba",
  },
  localeSwitcher: { label: "Idioma" },
  notFound: {
    title: "Página no encontrada",
    body: "La carretera termina aquí. El R1 sigue en la página del modelo.",
    back: "Volver al R1",
  },
};
