"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      flex
      min-h-[80vh]
      flex-col
      justify-center
      overflow-hidden
      bg-[#050505]
      px-6
      py-24
      md:px-12
      md:py-32
      "
    >
      {/* Refined ambient light */}
      <div
        className="
        pointer-events-none
        absolute
        -top-[20%]
        left-1/2
        h-[800px]
        w-[1000px]
        -translate-x-1/2
        rounded-full
        bg-[#D68A55]/[0.025]
        blur-[120px]
        "
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-between">
        
        {/* Top Content: Heading, Paragraph, and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D68A55]"></span>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D68A55]">
              Get In Touch
            </p>
          </div>

          <h2
            className="
            mt-8
            max-w-[800px]
            text-[48px]
            font-medium
            leading-[1.1]
            tracking-tight
            text-white
            md:text-[72px]
            "
          >
            Let's build something <br />
            <span className="text-white/40 italic">worth being known for.</span>
          </h2>

          <p
            className="
            mt-8
            max-w-[500px]
            text-base
            leading-relaxed
            text-white/50
            "
          >
            Have a vision for your personal brand? Let's talk about where you are, 
            where you want to go, and how we can get there.
          </p>

          {/* Cleanly integrated button with explicitly black text for visibility */}
          <Link
  href="/contact"
  className="
  group
  relative
  mt-10
  inline-flex
  h-12
  items-center
  justify-center
  gap-3
  overflow-hidden
  rounded-full
  border
  border-white/20
  bg-[#F7F5F2]
  px-8
  text-sm
  font-semibold
  text-black
  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
  transition-all
  duration-300
  hover:-translate-y-[1px]
  hover:border-white/30
  hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]
  active:translate-y-0
  active:scale-[0.98]
  "
>
  <span className="relative z-10 text-black">
    Book Discovery Call
  </span>

  <span
    className="
    relative
    z-10
    text-black
    transition-transform
    duration-300
    group-hover:translate-x-1
    "
  >
    →
  </span>

  {/* Subtle light sweep */}

  <span
    className="
    pointer-events-none
    absolute
    inset-y-0
    -left-full
    w-1/2
    skew-x-[-20deg]
    bg-white/40
    transition-all
    duration-700
    group-hover:left-[120%]
    "
  />
</Link>
        </motion.div>

        {/* Bottom Content: Minimal Contact Details (No lines) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-col justify-between gap-8 md:mt-24 md:flex-row md:items-end"
        >
          {/* Phone - Bottom Left */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="group flex flex-col items-start gap-1.5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-white/50">
              Phone
            </p>
            <p className="text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 group-hover:text-[#D68A55] md:text-base">
              +91 8944890465
            </p>
          </a>

          {/* Email - Bottom Right */}
          <a
            href="mailto:hello@example.com"
            className="group flex flex-col items-start gap-1.5 md:items-end"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-white/50">
              Email
            </p>
            <p className="text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 group-hover:text-[#D68A55] md:text-base">
              innovativeedge.manisha@gmail.com
            </p>
          </a>
        </motion.div>

      </div>
    </section>
  );
}