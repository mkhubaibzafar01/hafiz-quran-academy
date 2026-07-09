import { ImageResponse } from "next/og";
import { SITE_NAME } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };

export function buildOgImage({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundImage:
            "linear-gradient(135deg, #0c2c1f 0%, #113b29 45%, #164a33 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundImage:
                "linear-gradient(135deg, #4a8f6c 0%, #164a33 60%, #0c2c1f 100%)",
              color: "#f0da97",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            Q
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: "#fffdf8", fontWeight: 600 }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {kicker ? (
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                color: "#e5c265",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 46 ? "52px" : "64px",
              lineHeight: 1.15,
              color: "#fffdf8",
              fontWeight: 700,
              maxWidth: "980px",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                color: "#fbf8f1cc",
                maxWidth: "900px",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
