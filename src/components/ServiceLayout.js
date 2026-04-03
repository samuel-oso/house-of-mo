"use client";

const packages = [
  {
    name: "CEREMONY",
    price: "2500",
    features: ["Decoration", "DJ & Sound", "Photographer", "Celebrant"],
  },
  {
    name: "PARTY",
    price: "3500",
    features: ["Decoration", "DJ & Sound", "Photographer", "Party Planner"],
  },
  {
    name: "FULL WEDDING",
    price: "6500",
    features: [
      "Decoration",
      "DJ & Sound",
      "Photographer",
      "Make-Up & Hair Dresser",
    ],
  },
];

export default function ServiceLayout({ title, label, children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div
        className="bg-cover bg-center relative py-16 px-8"
        style={{
          backgroundImage:
            "url('https://duruthemes.com/demo/html/pwe/onepage/images/topbanner.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative">
          <p className="block relative top-[12px] font-script text-[27px] text-[#ADADAD] leading-[1.5em] mb-0">
            {label || "our services"}
          </p>
          <h1 className="font-sans text-black text-[24px] font-medium uppercase tracking-[1px] mb-0">
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 pb-16">{children}</div>

      {/* Planning Packages */}
      <section className="bg-[#f5f3ef] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-12">
            <p className="font-script text-[24px] text-[#a2783a] leading-[1em]">
              includes
            </p>
            <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mt-2">
              PLANNING PACKAGES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-lg shadow-sm p-10 text-center"
              >
                <h3 className="font-sans text-[14px] font-medium uppercase tracking-[2px] text-black mb-6">
                  {pkg.name}
                </h3>
                <div className="flex justify-center mb-2">
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <p className="font-serif text-[48px] text-black leading-none">
                  {pkg.price}
                  <span className="text-[20px] align-top">$</span>
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[2px] text-[#a2783a] mt-2 mb-6">
                  STARTING FROM
                </p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="font-serif text-[16px] text-[#666]">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className="inline-block font-sans bg-black border border-black text-white py-[10px] px-[24px] font-medium text-[11px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-500"
                >
                  SEE MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="font-serif text-[32px] font-semibold uppercase text-white leading-[1.2em] tracking-[0px]">
                PWE<sup className="text-white text-[14px] align-super">®</sup>
              </h2>
              <p className="font-script text-[20px] text-[#a2783a] mt-1">
                weddings & events
              </p>
              <div className="flex gap-2 mt-6">
                {[
                  "ti-facebook",
                  "ti-twitter-alt",
                  "ti-instagram",
                  "ti-pinterest",
                ].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-8 h-8 border border-white/20 flex items-center justify-center text-white hover:text-[#a2783a] hover:border-[#a2783a] transition-colors duration-300"
                  >
                    <i className={`${icon} text-[13px]`} />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-[12px] uppercase tracking-[2px] text-[#a2783a] mb-1">
                  RING
                </p>
                <p className="font-serif text-[17px] text-white/80">
                  +1.123.444.0000
                </p>
              </div>
              <div>
                <p className="font-sans text-[12px] uppercase tracking-[2px] text-[#a2783a] mb-1">
                  WRITE
                </p>
                <p className="font-serif text-[17px] text-white/80">
                  info@pweddings.com
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-[12px] uppercase tracking-[2px] text-[#a2783a] mb-1">
                  ADDRESS
                </p>
                <p className="font-serif text-[17px] text-white/80">
                  Wallaway 5st St Normain
                  <br />
                  New York, USA. 98499
                </p>
              </div>
              <p className="font-serif text-[17px] text-white/80 italic">
                © 2026. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
