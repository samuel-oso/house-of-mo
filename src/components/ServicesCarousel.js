"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function ServicesCarousel({ services }) {
  const trackRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalPages = Math.ceil(services.length / 3);

  const tripled = [...services, ...services, ...services];
  const cardWidth = 33.333;

  const scrollToPage = useCallback((page) => {
    const track = trackRef.current;
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    const targetScroll = oneSetWidth + (page * oneSetWidth) / totalPages;
    track.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [totalPages]);

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
    <section id="services" className="bg-[#f5f3ef] py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-12">
          <p className="font-script text-[24px] text-[#a2783a] leading-[1em]">
            weddings . events
          </p>
          <h2 className="font-sans text-[24px] font-medium uppercase tracking-[1px] text-black leading-[1em] mt-2">
            OUR SERVICES
          </h2>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-8 [scrollbar-width:none] cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {tripled.map((service, i) => (
          <Link
            key={`${service.title}-${i}`}
            href={service.href}
            className="group relative block overflow-hidden shrink-0 snap-start"
            style={{ width: `calc(${cardWidth}% - 16px)`, minWidth: "280px" }}
          >
            <div
              className="h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-script text-white text-[20px] leading-[1em] mb-1">
                .{service.label}
              </p>
              <h3 className="font-sans text-white text-[14px] font-medium uppercase tracking-[2px]">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
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
