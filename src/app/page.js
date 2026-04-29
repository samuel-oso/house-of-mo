"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ServicesCarousel from "@/components/ServicesCarousel";
import HeroSlideshow from "@/components/HeroSlideshow";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

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

const footerSocials = [
  {
    icon: "ti-facebook",
    href: "https://www.facebook.com/profile.php?id=61575744886347",
  },
  { icon: "ti-instagram", href: "#" },
  { icon: "ti-whatsapp", href: "https://wa.me/2348146684159" },
];

export default function Home() {
  return (
    <>
      {/* ===== HOME ===== */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <HeroSlideshow />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-[15px] left-[15px] right-[15px] md:right-auto md:left-[30px] p-[30px] bg-white md:max-w-[50%] z-2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative top-[2px] font-script mb-2 lg:text-[32px] text-[20px] text-[#ADADAD] leading-[1em] text-center"
          >
            House of MoXperience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="relative font-sans lg:text-[22px] text-base leading-[1.5em] text-black font-medium mb-2 uppercase tracking-[1px]"
          >
            Where Dreams Become Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="font-serif lg:text-[17px] text-sm font-medium leading-[1.5em] text-[#666] m-[0_0_20px]"
          >
            It&apos;s never just an event, it&apos;s a feeling, a memory, a moment
            carefully curated.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block font-sans bg-black border border-black text-white py-[12px] px-[30px] font-medium text-[12px] uppercase tracking-[2px] hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact us now
          </motion.a>
        </motion.div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <StaggerContainer>
              <StaggerItem>
                <p className="font-script text-[24px] text-[#a2783a] leading-[1.4em] mb-6">
                  To Know Us is to Love Us
                </p>
              </StaggerItem>
              <div className="space-y-5 font-serif text-[17px] font-medium leading-[1.5em] text-[#666]">
                <StaggerItem>
                  <p>
                    At House of MoXperience, we believe every celebration tells a
                    story—your story. And we&apos;re here to bring that story to life
                    in the most beautiful, intentional way.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    We are more than just event planners; we are experience
                    curators. From dream weddings to intimate celebrations and
                    grand occasions, every detail is thoughtfully designed to
                    reflect your vision, your style, and your essence.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    We understand that it&apos;s not just about the big moments, but
                    the little details that make them unforgettable. The ambiance,
                    the emotions, the seamless flow, everything comes together to
                    create something truly magical.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    Our approach is simple: we listen, we understand, and we
                    execute with excellence. With a passion for creativity and a
                    commitment to perfection, we turn ideas into timeless
                    experiences.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    At House of MoXperience, we don&apos;t just plan events, we create
                    memories you&apos;ll relive forever.
                  </p>
                </StaggerItem>
              </div>
              <StaggerItem>
                <p className="font-script text-[24px] text-[#a2783a] mt-6">
                  We would love to meet with you and bring your dream event to
                  life.
                </p>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal variant="clipUp" delay={0.2} duration={0.9}>
              <div className="flex justify-center">
                <div className="w-full h-[500px] bg-cover bg-center bg-no-repeat bg-[url('/about.png')]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <ServicesCarousel services={services} />

      {/* ===== CONTACT ===== */}
      <section id="contact" className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <ScrollReveal variant="blurIn" duration={0.7}>
                <p className="font-script text-[24px] text-[#a2783a] leading-[1em]">
                  location
                </p>
                <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mt-2 mb-8">
                  CONTACT US
                </h2>
              </ScrollReveal>

              <StaggerContainer className="space-y-4 font-serif text-[17px] leading-[1.5em] text-[#666]">
                <StaggerItem>
                  <p>
                    <span className="font-sans text-black font-medium">
                      Phone number
                    </span>{" "}
                    — +234 814 668 4159
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    <span className="font-sans text-black font-medium">
                      Address
                    </span>{" "}
                    — Lagos, Nigeria
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    <span className="font-sans text-black font-medium">
                      Email
                    </span>{" "}
                    — houseofmoxperience@gmail.com
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div>
              <ScrollReveal variant="scaleUp" delay={0.1} duration={0.7}>
                <h3 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mb-4">
                  CONTACT FORM
                </h3>
                <p className="font-serif text-[17px] font-medium leading-[1.5em] text-[#666] mb-6">
                  We would like to hear from you
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-white py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal variant="fadeUp">
              <Image
                src="/logo.png"
                alt="House of Mo'Xperience"
                width={400}
                height={240}
                style={{ height: "150px", width: "auto" }}
                unoptimized
              />
              <div className="flex gap-2 mt-6">
                {footerSocials.map((s, i) => (
                  <motion.a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
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
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
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
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.3}>
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
            </ScrollReveal>
          </div>
        </div>
      </footer>
    </>
  );
}
