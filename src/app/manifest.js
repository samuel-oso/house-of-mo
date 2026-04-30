import { SITE_NAME, SHORT_DESCRIPTION } from "@/lib/seo";

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: "MoXperience",
    description: SHORT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
    ],
  };
}
