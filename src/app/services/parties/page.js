import ServiceLayout from "@/components/ServiceLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, serviceJsonLd } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/services/parties`;
const PAGE_IMAGE = `${SITE_URL}/parties.png`;
const PAGE_DESCRIPTION =
  "Party planning in Lagos, Nigeria — birthdays, anniversaries, baby showers, housewarmings, and milestone celebrations curated end-to-end by House of Mo'Xperience.";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Party Planner — Birthdays, Anniversaries & Celebrations in Lagos",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/services/parties" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Party Planner — Lagos | House of Mo'Xperience",
    description: PAGE_DESCRIPTION,
    images: [{ url: PAGE_IMAGE, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Planner — Lagos",
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

const jsonLd = serviceJsonLd({
  name: "Party Planning",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  image: PAGE_IMAGE,
});

export default function Parties() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceLayout title="PARTY PLANNING" label="our services">
      <div className="grid md:grid-cols-12 gap-10">
        <div
          className="md:col-span-5 min-h-[400px] max-h-[550px] bg-cover bg-center bg-[url('/parties.png')]"
        />
        <div className="md:col-span-7">
          <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
            <p>
              At House of MoXperience, we turn every celebration into a moment
              to remember. Whether it's a birthday, anniversary, baby shower,
              housewarming, or special milestone, we bring creativity, style,
              and precision to every detail.
            </p>
            <p>
              From concept to execution, we ensure that your party is fun,
              seamless, and uniquely yours. We handle everything, from décor and
              catering to entertainment and logistics, so you can fully enjoy
              the celebration with your guests.
            </p>
          </div>
          <p className="font-script text-[24px] text-[#a2783a] mt-6">
            What This Service Includes
          </p>
          <ul className="mt-4 space-y-1 font-serif text-[17px] text-[#666] leading-[1.8em]">
            <li>● Theme & concept creation tailored to your vision</li>
            <li>
              ● Vendor management (catering, décor, entertainment, photography)
            </li>
            <li>
              ● Guest experience coordination, including RSVP tracking and
              on-site support
            </li>
            <li>● Full party timeline and schedule management</li>
            <li>
              ● On-site coordination to manage setup, flow, and any last-minute
              needs
            </li>
            <li>
              ● Drinks and catering oversight to ensure smooth service
              throughout the event
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
    </>
  );
}
