import HomeClient from "./home-client";
import JsonLd from "@/components/JsonLd";
import {
  SITE_NAME,
  SITE_URL,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
} from "@/lib/seo";

/** @type {import("next").Metadata} */
export const metadata = {
  title: {
    absolute: `${SITE_NAME} — ${SITE_TAGLINE} | Lagos, Nigeria`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  primaryImageOfPage: DEFAULT_OG_IMAGE.url,
  inLanguage: "en-NG",
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HomeClient />
    </>
  );
}
