import "./globals.css";
import {
  Cormorant_Garamond,
  Nunito_Sans,
  Rouge_Script,
} from "next/font/google";
import Sidebar from "@/components/Sidebar";
import JsonLd from "@/components/JsonLd";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  KEYWORDS,
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const rougeScript = Rouge_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rouge",
  display: "swap",
});

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Wedding & Event Planner in Lagos, Nigeria`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Wedding & Event Planning",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: {
  //   google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  // },
};

/** @type {import("next").Viewport} */
export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${nunitoSans.variable} ${rougeScript.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css"
        />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="h-full flex">
        <Sidebar />
        <main className="lg:ml-[23%] flex-1 h-full overflow-y-auto scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
