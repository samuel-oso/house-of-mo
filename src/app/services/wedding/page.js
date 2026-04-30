import ServiceLayout from "@/components/ServiceLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, serviceJsonLd } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/services/wedding`;
const PAGE_IMAGE = `${SITE_URL}/wedding.png`;
const PAGE_DESCRIPTION =
  "Luxury wedding planning in Lagos, Nigeria. Full-service traditional and white wedding planning, vendor management, photography, videography, and on-site coordination by House of Mo'Xperience.";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Wedding Planner — Luxury Weddings in Lagos",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/services/wedding" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Wedding Planner — Luxury Weddings in Lagos | House of Mo'Xperience",
    description: PAGE_DESCRIPTION,
    images: [{ url: PAGE_IMAGE, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Planner — Luxury Weddings in Lagos",
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

const jsonLd = serviceJsonLd({
  name: "Wedding Planning",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  image: PAGE_IMAGE,
});

export default function WeddingPlanner() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceLayout title="WEDDING PLANNER" label="our services">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 min-h-[400px] max-h-[550px] bg-cover bg-center bg-[url('/wedding.png')]" />
          <div className="md:col-span-7">
            <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
              <p>
                At House of MoXperience, we believe your wedding should be nothing
                short of extraordinary. From the first idea to the final moment,
                we are dedicated to bringing your dream wedding to life with
                elegance, precision, and care.
              </p>
              <p>
                We take the stress off you so you can fully enjoy every step of
                your journey. Our approach is deeply personal — we listen, we
                understand, and we design a celebration that reflects your love
                story beautifully.
              </p>
            </div>
            <p className="font-script text-[24px] text-[#a2783a] mt-6">
              Service Includes
            </p>
            <ul className="mt-4 space-y-1 font-serif text-[17px] text-[#666] leading-[1.8em]">
              <li>
                ● Full-service wedding planning and coordination (traditional &
                white wedding)
              </li>
              <li>● Professional photography & videography coverage</li>
              <li>
                ● Content creation (real-time highlights, reels, and social
                media-ready moments)
              </li>
              <li>● Pre-wedding consultation and planning sessions</li>
              <li>● Vendor sourcing, coordination, and management</li>
              <li>
                ● Wedding timeline creation and full event schedule management
              </li>
              <li>● Ceremony & reception setup coordination and supervision</li>
              <li>
                ● Catering and drinks management for a seamless guest experience
              </li>
              <li>
                ● Entertainment booking and coordination (DJ, MC, live band)
              </li>
              <li>
                ● Guest experience management, including RSVP support and
                hospitality
              </li>
              <li>
                ● On-site coordination team to manage logistics and ensure smooth
                execution
              </li>
              <li>● Traditional engagement ceremony coordination</li>
              <li>
                ● Personalized wedding website (RSVP, event details, schedule)
              </li>
            </ul>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
}
