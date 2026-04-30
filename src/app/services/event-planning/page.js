import ServiceLayout from "@/components/ServiceLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, serviceJsonLd } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/services/event-planning`;
const PAGE_IMAGE = `${SITE_URL}/hero.png`;
const PAGE_DESCRIPTION =
  "Full-service event planning in Lagos, Nigeria. From concept to coordination, House of Mo'Xperience handles vendors, timelines, and on-the-day execution for unforgettable events.";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Event Planning — Full-Service Coordination in Lagos",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/services/event-planning" },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Event Planning — Full-Service Coordination in Lagos",
    description: PAGE_DESCRIPTION,
    images: [{ url: PAGE_IMAGE, width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Planning — Lagos",
    description: PAGE_DESCRIPTION,
    images: [PAGE_IMAGE],
  },
};

const jsonLd = serviceJsonLd({
  name: "Event Planning",
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  image: PAGE_IMAGE,
});

export default function EventPlanning() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceLayout title="EVENT PLANNING" label="our services">
      <div className="grid md:grid-cols-12 gap-10">
        <div
          className="md:col-span-5 min-h-[400px] max-h-[550px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80')]"
        />
        <div className="md:col-span-7">
          <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
            <p>
              Qurabit aliquet orci elit gene tristique lorem commodo vitae.
              Aliquam tince felis the gravida aliquam, neque libero hendrerit
              magna, sit amet mollis lacus quam maurisine. Aliquam erat the
              druna volutpat.
            </p>
            <p>
              Lhasellus viverra tristique justo. Duis vitae diam neque. Vivamus
              ac est augue. Vestibule fringilla dui at elit finibus viverra nec
              a lacus. Sedat themo eros odio semper sollicitudin mi suscipit
              non. Suspendisse sagie fermentum quamen.
            </p>
            <p>
              Qurabit aliquet orci elit gene tristique lorem commodo vitae.
              Aliquam tince felis mana gravida aliquam, neque libero hendrerit
              magna, sit amet mollis lacus quam vivensere the liquam erat the
              druna volutpat. Lhasellus viverra tristique justo. Duis vitae diam
              neque. Vivamus ac est augue. Vestibule fringilla dui at elit
              finibus viverra nec a lacus.
            </p>
          </div>
          <p className="font-script text-[24px] text-[#a2783a] mt-6">
            Service Includes
          </p>
          <ol className="list-decimal list-inside mt-4 space-y-1 font-serif text-[17px] text-[#666] leading-[1.8em]">
            <li>PWE Weddings & Events Workbook</li>
            <li>Unlimited access to expert wedding advice (via e-mail)</li>
            <li>Access to Preferred Vendors List</li>
            <li>Wedding Assistant for wedding day</li>
            <li>
              Oversee and help with ceremony/reception site set up & tear down
            </li>
            <li>Review of Vendor contracts</li>
            <li>
              Distribute final payments and gratuities to vendors as necessary
            </li>
          </ol>
        </div>
      </div>
    </ServiceLayout>
    </>
  );
}
