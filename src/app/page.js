"use client";

import Link from "next/link";
import Image from "next/image";
import ServicesCarousel from "@/components/ServicesCarousel";
import HeroSlideshow from "@/components/HeroSlideshow";

const services = [
  {
    title: "WEDDING PLANNER",
    label: "weddings",
    href: "/services/wedding",
    image: "/wedding.png",
  },
  {
    title: "CORPORATE EVENTS",
    label: "events",
    href: "/services/corporate",
    image: "/corporate.png",
  },
  {
    title: "PARTIES",
    label: "events",
    href: "/services/parties",
    image: "/parties.png",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HOME ===== */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <HeroSlideshow />
        <div className="absolute bottom-[15px] left-[30px] p-[30px] bg-white max-w-[50%]">
          <p className="relative top-[2px] font-script mb-2 text-[32px] text-[#ADADAD] leading-[1em] text-center">
            House of MoXperience
          </p>
          <h2 className="relative font-sans text-[24px] leading-[1em] text-black font-medium m-[0_0_20px_0] uppercase tracking-[1px]">
            Where Dreams Become Experiences
          </h2>
          <p className="font-serif text-[17px] font-medium leading-[1.5em] text-[#666] m-[0_0_20px]">
            It’s never just an event, it’s a feeling, a memory, a moment
            carefully curated.
          </p>
          <a
            href="#contact"
            className="inline-block font-sans bg-black border border-black text-white py-[12px] px-[30px] font-medium text-[12px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact us now
          </a>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div>
              {/* <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mb-5">
                RACHEL STARLETTA
              </h2> */}
              <p className="font-script text-[24px] text-[#a2783a] leading-[1.4em] mb-6">
                To Know Us is to Love Us
              </p>
              <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
                <p>
                  At House of MoXperience, we believe every celebration tells a
                  story—your story. And we’re here to bring that story to life
                  in the most beautiful, intentional way.
                </p>
                <p>
                  We are more than just event planners; we are experience
                  curators. From dream weddings to intimate celebrations and
                  grand occasions, every detail is thoughtfully designed to
                  reflect your vision, your style, and your essence.
                </p>
                <p>
                  We understand that it’s not just about the big moments, but
                  the little details that make them unforgettable. The ambiance,
                  the emotions, the seamless flow, everything comes together to
                  create something truly magical.
                </p>{" "}
                <p>
                  Our approach is simple: we listen, we understand, and we
                  execute with excellence. With a passion for creativity and a
                  commitment to perfection, we turn ideas into timeless
                  experiences.
                </p>
                <p>
                  At House of MoXperience, we don’t just plan events, we create
                  memories you’ll relive forever.
                </p>
              </div>

              <p className="font-script text-[24px] text-[#a2783a] mt-6">
                We would love to meet with you and bring your dream event to
                life.
              </p>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center">
              <div className="w-full h-[500px] bg-cover bg-center bg-no-repeat bg-[url('/about.png')]" />
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

              <div className="space-y-4 font-serif text-[17px] leading-[1.5em] text-[#666]">
                <p>
                  <span className="font-sans text-black font-medium">
                    Phone number
                  </span>{" "}
                  — +234 814 668 4159
                </p>
                <p>
                  <span className="font-sans text-black font-medium">
                    Address
                  </span>{" "}
                  — Lagos, Nigeria
                </p>
                <p>
                  <span className="font-sans text-black font-medium">
                    Email
                  </span>{" "}
                  — houseofmoxperience@gmail.com
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
              <Image
                src="/logo.png"
                alt="House of Mo'Xperience"
                width={400}
                height={240}
                style={{ height: "150px", width: "auto" }}
                unoptimized
              />
              <div className="flex gap-2 mt-6">
                {[
                  {
                    icon: "ti-facebook",
                    href: "https://www.facebook.com/profile.php?id=61575744886347",
                  },
                  { icon: "ti-instagram", href: "#" },
                  { icon: "ti-whatsapp", href: "https://wa.me/2348146684159" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-white/20 flex items-center justify-center text-white hover:text-[#a2783a] hover:border-[#a2783a] transition-colors duration-300"
                  >
                    {s.icon === "ti-whatsapp" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ) : (
                      <i className={`${s.icon} text-[13px]`} />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle: Ring + Write */}
            <div className="space-y-6">
              <div>
                <p className="font-sans text-[12px] uppercase tracking-[2px] text-[#a2783a] mb-1">
                  PHONE NUMBER
                </p>
                <p className="font-serif text-[17px] text-white/80">
                  +234 814 668 4159
                </p>
              </div>
              <div>
                <p className="font-sans text-[12px] uppercase tracking-[2px] text-[#a2783a] mb-1">
                  EMAIL
                </p>
                <p className="font-serif text-[17px] text-white/80">
                  houseofmoxperience@gmail.com
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
                  Lagos, Nigeria
                </p>
              </div>
              <p className="font-serif text-[17px] text-white/80 italic">
                © {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
