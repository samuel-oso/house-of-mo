export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://houseofmoxperience.com";

export const SITE_NAME = "House of Mo'Xperience";
export const SITE_LEGAL_NAME = "House of MoXperience";
export const SITE_TAGLINE = "Where Dreams Become Experiences";

export const SITE_DESCRIPTION =
  "House of Mo'Xperience is a premier wedding and event planning company in Lagos, Nigeria. We design and execute unforgettable weddings, corporate events, and private parties — your personal dream maker.";

export const SHORT_DESCRIPTION =
  "Premier wedding & event planning in Lagos, Nigeria — your personal dream maker.";

export const KEYWORDS = [
  "wedding planner Lagos",
  "wedding planner Nigeria",
  "event planner Lagos",
  "event planning Nigeria",
  "luxury weddings Lagos",
  "corporate event planning Lagos",
  "party planner Lagos",
  "destination wedding Nigeria",
  "wedding coordinator Lagos",
  "House of MoXperience",
  "House of Mo'Xperience",
  "Moxperience",
  "best wedding planner in Lagos",
  "Nigerian wedding planner",
  "event management Lagos",
];

export const CONTACT = {
  email: "houseofmoxperience@gmail.com",
  phone: "+234-814-668-4159",
  phoneDisplay: "+234 814 668 4159",
  whatsapp: "https://wa.me/2348146684159",
  instagram:
    "https://www.instagram.com/_houseofmoxperience?igsh=bTkzYjI3Ynk3azhp&utm_source=qr",
  facebook: "https://www.facebook.com/profile.php?id=61575744886347",
  city: "Lagos",
  country: "Nigeria",
  countryCode: "NG",
};

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/hero.png`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EventPlanner", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  image: `${SITE_URL}/hero.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACT.city,
    addressCountry: CONTACT.countryCode,
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  sameAs: [CONTACT.facebook, CONTACT.instagram, CONTACT.whatsapp],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event & Wedding Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Planning",
          url: `${SITE_URL}/services/wedding`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Event Planning",
          url: `${SITE_URL}/services/corporate`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Party Planning",
          url: `${SITE_URL}/services/parties`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event Planning",
          url: `${SITE_URL}/services/event-planning`,
        },
      },
    ],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-NG",
};

export function serviceJsonLd({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    image,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "Country", name: "Nigeria" },
    ],
    serviceType: name,
  };
}
