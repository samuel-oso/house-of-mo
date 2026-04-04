import ServiceLayout from "@/components/ServiceLayout";

export default function Parties() {
  return (
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
  );
}
