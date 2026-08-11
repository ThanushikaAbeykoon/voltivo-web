import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(5,81,24,0.14), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#ffffff",
              border: "1px solid #cddcd1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#03fc41",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, color: "#000000", fontWeight: 600 }}>
              Voltivo
            </span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                color: "#45524a",
              }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#000000",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Where Energy Meets Intelligence
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#45524a",
            marginTop: 24,
            maxWidth: 780,
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
