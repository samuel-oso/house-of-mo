"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#contact", label: "CONTACT" },
];

const socials = [
  {
    icon: "ti-facebook",
    href: "https://www.facebook.com/profile.php?id=61575744886347",
  },
  { icon: "ti-instagram", href: "#" },
  { icon: "ti-whatsapp", href: "https://wa.me/2348146684159" },
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
      const mainRect = main.getBoundingClientRect();
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const elTop = el.getBoundingClientRect().top - mainRect.top;
          if (elTop <= 150) {
            current = id;
          }
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
          <div className="text-center w-full relative">
            <Image
              src="/logo-light.png"
              alt="House of Mo'Xperience"
              width={400}
              height={240}
              className="mx-auto"
              style={{ height: "120px", width: "auto" }}
              unoptimized
            />
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
          <p className="text-[16px] text-black font-serif">+234 814 668 4159</p>
          <p className="text-[16px] text-black font-serif mt-1">
            houseofmoxperience@gmail.com
          </p>

          <div className="flex justify-center gap-4 mt-5">
            {socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black hover:text-gold hover:border-gold transition-colors duration-300"
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
      </aside>
    </>
  );
}
