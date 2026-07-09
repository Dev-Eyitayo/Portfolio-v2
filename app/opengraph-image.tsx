import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ezekiel Eyitayo — Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0B0E14";
const inkSoft = "#10131A";
const paper = "#FAFAF8";
const rust = "#D97B3F";

const EYEBROW = "AVAILABLE FOR BACKEND & FULL-STACK ROLES";
const NAME = "Ezekiel Eyitayo";
const TAGLINE = "builds systems that hold up.";
const TERMINAL_LABEL = "session — bash";
const PROMPT = "~/eyitayo $";
const CMD_WHOAMI = "whoami";
const OUT_WHOAMI = "backend software engineer";
const CMD_STACK = "ls ./stack";
const OUT_STACK = "django · fastapi · postgresql · next.js";
const SITE = "eyitayo.online";

// Fetches a glyph-subset font file via the Google Fonts CSS API (the pattern
// documented in the Next.js OG image guide). Returns null on any failure so the
// image still renders with the bundled fallback font.
async function loadGoogleFont(family: string, weight: number, text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const monoText = [EYEBROW, TERMINAL_LABEL, PROMPT, CMD_WHOAMI, OUT_WHOAMI, CMD_STACK, OUT_STACK, SITE].join("");
  const [inter, mono, portrait] = await Promise.all([
    loadGoogleFont("Inter", 700, NAME + TAGLINE),
    loadGoogleFont("JetBrains Mono", 500, monoText),
    readFile(join(process.cwd(), "public", "ezekiel.jpg")),
  ]);

  const fonts: { name: string; data: ArrayBuffer; weight: 500 | 700; style: "normal" }[] = [];
  if (inter) fonts.push({ name: "Inter", data: inter, weight: 700, style: "normal" });
  if (mono) fonts.push({ name: "JetBrains Mono", data: mono, weight: 500, style: "normal" });

  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: ink,
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(250,250,248,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,250,248,0.05) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 560,
            height: 560,
            display: "flex",
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(217,123,63,0.22) 0%, rgba(217,123,63,0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "64px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  display: "flex",
                  borderRadius: 9999,
                  backgroundColor: rust,
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: 17,
                  letterSpacing: 4,
                  color: rust,
                }}
              >
                {EYEBROW}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 74,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -2,
                color: paper,
              }}
            >
              {NAME}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontSize: 44,
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: -1,
                color: "rgba(250,250,248,0.45)",
              }}
            >
              {TAGLINE}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 40,
                width: 620,
                borderRadius: 14,
                overflow: "hidden",
                backgroundColor: inkSoft,
                border: "1px solid rgba(250,250,248,0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  borderBottom: "1px solid rgba(250,250,248,0.08)",
                }}
              >
                <div style={{ display: "flex", width: 11, height: 11, borderRadius: 9999, backgroundColor: "rgba(217,123,63,0.7)" }} />
                <div style={{ display: "flex", width: 11, height: 11, borderRadius: 9999, backgroundColor: "rgba(250,250,248,0.3)" }} />
                <div style={{ display: "flex", width: 11, height: 11, borderRadius: 9999, backgroundColor: "rgba(250,250,248,0.3)" }} />
                <div
                  style={{
                    display: "flex",
                    marginLeft: 10,
                    fontFamily: "JetBrains Mono",
                    fontSize: 15,
                    color: "rgba(250,250,248,0.4)",
                  }}
                >
                  {TERMINAL_LABEL}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                  padding: "18px 22px",
                  fontFamily: "JetBrains Mono",
                  fontSize: 21,
                }}
              >
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ display: "flex", color: rust }}>{PROMPT}</div>
                  <div style={{ display: "flex", color: paper }}>{CMD_WHOAMI}</div>
                </div>
                <div style={{ display: "flex", color: "rgba(250,250,248,0.65)" }}>{OUT_WHOAMI}</div>
                <div style={{ display: "flex", gap: 12 }}>
                  <div style={{ display: "flex", color: rust }}>{PROMPT}</div>
                  <div style={{ display: "flex", color: paper }}>{CMD_STACK}</div>
                </div>
                <div style={{ display: "flex", color: "rgba(250,250,248,0.65)" }}>{OUT_STACK}</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
            <div
              style={{
                display: "flex",
                padding: 10,
                borderRadius: 9999,
                border: "2px solid rgba(217,123,63,0.55)",
              }}
            >
              <img
                src={portraitSrc}
                width={280}
                height={280}
                style={{ borderRadius: 9999, objectFit: "cover" }}
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 19,
                color: "rgba(250,250,248,0.55)",
              }}
            >
              {SITE}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}