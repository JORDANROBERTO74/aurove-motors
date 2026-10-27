export const site = {
  name: "Aurove Motors",
  description:
    "An electric roadster concept built around restraint: axial-flux power, active aerodynamics and a cabin that stays out of the way.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurove-motors.vercel.app",
  region: {
    timeZone: "America/New_York",
  },
} as const;

export const anchors = {
  model: "#roadster",
  design: "#design",
  engineering: "#technology",
  purpose: "#experience",
  journal: "#journal",
  reserve: "#reserve",
} as const;
