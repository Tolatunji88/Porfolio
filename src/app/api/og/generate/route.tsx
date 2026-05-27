export const runtime = "edge";

import { ImageResponse } from "next/og";
import { person } from "@/resources";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.trim() || `${person.name}'s Portfolio`;
  const origin = new URL(request.url).origin;
  const avatarUrl = `${origin}${person.avatar}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background: "#f4f4f5",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <img
          src={avatarUrl}
          alt=""
          width={1200}
          height={630}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 45%, transparent 72%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "48px 56px",
            color: "#ffffff",
          }}
        >
          <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          <div style={{ fontSize: 26, marginTop: 12, opacity: 0.92 }}>{person.name}</div>
          <div style={{ fontSize: 20, marginTop: 6, opacity: 0.85 }}>{person.role}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
