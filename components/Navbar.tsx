"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
    page: "/",
  },
  {
    label: "About",
    href: "/#about",
    page: "/",
  },
  {
    label: "Services",
    href: "/#services",
    page: "/services",
  },
  {
    label: "LinkedIn",
    href: "/services/linkedin-strategy",
    page: "/services/linkedin-strategy",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
    page: "/",
  },
  {
    label: "Contact",
    href: "/#contact",
    page: "/",
  },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const [activeNav, setActiveNav] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 20);

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (pathname === "/services/linkedin-strategy") {
      setActiveNav("LinkedIn");
      return;
    }

    if (pathname !== "/") {
      setActiveNav("Services");
      return;
    }

    const handleScroll = () => {
      const sections = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" },
      ];

      const scrollPosition = window.scrollY + 180;

      let current = "Home";

      for (const section of sections) {
        const el = document.getElementById(section.id);

        if (!el) continue;

        if (scrollPosition >= el.offsetTop) {
          current = section.label;
        }
      }

      setActiveNav(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* =========================================================
          DESKTOP NAVBAR
          Existing desktop design — unchanged
      ========================================================= */}

      <motion.header
        initial={false}
        animate={{
          y: hidden ? -12 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 26,
        }}
        className="fixed top-7 left-1/2 z-50 hidden w-full -translate-x-1/2 px-24 md:block"
      >
        <motion.div
          animate={{
            width: scrolled ? "760px" : "1240px",
            height: scrolled ? 46 : 56,
            paddingLeft: scrolled ? 24 : 20,
            paddingRight: scrolled ? 24 : 20,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 24,
          }}
          className="
            mx-auto
            flex
            items-center
            rounded-full
            border
            border-white/6
            backdrop-blur-[42px]
            shadow-[0_22px_80px_rgba(0,0,0,0.42)]
          "
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.045)"
              : "rgba(18,18,18,0.55)",
          }}
        >
          {/* Logo */}

          <motion.div
            animate={{
              width: scrolled ? 130 : 185,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            className="flex items-center gap-2 overflow-hidden"
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-br
                from-[#E49A61]
                to-[#C97238]
                text-[15px]
                font-semibold
                text-white
              "
            >
              M
            </div>

            <motion.span
              animate={{
                opacity: scrolled ? 0 : 1,
                width: scrolled ? 0 : "auto",
                marginLeft: scrolled ? 0 : 8,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                overflow-hidden
                whitespace-nowrap
                text-[16px]
                font-semibold
                tracking-[-0.02em]
              "
            >
              Manisha Mandal
            </motion.span>
          </motion.div>

          {/* Navigation */}

          <motion.nav
            animate={{
              gap: scrolled ? 6 : 10,
            }}
            className="flex flex-1 justify-center"
          >
            {navItems.map((item) => {
              const isActive = item.label === activeNav;
              const isLinkedIn = item.label === "LinkedIn";

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    px-4
                    py-[7px]
                    text-[12.5px]
                    font-medium
                    tracking-[0.02em]
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-[1px]

                    ${
                      isActive
                        ? isLinkedIn
                          ? "text-[#D6A84F]"
                          : "text-white"
                        : isLinkedIn
                          ? "text-[#D6A84F]/75 hover:text-[#D6A84F]"
                          : "text-white/38 hover:text-white"
                    }
                  `}
                >
                  {/* Hover Pill */}

                  <span
                    className={`
                      absolute
                      inset-0
                      -z-10
                      rounded-full
                      transition-all
                      duration-300
                      backdrop-blur-xl

                      ${
                        isActive
                          ? isLinkedIn
                            ? "scale-100 bg-[#D6A84F]/[0.10] opacity-100"
                            : "scale-100 bg-white/[0.08] opacity-100"
                          : isLinkedIn
                            ? "scale-50 bg-[#D6A84F]/[0.06] opacity-0 group-hover:scale-100 group-hover:opacity-100"
                            : "scale-50 bg-white/[0.06] opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }
                    `}
                  />

                  {item.label}
                </Link>
              );
            })}
          </motion.nav>

          {/* CTA */}

          <motion.div
            animate={{
              width: scrolled ? 210 : 225,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            className="flex justify-end"
          >
            <Link
              href="/contact"
              className="
                group
                flex
                items-center
                whitespace-nowrap
                rounded-full
                bg-[#F7F5F2]
                font-semibold
                !text-black
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              <motion.span
                animate={{
                  paddingLeft: scrolled ? 20 : 20,
                  paddingRight: scrolled ? 20 : 20,
                  paddingTop: scrolled ? 8 : 8,
                  paddingBottom: scrolled ? 8 : 8,
                  fontSize: scrolled ? "12px" : "12.5px",
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                Book Discovery Call

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* =========================================================
          MOBILE NAVBAR
          Only visible below md
      ========================================================= */}

      <motion.header
        initial={false}
        animate={{
          y: hidden && !mobileMenuOpen ? -10 : 0,
          opacity: hidden && !mobileMenuOpen ? 0.96 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 26,
        }}
        className="
          fixed
          left-0
          right-0
          top-4
          z-50
          px-4
          md:hidden
        "
      >
        {/* Mobile top bar */}

        <div
          className="
            mx-auto
            flex
            h-[52px]
            w-full
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-[#111111]/80
            px-3
            shadow-[0_18px_60px_rgba(0,0,0,0.45)]
            backdrop-blur-[32px]
          "
        >
          {/* Mobile Logo */}

          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-gradient-to-br
                from-[#E49A61]
                to-[#C97238]
                text-[15px]
                font-semibold
                text-white
              "
            >
              M
            </div>

            <span
              className="
                whitespace-nowrap
                text-[14px]
                font-semibold
                tracking-[-0.02em]
                text-white
              "
            >
              Manisha Mandal
            </span>
          </Link>

          {/* Hamburger */}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              transition-all
              duration-300
              active:scale-95
            "
          >
            <div className="flex w-[17px] flex-col gap-[5px]">
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="h-[1.5px] w-full rounded-full bg-white/80"
              />

              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  x: mobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="h-[1.5px] w-full rounded-full bg-white/80"
              />

              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25 }}
                className="h-[1.5px] w-full rounded-full bg-white/80"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}

        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
            marginTop: mobileMenuOpen ? 8 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden"
        >
          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#111111]/95
              p-3
              shadow-[0_25px_80px_rgba(0,0,0,0.5)]
              backdrop-blur-[35px]
            "
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const isActive = item.label === activeNav;
                const isLinkedIn = item.label === "LinkedIn";

                return (
                  <motion.div
                    key={item.label}
                    initial={false}
                    animate={{
                      opacity: mobileMenuOpen ? 1 : 0,
                      x: mobileMenuOpen ? 0 : -8,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: mobileMenuOpen ? index * 0.035 : 0,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-[15px]
                        px-4
                        py-3.5
                        text-[14px]
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? isLinkedIn
                              ? "bg-[#D6A84F]/[0.10] text-[#D6A84F]"
                              : "bg-white/[0.07] text-white"
                            : isLinkedIn
                              ? "text-[#D6A84F]/75 active:bg-[#D6A84F]/[0.08]"
                              : "text-white/55 active:bg-white/[0.05] active:text-white"
                        }
                      `}
                    >
                      <span>{item.label}</span>

                      {isActive && (
                        <span
                          className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            ${
                              isLinkedIn
                                ? "bg-[#D6A84F]"
                                : "bg-white/70"
                            }
                          `}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile CTA */}

            <div className="mt-2 border-t border-white/[0.07] pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[15px]
                  bg-[#F7F5F2]
                  px-4
                  py-3.5
                  text-[13px]
                  font-semibold
                  !text-black
                  transition-transform
                  duration-300
                  active:scale-[0.98]
                "
              >
                <span>Book Discovery Call</span>

                <span className="transition-transform duration-300 group-active:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}