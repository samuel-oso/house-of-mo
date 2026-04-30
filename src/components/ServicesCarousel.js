"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ServicesCarousel({ services }) {
  const trackRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalPages = Math.ceil(services.length / 3);

  const tripled = [...services, ...services, ...services];
  const cardWidth = 33.333;

  const scrollToPage = useCallback(
    (page) => {
      const track = trackRef.current;
      if (!track) return;
      const oneSetWidth = track.scrollWidth / 3;
      const targetScroll = oneSetWidth + (page * oneSetWidth) / totalPages;
      track.scrollTo({ left: targetScroll, behavior: "smooth" });
    },
    [totalPages],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const oneSetWidth = track.scrollWidth / 3;
    track.scrollLeft = oneSetWidth;

    const onScroll = () => {
      const scrollLeft = track.scrollLeft;
      const oneSet = track.scrollWidth / 3;

      if (scrollLeft <= 10) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft = oneSet + scrollLeft;
        track.style.scrollBehavior = "";
      } else if (scrollLeft >= oneSet * 2 - 10) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft = scrollLeft - oneSet;
        track.style.scrollBehavior = "";
      }

      const relativeScroll = (scrollLeft % oneSet) / oneSet;
      const page = Math.round(relativeScroll * totalPages) % totalPages;
      setActiveDot(page);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [totalPages]);

  return (
    <section id="services" className="bg-[#f5f3ef] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <ScrollReveal variant="blurIn" duration={0.7}>
          <div className="mb-12">
            <p className="font-script text-[24px] text-[#a2783a] leading-[1em]">
              weddings . events
            </p>
            <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mt-2">
              OUR SERVICES
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-8 [scrollbar-width:none] cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth"
      >
        {tripled.map((service, i) => (
          <div
            key={`${service.title}-${i}`}
            className="shrink-0 snap-start"
            style={{ width: `calc(${cardWidth}% - 16px)`, minWidth: "280px" }}
          >
            <Link
              href={service.href}
              className="group relative block overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-black/30 md:bg-black/0 md:group-hover:bg-black/55 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-script text-white text-[20px] leading-[1em] mb-1">
                  . {service.label}
                </p>
                <h3 className="font-sans text-white text-[14px] font-medium uppercase tracking-[2px]">
                  {service.title}
                </h3>
              </div>
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center backdrop-blur-sm bg-black/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => scrollToPage(i)}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.85 }}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              activeDot === i ? "bg-black/70" : "bg-black/20"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
