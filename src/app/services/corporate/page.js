import ServiceLayout from "@/components/ServiceLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, serviceJsonLd } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/services/corporate`;
const PAGE_IMAGE = `${SITE_URL}/corporate.png`;
const PAGE_DESCRIPTION =
  "Corporate event planning in Lagos, Nigeria. Product launches, conferences, galas, and executive gatherings — designed and executed for impact by House of Mo'Xperience.";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Corporate Event Planner — Lagos, Nigeria",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/services/corporate" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Corporate Event Planner — Lagos | House of Mo'Xperience",
    description: PAGE_DESCRIPTION,
    images: [{ url: PAGE_IMAGE, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Planner — Lagos",
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

const jsonLd = serviceJsonLd({
  name: "Corporate Event Planning",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  image: PAGE_IMAGE,
});

export default function CorporateEvents() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceLayout title="CORPORATE EVENTS" label="our services">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 min-h-[400px] max-h-[550px] bg-cover bg-center bg-[url('/corporate.png')]" />
        <div className="md:col-span-7">
          <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
            <p>
              At House of MoXperience, we understand that every corporate event
              is a reflection of your brand. Whether it’s a product launch,
              conference, gala, or executive gathering, we create experiences
              that are polished, impactful, and flawlessly executed.
            </p>
            <p>
              We combine creativity with professionalism to deliver events that
              not only look exceptional but also achieve your business goals.
              From planning to execution, every detail is handled with precision
              to ensure a seamless and memorable experience for you and your
              guests.
            </p>
          </div>
          <p className="font-script text-[24px] text-[#a2783a] mt-6">
            Service Includes
          </p>
          <ul className="mt-4 space-y-1 font-serif text-[17px] text-[#666] leading-[1.8em]">
            <li>
              ● Concept development and event planning tailored to your brand
              identity
            </li>
            <li>● Venue sourcing and setup coordination</li>
            <li>
              ● Vendor management (catering, décor, audiovisual, branding, etc.)
            </li>
            <li>● Guest management and registration coordination</li>
            <li>● Event timeline creation and full program scheduling</li>
            <li>
              ● On-site coordination and supervision to ensure smooth execution
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
    </>
  );
}
