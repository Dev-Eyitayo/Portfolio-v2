import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ezekiel Eyitayo — Software Developer";
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

  let fontMedium: Buffer | undefined;
  let fontSemiBold: Buffer | undefined;
  let fontBold: Buffer | undefined;

  try {
    fontMedium = await readFile(join(process.cwd(), "public", "fonts", "InstrumentSans-Medium.ttf"));
    fontSemiBold = await readFile(join(process.cwd(), "public", "fonts", "InstrumentSans-SemiBold.ttf"));
    fontBold = await readFile(join(process.cwd(), "public", "fonts", "InstrumentSans-Bold.ttf"));
  } catch (e) {
    console.error("Could not load Instrument Sans fonts for OG image", e);
  }

  const fonts = [];
  if (fontMedium) {
    fonts.push({
      name: "Instrument Sans",
      data: fontMedium,
      style: "normal" as const,
      weight: 500 as const,
    });
  }
  if (fontSemiBold) {
    fonts.push({
      name: "Instrument Sans",
      data: fontSemiBold,
      style: "normal" as const,
      weight: 600 as const,
    });
  }
  if (fontBold) {
    fonts.push({
      name: "Instrument Sans",
      data: fontBold,
      style: "normal" as const,
      weight: 700 as const,
    });
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
          fontFamily: '"Instrument Sans", system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 2,
              color: accent,
            }}
          >
            SOFTWARE DEVELOPER • FULL-STACK &amp; BACKEND
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1.5,
              color: textLight,
            }}
          >
            Ezekiel Eyitayo
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 32,
              fontWeight: 600,
              lineHeight: 1.3,
              color: textMuted,
            }}
          >
            I build products that help businesses solve problems and grow.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 36,
              fontSize: 20,
              fontWeight: 600,
              color: "#64748B",
              letterSpacing: 0.5,
            }}
          >
            eyitayo.online
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
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
