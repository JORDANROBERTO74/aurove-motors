import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const alt = "Aurove R1 — electric roadster concept";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0E0D",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#EDEAE2",
            fontSize: "30px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "34px",
              height: "34px",
              border: "2px solid #B86B3F",
            }}
          />
          <span>Aurove</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#EDEAE2",
              fontSize: "76px",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            {dict.meta.ogHeadline}
          </div>
          <div style={{ color: "rgba(237,234,226,0.68)", fontSize: "30px" }}>
            {dict.meta.ogTagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
