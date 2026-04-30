import { ImageResponse } from "next/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 56,
          color: "#a2783a",
          fontSize: 140,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "-0.05em",
          paddingBottom: 8,
        }}
      >
        MX
      </div>
    ),
    { ...size },
  );
}
