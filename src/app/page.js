"use client";

import Link from "next/link";
import ServicesCarousel from "@/components/ServicesCarousel";

const services = [
  {
    title: "WEDDING PLANNER",
    label: "weddings",
    href: "/services/wedding",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
  },
  {
    title: "CORPORATE EVENTS",
    label: "events",
    href: "/services/corporate",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
  {
    title: "PARTIES",
    label: "events",
    href: "/services/parties",
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
  },
  {
    title: "EVENT PLANNING",
    label: "weddings",
    href: "/services/event-planning",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HOME ===== */}
      <section id="home" className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://duruthemes.com/demo/html/pwe/onepage/images/slider/02.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="absolute bottom-[15px] left-[30px] p-[30px] bg-white max-w-[50%]">
          <p className="relative top-[2px] font-script text-[32px] text-[#ADADAD] leading-[1em] text-center mb-0">
            dream maker
          </p>
          <h2 className="relative font-sans text-[24px] leading-[1em] text-black font-medium m-[0_0_20px_0] uppercase tracking-[1px]">
            Your Personal Dream Maker
          </h2>
          <p className="font-serif text-[17px] font-medium leading-[1.5em] text-[#666] m-[0_0_20px]">
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
          <a
            href="#contact"
            className="inline-block font-sans bg-black border border-black text-white py-[12px] px-[30px] font-medium text-[12px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-500"
          >
            BUY NOW
          </a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div>
              <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mb-5">
                RACHEL STARLETTA
              </h2>
              <p className="font-script text-[24px] text-[#a2783a] leading-[1.4em] mb-6">
                We would love to meet up and chat about how we can make your
                dream wedding happen!
              </p>
              <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
                <p>
                  Professional Wedding & Event Planner. Curabit aliquet orci
                  elit genes tristique lorem commodo vitae. Aliquam tincidunt,
                  felis sede gravida aliquam, neque libero hendrerit magna, sit
                  amet mollis lacus quam maurisine. Aliquam erat volutpat.
                </p>
                <p>
                  Quality fringilla dui at elit finibus viverra nec a lacus.
                  Qedat themo the druanye semper sollicitudin mi suscipit non
                  sagie the fermen.
                </p>
                <p>
                  Phasellus viverra tristique justo. Duis vitae diam neque.
                  Vivamus ac est augue. Vestibulum fringilla dui at elit finibus
                  viverra nec a lacus. Sedat themo eros odio semper sollicitudin
                  mi suscipit non.
                </p>
              </div>
              <p className="font-script text-[24px] text-[#a2783a] mt-6">
                To Know Us is to Love Us!
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center">
              <div
                className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <ServicesCarousel services={services} />

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <div>
              <p className="font-script text-[24px] text-[#a2783a] leading-[1em]">
                location
              </p>
              <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mt-2 mb-8">
                CONTACT US
              </h2>
              <p className="font-serif text-[17px] font-medium leading-[1.5em] text-[#666] mb-8">
                Quisque facilisis libero maximus non.
                <br />
                Lolutpat venenatis lacus sed hendrerit nisi.
              </p>
              <div className="space-y-4 font-serif text-[17px] leading-[1.5em] text-[#666]">
                <p>
                  <span className="font-sans text-black font-medium">Ring</span>{" "}
                  — +1.123.444.0000
                </p>
                <p>
                  <span className="font-sans text-black font-medium">
                    Address
                  </span>{" "}
                  — Wallaway 5st St Normain NY, USA.
                </p>
                <p>
                  <span className="font-sans text-black font-medium">
                    Write
                  </span>{" "}
                  — info@pweddings.com
                </p>
                <p>
                  <span className="font-sans text-black font-medium">
                    Visit
                  </span>{" "}
                  — by appointment only
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h3 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mb-4">
                CONTACT FORM
              </h3>
              <p className="font-serif text-[17px] font-medium leading-[1.5em] text-[#666] mb-6">
                We would like to hear from you
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject *"
                  className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors"
                />
                <textarea
                  placeholder="Message *"
                  rows={5}
                  className="w-full border border-gray-200 px-4 py-3 font-serif text-[15px] text-[#666] focus:outline-none focus:border-gold transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="font-sans bg-black border border-black text-white py-[12px] px-[30px] font-medium text-[12px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-500"
                >
                  SAY HELLO!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left: Logo + socials */}
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

            {/* Middle: Ring + Write */}
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

            {/* Right: Address + copyright */}
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
    </>
  );
}
