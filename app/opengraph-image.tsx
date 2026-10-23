import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ezekiel Eyitayo — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bg = "#0A0D14";
const cardBg = "#121620";
const textLight = "#F8FAFC";
const textMuted = "#94A3B8";
const accent = "#10B981";

export default async function OpenGraphImage() {
  let portraitSrc = "";
  try {
    const portrait = await readFile(join(process.cwd(), "public", "ezekiel.jpg"));
    portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;
  } catch (e) {
    console.error("Could not load portrait for OG image", e);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: bg,
          padding: "70px 80px",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 18,
              fontWeight: 600,
              color: accent,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: "#10B981",
              }}
            />
            AVAILABLE FOR PROJECTS & FULL-TIME ROLES
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: -1.5,
              color: textLight,
            }}
          >
            Ezekiel Eyitayo
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontSize: 34,
              fontWeight: 600,
              color: textMuted,
            }}
          >
            Full-stack developer with a strong backend foundation.
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: cardBg,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "10px 18px",
                fontSize: 16,
                fontWeight: 500,
                color: textLight,
              }}
            >
              Next.js &amp; React
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: cardBg,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "10px 18px",
                fontSize: 16,
                fontWeight: 500,
                color: textLight,
              }}
            >
              Python &amp; FastAPI / Django
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: cardBg,
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "10px 18px",
                fontSize: 16,
                fontWeight: 500,
                color: textLight,
              }}
            >
              PostgreSQL &amp; Payments
            </div>
          </div>
        </div>

        {portraitSrc ? (
          <div
            style={{
              display: "flex",
              padding: 8,
              borderRadius: 32,
              backgroundColor: cardBg,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <img
              src={portraitSrc}
              width={280}
              height={280}
              style={{ borderRadius: 24, objectFit: "cover" }}
              alt=""
            />
          </div>
        ) : null}
      </div>
    ),
    {
      ...size,
    }
  );
}
