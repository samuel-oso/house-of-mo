"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#contact", label: "CONTACT" },
];

const socials = [
  { icon: "ti-facebook", href: "#" },
  { icon: "ti-twitter-alt", href: "#" },
  { icon: "ti-instagram", href: "#" },
  { icon: "ti-pinterest", href: "#" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isSubPage = pathname !== "/";

  const derivedActive =
    isSubPage && pathname.startsWith("/services") ? "#services" : null;

  useEffect(() => {
    if (isSubPage) return;

    const main = document.querySelector("main");
    if (!main) return;

    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const onScroll = () => {
      const scrollTop = main.scrollTop;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 100 <= scrollTop) {
          current = id;
        }
      }
      setActiveSection(`#${current}`);
    };

    main.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => main.removeEventListener("scroll", onScroll);
  }, [isSubPage]);

  const currentActive = derivedActive || activeSection;

  const handleNav = useCallback(
    (e, href) => {
      e.preventDefault();
      setMobileOpen(false);

      if (isSubPage) {
        router.push(`/${href}`);
        return;
      }

      const id = href.slice(1);
      const el = document.getElementById(id);
      const main = document.querySelector("main");
      if (el && main) {
        main.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      }
    },
    [isSubPage, router],
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-1002 lg:hidden bg-white/90 backdrop-blur p-2 rounded shadow-md"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-1000 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 bottom-0 left-0 w-[23%] bg-white z-1001 flex flex-col justify-between
          p-[60px_30px] overflow-y-scroll shadow-[0_0_30px_rgba(0,0,0,0.05)]
          transition-all duration-500 [scrollbar-width:none]
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <div className="text-center w-full relative mb-[60px]">
            <h1 className="font-serif text-[40px] font-semibold uppercase text-black leading-[1.2em] tracking-[0px]">
              PWE<sup className="text-black text-[16px] align-super">®</sup>
            </h1>
            <p className="font-script text-[24px] text-[#a2783a] font-medium tracking-[1px] leading-[1.2em] mt-0">
              weddings & events
            </p>
          </div>

          <nav className="flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`
                  text-[12px] font-normal leading-[1.5em] uppercase tracking-[1px]
                  my-[9px] pb-[9px] transition-colors duration-300
                  ${
                    currentActive === link.href
                      ? "text-gold"
                      : "text-black hover:text-gold"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pb-8 px-6 text-center">
          <p className="text-[16px] text-black font-serif">+1.123.444.0000</p>
          <p className="text-[16px] text-black font-serif mt-1">
            info@pweddings.com
          </p>

          <div className="flex justify-center gap-4 mt-5">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:text-gold hover:border-gold transition-colors duration-300"
              >
                <i className={`${s.icon} text-[13px]`} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
