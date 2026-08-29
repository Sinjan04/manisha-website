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
  return (
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
  className="fixed top-7 left-1/2 z-50 w-full -translate-x-1/2 px-24"
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

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#E49A61]
to-[#C97238]S text-[15px] font-semibold text-white">
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
  className="overflow-hidden whitespace-nowrap text-[16px] font-semibold tracking-[-0.02em]"
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
      ? "opacity-100 bg-[#D6A84F]/[0.10] scale-100"
      : "opacity-100 bg-white/[0.08] scale-100"
    : isLinkedIn
      ? "opacity-0 scale-50 bg-[#D6A84F]/[0.06] group-hover:opacity-100 group-hover:scale-100"
      : "opacity-0 scale-50 bg-white/[0.06] group-hover:opacity-100 group-hover:scale-100"
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
  );
}