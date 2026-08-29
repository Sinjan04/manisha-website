"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LinkedinStrategyPage() {
  const [activeSection, setActiveSection] = useState("audit");

  useEffect(() => {
    const sections = [
      "audit",
      "positioning",
      "headline",
      "about",
      "featured",
      "seo",
      "roadmap",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      let current = "audit";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  const progressHeight =
    activeSection === "audit"
      ? "14%"
      : activeSection === "positioning"
      ? "28%"
      : activeSection === "headline"
      ? "42%"
      : activeSection === "about"
      ? "56%"
      : activeSection === "featured"
      ? "70%"
      : activeSection === "seo"
      ? "84%"
      : "100%";

  const stepIndex =
    activeSection === "audit"
      ? "01"
      : activeSection === "positioning"
      ? "02"
      : activeSection === "headline"
      ? "03"
      : activeSection === "about"
      ? "04"
      : activeSection === "featured"
      ? "05"
      : activeSection === "seo"
      ? "06"
      : "07";

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0B0B0B]">

      {/* Ambient grain */}

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <section
        className="
        relative
        z-10
        mx-auto
        flex
        max-w-[1520px]
        flex-col
        gap-8
        px-5
        pt-24
        pb-20
        sm:px-7
        sm:pt-28
        sm:pb-24
        md:flex-row
        md:gap-10
        md:px-10
        md:pt-32
        md:pb-32
        lg:gap-16
        "
      >

        {/* ========================================================= */}
        {/* LEFT SIDEBAR */}
        {/* ========================================================= */}

        <aside
          className="
          relative
          w-full
          md:sticky
          md:top-28
          md:h-fit
          md:w-[300px]
          md:shrink-0
          "
        >

          <div
            className="
            rounded-[24px]
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-5
            backdrop-blur-xl
            shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-30px_rgba(0,0,0,0.7)]
            sm:rounded-[28px]
            sm:p-6
            md:p-7
            "
          >

            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D68A55] sm:text-[12px] sm:tracking-[0.35em]">
              Service Guide
            </p>

            <div className="mt-3 flex items-center gap-2.5">

              <motion.p
                key={stepIndex}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-mono text-[12px] tracking-[0.2em] text-white/70 sm:text-[13px]"
              >
                {stepIndex}
              </motion.p>

              <span className="h-px w-4 bg-white/15" />

              <p className="font-mono text-[12px] tracking-[0.2em] text-white/25 sm:text-[13px]">
                07
              </p>

            </div>

            <h2 className="mt-5 text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[36px] md:text-[38px]">
              LinkedIn
              <br />
              Strategy
            </h2>

            {/* Mobile navigation can wrap naturally instead of creating
                a horizontally overflowing sidebar. */}

            <div className="mt-7 flex flex-col gap-1 sm:mt-8">

              {[
                ["audit", "Profile Audit"],
                ["positioning", "Strategic Positioning"],
                ["headline", "Headline Rewrite"],
                ["about", "About Section"],
                ["featured", "Featured Content"],
                ["seo", "Profile SEO"],
                ["roadmap", "90-Day Roadmap"],
              ].map(([id, label]) => (

                <Link
                  key={id}
                  href={`#${id}`}
                  className="
                  group
                  relative
                  block
                  rounded-full
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D68A55]/40
                  "
                >

                  {activeSection === id && (

                    <motion.div
                      layoutId="sidebar-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                        mass: 0.9,
                      }}
                      className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-gradient-to-b
                      from-white/[0.07]
                      to-white/[0.03]
                      shadow-[0_0_0_1px_rgba(214,138,85,0.08),0_10px_24px_-10px_rgba(214,138,85,0.3)]
                      backdrop-blur-xl
                      "
                    />

                  )}

                  <div
                    className={`
                    relative
                    z-10
                    flex
                    items-center
                    gap-3
                    rounded-full
                    px-4
                    py-2.5
                    text-[14px]
                    transition-all
                    duration-300
                    ease-out
                    sm:px-5
                    sm:py-3
                    sm:text-[15px]

                    ${
                      activeSection === id
                        ? "translate-x-0 text-white"
                        : "text-white/40 hover:translate-x-[3px] hover:text-white/80"
                    }
                    `}
                  >

                    <span
                      className={`
                      h-[3px]
                      w-[3px]
                      shrink-0
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        activeSection === id
                          ? "scale-100 bg-[#D68A55]"
                          : "scale-75 bg-white/20 group-hover:bg-white/40"
                      }
                      `}
                    />

                    {label}

                  </div>

                </Link>

              ))}

            </div>

            {/* Progress indicator */}

            <div className="my-8 flex justify-center sm:my-10">

              <div className="relative h-[130px] w-[2px] rounded-full bg-white/[0.06] sm:h-[168px]">

                <motion.div
                  animate={{ height: progressHeight }}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 22,
                  }}
                  className="
                  relative
                  w-full
                  rounded-full
                  bg-gradient-to-b
                  from-[#D68A55]
                  to-[#D68A55]/40
                  "
                >

                  <span
                    className="
                    absolute
                    -bottom-[2px]
                    -right-[3px]
                    h-2
                    w-2
                    rounded-full
                    bg-[#D68A55]
                    shadow-[0_0_10px_3px_rgba(214,138,85,0.55)]
                    "
                  />

                </motion.div>

              </div>

            </div>

            {/* Info */}

            <div className="space-y-6 border-t border-white/[0.06] pt-6 sm:space-y-7 sm:pt-7">

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 sm:text-[11px] sm:tracking-[0.28em]">
                  Duration
                </p>

                <p className="mt-2 text-[17px] font-semibold text-white sm:text-[19px]">
                  2–3 Weeks
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 sm:text-[11px] sm:tracking-[0.28em]">
                  Deliverables
                </p>

                <p className="mt-2 text-[17px] font-semibold text-white sm:text-[19px]">
                  7 Optimized Sections
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 sm:text-[11px] sm:tracking-[0.28em]">
                  Goal
                </p>

                <p className="mt-2 text-[17px] font-semibold leading-7 text-white sm:text-[19px] sm:leading-8">
                  Build Authority &
                  <br />
                  Generate Leads
                </p>
              </div>

            </div>

          </div>

        </aside>

        {/* ========================================================= */}
        {/* DESKTOP DIVIDER */}
        {/* ========================================================= */}

        <div
          className="
          hidden
          h-[calc(100vh-220px)]
          w-px
          self-start
          bg-gradient-to-b
          from-white/[0.09]
          via-white/[0.04]
          to-transparent
          md:sticky
          md:top-28
          md:block
          "
        />

        {/* ========================================================= */}
        {/* RIGHT CONTENT */}
        {/* ========================================================= */}

        <div className="min-w-0 flex-1">

          {/* ======================================================= */}
          {/* STEP 01 — PROFILE AUDIT */}
          {/* ======================================================= */}

          <section
            id="audit"
            className="
            relative
            min-h-0
            overflow-hidden
            border-b
            border-white/10
            pb-20
            md:min-h-screen
            md:pb-24
            "
          >

            <div
              className="
              pointer-events-none
              absolute
              -left-32
              -top-24
              h-[300px]
              w-[300px]
              rounded-full
              bg-[#D68A55]/[0.05]
              blur-[100px]
              sm:h-[420px]
              sm:w-[420px]
              sm:blur-[130px]
              "
            />

            <motion.div {...fadeUp} className="relative">

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
                STEP 01
              </p>

              <h1
                className="
                mt-5
                text-[46px]
                font-bold
                leading-[0.96]
                tracking-[-0.05em]
                text-white
                sm:text-[58px]
                md:mt-6
                md:text-[72px]
                "
              >
                Profile Audit
              </h1>

              <p
                className="
                mt-8
                max-w-[760px]
                text-[17px]
                leading-8
                text-white/55
                sm:text-[19px]
                sm:leading-9
                md:mt-10
                md:text-[21px]
                md:leading-10
                "
              >
                Before we create content or improve visibility, we need to
                understand why your current profile isn't converting visitors
                into opportunities.

                <br />
                <br />

                Every section of your LinkedIn profile is strategically reviewed
                to identify weak positioning, unclear messaging and missed
                opportunities that are costing you credibility.
              </p>

            </motion.div>

            {/* Deliverables */}

            <div className="relative mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-2 md:gap-8">

              {[
                {
                  no: "01",
                  title: "Banner Review",
                  desc: "Your LinkedIn banner becomes your digital billboard, instantly communicating who you help, what you do and why someone should trust you within seconds.",
                  points: [
                    "Strategic banner redesign",
                    "Clear value proposition",
                    "Visual hierarchy",
                    "Strong CTA placement",
                  ],
                },
                {
                  no: "02",
                  title: "Headline Rewrite",
                  desc: "A keyword-optimized headline that increases discoverability while clearly positioning your value.",
                },
                {
                  no: "03",
                  title: "About Section",
                  desc: "A story-driven About section that builds trust instead of simply listing achievements.",
                },
                {
                  no: "04",
                  title: "Featured Section",
                  desc: "Strategically organize case studies, media mentions and high-performing content to strengthen authority.",
                },
                {
                  no: "05",
                  title: "Experience Optimization",
                  desc: "Every experience entry is rewritten to highlight measurable outcomes instead of generic responsibilities.",
                },
                {
                  no: "06",
                  title: "Profile SEO",
                  desc: "Optimize profile keywords so your ideal audience can discover you through LinkedIn search.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.no}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 2) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/10
                  bg-[#121212]
                  p-6
                  shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_20px_40px_-28px_rgba(0,0,0,0.7)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:border-[#D68A55]/40
                  hover:bg-[#161616]
                  hover:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_30px_60px_-24px_rgba(214,138,85,0.22)]
                  sm:rounded-[30px]
                  sm:p-8
                  "
                >

                  {/* Large Number */}

                  <p
                    className="
                    absolute
                    right-6
                    top-5
                    text-[58px]
                    font-bold
                    leading-none
                    text-white/[0.04]
                    transition-all
                    duration-500
                    group-hover:text-white/[0.08]
                    sm:right-8
                    sm:text-[72px]
                    "
                  >
                    {item.no}
                  </p>

                  {/* Section Label */}

                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#D68A55] sm:text-[12px] sm:tracking-[0.32em]">
                    Included
                  </p>

                  {/* Title */}

                  <h3
                    className="
                    mt-4
                    text-[25px]
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#D68A55]
                    sm:mt-5
                    sm:text-[30px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-[16px] leading-8 text-white/55 sm:mt-5 sm:text-[18px] sm:leading-9">
                    {item.desc}
                  </p>

                  {/* Included */}

                  {item.points && (
                    <div className="mt-7 space-y-3 sm:mt-8">

                      {item.points.map((point) => (

                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >

                          <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#D68A55]" />

                          <p className="text-[14px] leading-6 text-white/65 sm:text-[15px]">
                            {point}
                          </p>

                        </div>

                      ))}

                    </div>
                  )}

                  {/* Bottom */}

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6">

                    <span className="text-[12px] leading-5 text-white/35 sm:text-[14px]">
                      Included in your strategy
                    </span>

                    <span
                      className="
                      shrink-0
                      text-[25px]
                      text-white/20
                      transition-all
                      duration-300
                      ease-out
                      group-hover:translate-x-2
                      group-hover:text-[#D68A55]
                      sm:text-[28px]
                      "
                    >
                      →
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Expected Outcome */}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              relative
              mt-14
              overflow-hidden
              rounded-[28px]
              border
              border-[#D68A55]/20
              bg-[#15120F]
              p-7
              shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)]
              sm:mt-16
              sm:rounded-[34px]
              sm:p-10
              md:mt-20
              "
            >

              <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#D68A55]/[0.06] blur-[90px] sm:h-[300px] sm:w-[300px] sm:blur-[110px]" />

              <p className="relative text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
                Expected Outcome
              </p>

              <h3 className="relative mt-4 text-[27px] font-semibold leading-tight text-white sm:mt-5 sm:text-[34px]">
                A profile that instantly communicates authority.
              </h3>

              <p className="relative mt-5 max-w-[720px] text-[16px] leading-8 text-white/55 sm:mt-6 sm:text-[18px]">
                Instead of visitors wondering what you do, they'll immediately
                understand your expertise, your positioning and why you're the
                right person to work with.
              </p>

            </motion.div>

          </section>

          {/* ======================================================= */}
          {/* STEP 02 — STRATEGIC POSITIONING */}
          {/* ======================================================= */}

          <section
            id="positioning"
            className="
            relative
            min-h-0
            overflow-hidden
            border-b
            border-white/10
            py-20
            sm:py-24
            md:min-h-screen
            md:py-28
            "
          >

            <div className="pointer-events-none absolute -right-32 top-10 h-[280px] w-[280px] rounded-full bg-white/[0.02] blur-[100px] sm:h-[380px] sm:w-[380px] sm:blur-[130px]" />

            <motion.div {...fadeUp} className="relative">

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
                STEP 02
              </p>

              <h2
                className="
                mt-5
                text-[46px]
                font-bold
                leading-[0.96]
                tracking-[-0.05em]
                text-white
                sm:text-[58px]
                md:mt-6
                md:text-[72px]
                "
              >
                Strategic
                <br />
                Positioning
              </h2>

              <p
                className="
                mt-8
                max-w-[760px]
                text-[17px]
                leading-8
                text-white/55
                sm:text-[19px]
                sm:leading-9
                md:mt-10
                md:text-[21px]
                md:leading-10
                "
              >
                Visibility without positioning creates attention.
                Positioning creates opportunities.

                <br />
                <br />

                Together we'll define exactly who you help,
                what makes your expertise different and why
                someone should choose you over everyone else
                in your niche.
              </p>

            </motion.div>

            <div className="relative mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-2 md:gap-8">

              {[
                {
                  title: "Target Audience",
                  desc: "Identify exactly who your content is speaking to so every post attracts the right people.",
                },
                {
                  title: "Unique Positioning",
                  desc: "Clarify the unique value only you can offer instead of sounding like everyone else.",
                },
                {
                  title: "Content Pillars",
                  desc: "Develop 3–5 strategic content pillars that consistently reinforce your authority.",
                },
                {
                  title: "Brand Voice",
                  desc: "Build a recognizable communication style that feels authentic and memorable.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 2) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                  group
                  rounded-[26px]
                  border
                  border-white/10
                  bg-[#121212]
                  p-6
                  shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_20px_40px_-28px_rgba(0,0,0,0.7)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:border-[#D68A55]/40
                  hover:bg-[#161616]
                  hover:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_30px_60px_-24px_rgba(214,138,85,0.22)]
                  sm:rounded-[30px]
                  sm:p-8
                  "
                >

                  <p className="text-[48px] font-bold text-white/[0.05] sm:text-[56px]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-[24px] font-semibold text-white sm:mt-3 sm:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-8 text-white/55 sm:mt-5 sm:text-[17px]">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              relative
              mt-14
              overflow-hidden
              rounded-[28px]
              border
              border-[#D68A55]/20
              bg-[#15120F]
              p-7
              shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)]
              sm:mt-16
              sm:rounded-[34px]
              sm:p-10
              md:mt-20
              "
            >

              <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#D68A55]/[0.06] blur-[90px] sm:h-[300px] sm:w-[300px] sm:blur-[110px]" />

              <p className="relative text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
                Expected Outcome
              </p>

              <h3 className="relative mt-4 text-[27px] font-semibold leading-tight text-white sm:mt-5 sm:text-[34px]">
                Become the obvious choice in your niche.
              </h3>

              <p className="relative mt-5 max-w-[720px] text-[16px] leading-8 text-white/55 sm:mt-6 sm:text-[18px]">
                Instead of competing on price or experience alone,
                your positioning communicates a clear reason for
                prospects to trust you before the first conversation.
              </p>

            </motion.div>

          </section>
                <section
        id="headline"
        className="
        relative
        min-h-screen
        overflow-hidden
        border-b
        border-white/10
        py-20
        sm:py-24
        lg:py-28
        "
      >

        <div
          className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#D68A55]/[0.04]
          blur-[100px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[130px]
          "
        />

        <motion.div {...fadeUp} className="relative">

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            STEP 03
          </p>

          <h2
            className="
            mt-5
            text-[48px]
            font-bold
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:mt-6
            sm:text-[60px]
            md:text-[68px]
            lg:text-[72px]
            "
          >
            Headline
            <br />
            Rewrite
          </h2>

          <p
            className="
            mt-7
            max-w-[760px]
            text-[17px]
            leading-8
            text-white/55
            sm:mt-10
            sm:text-[19px]
            sm:leading-9
            md:text-[21px]
            md:leading-10
            "
          >
            Your headline is the first thing people notice after your name.

            <br />
            <br />

            Instead of saying what you do, it should explain the value you
            create and give people an immediate reason to keep reading.
          </p>

        </motion.div>

        <div className="relative mt-14 space-y-6 sm:mt-20 sm:space-y-8">

          {[
            {
              title: "Value-Driven Messaging",
              desc: "Communicate the outcome you help clients achieve instead of listing your profession."
            },
            {
              title: "Keyword Optimization",
              desc: "Improve discoverability by naturally incorporating high-value industry keywords."
            },
            {
              title: "Authority Positioning",
              desc: "Frame your experience to establish trust before someone even opens your profile."
            },
            {
              title: "A/B Headline Variations",
              desc: "Receive multiple headline options tailored to different audiences and goals."
            }
          ].map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              group
              flex
              flex-col
              gap-5
              border-b
              border-white/10
              pb-7
              transition-colors
              duration-300
              hover:border-[#D68A55]/30
              sm:gap-6
              sm:pb-8
              md:flex-row
              md:items-start
              md:justify-between
              "
            >

              <div className="shrink-0">

                <p className="text-[13px] text-[#D68A55] sm:text-[14px]">
                  0{index + 1}
                </p>

                <h3
                  className="
                  mt-2
                  text-[24px]
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-white/90
                  sm:mt-3
                  sm:text-[28px]
                  md:text-[30px]
                  "
                >
                  {item.title}
                </h3>

              </div>

              <p
                className="
                max-w-[480px]
                text-[16px]
                leading-7
                text-white/55
                sm:text-[17px]
                sm:leading-8
                md:text-[18px]
                md:leading-9
                "
              >
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
          relative
          mt-14
          overflow-hidden
          rounded-[26px]
          border
          border-[#D68A55]/20
          bg-[#15120F]
          p-7
          sm:mt-20
          sm:rounded-[34px]
          sm:p-10
          "
        >

          <div
            className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#D68A55]/[0.06]
            blur-[90px]
            sm:h-[300px]
            sm:w-[300px]
            sm:blur-[110px]
            "
          />

          <p className="relative text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            Expected Outcome
          </p>

          <h3
            className="
            relative
            mt-4
            text-[26px]
            font-semibold
            leading-tight
            text-white
            sm:mt-5
            sm:text-[34px]
            "
          >
            A headline that earns attention in seconds.
          </h3>

          <p
            className="
            relative
            mt-5
            max-w-[720px]
            text-[16px]
            leading-7
            text-white/55
            sm:mt-6
            sm:text-[18px]
            sm:leading-8
            "
          >
            Whether someone discovers you through search, comments or
            content, your headline immediately communicates expertise,
            credibility and relevance.
          </p>

        </motion.div>

      </section>


      <section
        id="about"
        className="
        relative
        min-h-screen
        overflow-hidden
        border-b
        border-white/10
        py-20
        sm:py-24
        lg:py-28
        "
      >

        <div
          className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-white/[0.02]
          blur-[100px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[130px]
          "
        />

        <motion.div {...fadeUp} className="relative">

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            STEP 04
          </p>

          <h2
            className="
            mt-5
            text-[48px]
            font-bold
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:mt-6
            sm:text-[60px]
            md:text-[68px]
            lg:text-[72px]
            "
          >
            About
            <br />
            Section
          </h2>

          <p
            className="
            mt-7
            max-w-[760px]
            text-[17px]
            leading-8
            text-white/55
            sm:mt-10
            sm:text-[19px]
            sm:leading-9
            md:text-[21px]
            md:leading-10
            "
          >
            Your About section shouldn't read like a résumé.
            It should tell a compelling story that builds trust,
            establishes authority and motivates visitors to connect with you.
          </p>

        </motion.div>

        <div
          className="
          relative
          mt-14
          grid
          grid-cols-1
          gap-5
          sm:mt-20
          sm:grid-cols-2
          sm:gap-6
          lg:grid-cols-3
          lg:gap-8
          "
        >

          {[
            "Authority Storytelling",
            "Trust Building",
            "Clear Value Proposition",
            "Personal Brand Voice",
            "Client-Centric Messaging",
            "Strong Call-to-Action",
          ].map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              group
              rounded-[22px]
              border
              border-white/10
              bg-[#121212]
              p-6
              transition-all
              duration-500
              ease-out
              hover:-translate-y-1
              hover:border-[#D68A55]/30
              hover:bg-[#161616]
              sm:rounded-[24px]
              sm:p-7
              "
            >

              <p
                className="
                text-[42px]
                font-bold
                text-white/[0.05]
                transition-colors
                duration-500
                group-hover:text-white/[0.08]
                sm:text-[48px]
                "
              >
                0{index + 1}
              </p>

              <h3
                className="
                mt-3
                text-[21px]
                font-semibold
                text-white
                sm:mt-4
                sm:text-[24px]
                "
              >
                {item}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>


      <section
        id="featured"
        className="
        relative
        min-h-screen
        overflow-hidden
        border-b
        border-white/10
        py-20
        sm:py-24
        lg:py-28
        "
      >

        <div
          className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#D68A55]/[0.04]
          blur-[100px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[130px]
          "
        />

        <p
          className="
          pointer-events-none
          absolute
          right-[-30px]
          top-12
          text-[140px]
          font-bold
          leading-none
          text-white/[0.025]
          sm:right-0
          sm:top-16
          sm:text-[180px]
          lg:text-[220px]
          "
        >
          05
        </p>

        <motion.div {...fadeUp} className="relative">

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            STEP 05
          </p>

          <h2
            className="
            mt-5
            text-[48px]
            font-bold
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:mt-6
            sm:text-[60px]
            md:text-[68px]
            lg:text-[72px]
            "
          >
            Featured
            <br />
            Content
          </h2>

          <p
            className="
            mt-7
            max-w-[760px]
            text-[17px]
            leading-8
            text-white/55
            sm:mt-10
            sm:text-[19px]
            sm:leading-9
            md:text-[21px]
            md:leading-10
            "
          >
            Your best work deserves to be seen first.
            We'll strategically organize case studies,
            testimonials, media appearances and high-performing
            posts so visitors immediately see proof of your expertise.
          </p>

        </motion.div>

      </section>


      <section
        id="seo"
        className="
        relative
        min-h-screen
        overflow-hidden
        border-b
        border-white/10
        py-20
        sm:py-24
        lg:py-28
        "
      >

        <div
          className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-[280px]
          w-[280px]
          rounded-full
          bg-white/[0.02]
          blur-[100px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[130px]
          "
        />

        <p
          className="
          pointer-events-none
          absolute
          right-[-30px]
          top-12
          text-[140px]
          font-bold
          leading-none
          text-white/[0.025]
          sm:right-0
          sm:top-16
          sm:text-[180px]
          lg:text-[220px]
          "
        >
          06
        </p>

        <motion.div {...fadeUp} className="relative">

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            STEP 06
          </p>

          <h2
            className="
            mt-5
            text-[48px]
            font-bold
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:mt-6
            sm:text-[60px]
            md:text-[68px]
            lg:text-[72px]
            "
          >
            Profile
            <br />
            SEO
          </h2>

          <p
            className="
            mt-7
            max-w-[760px]
            text-[17px]
            leading-8
            text-white/55
            sm:mt-10
            sm:text-[19px]
            sm:leading-9
            md:text-[21px]
            md:leading-10
            "
          >
            LinkedIn is a search engine.
            We optimize your profile using relevant industry keywords
            so that your ideal audience can discover you organically.
          </p>

        </motion.div>

      </section>
            {/* CASE STUDIES */}

      <section
        className="
        relative
        min-h-screen
        overflow-hidden
        border-b
        border-white/10
        bg-[#11110F]
        py-20
        sm:py-24
        lg:py-32
        "
      >

        <div className="relative">

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            Case Studies
          </p>

          <h2
            className="
            mt-5
            max-w-[900px]
            text-[46px]
            font-bold
            leading-[0.98]
            tracking-[-0.05em]
            text-white
            sm:mt-6
            sm:text-[56px]
            md:text-[64px]
            "
          >
            Real clients.
            <br />
            Real results.
          </h2>

          <p
            className="
            mt-7
            max-w-[760px]
            text-[17px]
            leading-8
            text-white/50
            sm:mt-10
            sm:text-[19px]
            sm:leading-9
            md:text-[20px]
            "
          >
            The strategy changes depending on the person, their audience
            and their goals. The outcome is always measured by whether
            the right people start paying attention.
          </p>


          {/* Case study image */}

          <div
            className="
            group
            relative
            mt-12
            overflow-hidden
            rounded-[26px]
            border
            border-white/10
            bg-[#151515]
            p-2
            transition-all
            duration-500
            hover:border-[#D68A55]/30
            sm:mt-20
            sm:rounded-[32px]
            sm:p-3
            "
          >

            <div
              className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-[#D68A55]/[0.05]
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              "
            />

            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px]">

              <Image
                src="/images/linkedin-case-studies.png"
                alt="LinkedIn client case studies showing context, challenge, approach and outcomes"
                width={1600}
                height={900}
                className="
                h-auto
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.015]
                "
              />

            </div>

          </div>


          {/* Case study summaries */}

          <div
            className="
            mt-8
            grid
            gap-5
            sm:mt-10
            sm:gap-6
            md:grid-cols-2
            "
          >

            {/* Case Study 01 */}

            <div
              className="
              rounded-[26px]
              border
              border-white/10
              bg-[#151515]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D68A55]/30
              sm:rounded-[30px]
              sm:p-8
              "
            >

              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D68A55] sm:text-[12px] sm:tracking-[0.3em]">
                CA Educator & Founder
              </p>

              <h3
                className="
                mt-4
                text-[25px]
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:mt-5
                sm:text-[30px]
                "
              >
                From inconsistent presence to measurable reach.
              </h3>

              <p
                className="
                mt-4
                text-[15px]
                leading-7
                text-white/50
                sm:mt-5
                sm:text-[16px]
                sm:leading-8
                "
              >
                Content strategy was rebuilt around thought leadership,
                community pain points and personal narrative, while
                community engagement was managed to amplify reach.
              </p>

              <div
                className="
                mt-7
                grid
                grid-cols-3
                gap-3
                border-t
                border-white/10
                pt-6
                sm:mt-8
                sm:gap-4
                sm:pt-7
                "
              >

                <div>

                  <p className="text-[22px] font-semibold text-white sm:text-[25px]">
                    59K+
                  </p>

                  <p className="mt-1 text-[11px] text-white/35 sm:text-[12px]">
                    Impressions
                  </p>

                </div>

                <div>

                  <p className="text-[22px] font-semibold text-white sm:text-[25px]">
                    690
                  </p>

                  <p className="mt-1 text-[11px] text-white/35 sm:text-[12px]">
                    Comments
                  </p>

                </div>

                <div>

                  <p className="text-[22px] font-semibold text-white sm:text-[25px]">
                    1,208
                  </p>

                  <p className="mt-1 text-[11px] text-white/35 sm:text-[12px]">
                    Reactions
                  </p>

                </div>

              </div>

            </div>


            {/* Case Study 02 */}

            <div
              className="
              rounded-[26px]
              border
              border-white/10
              bg-[#151515]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D68A55]/30
              sm:rounded-[30px]
              sm:p-8
              "
            >

              <p className="text-[11px] uppercase tracking-[0.28em] text-[#D68A55] sm:text-[12px] sm:tracking-[0.3em]">
                Security & Consulting CEO
              </p>

              <h3
                className="
                mt-4
                text-[25px]
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:mt-5
                sm:text-[30px]
                "
              >
                Turning executive credibility into authority.
              </h3>

              <p
                className="
                mt-4
                text-[15px]
                leading-7
                text-white/50
                sm:mt-5
                sm:text-[16px]
                sm:leading-8
                "
              >
                Thought leadership positioning was developed around
                institutional knowledge, leadership and India's
                intellectual capital narrative.
              </p>

              <div
                className="
                mt-7
                grid
                grid-cols-2
                gap-4
                border-t
                border-white/10
                pt-6
                sm:mt-8
                sm:pt-7
                "
              >

                <div>

                  <p className="text-[22px] font-semibold text-white sm:text-[25px]">
                    17,146
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35 sm:text-[12px]">
                    Comment impressions
                  </p>

                </div>

                <div>

                  <p className="text-[22px] font-semibold text-white sm:text-[25px]">
                    250K+
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/35 sm:text-[12px]">
                    Impressions in 28 days
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* 90-DAY ROADMAP */}

      <section
        id="roadmap"
        className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        "
      >

        <div
          className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#D68A55]/[0.06]
          blur-[110px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[140px]
          "
        />

        <p
          className="
          pointer-events-none
          absolute
          right-[-25px]
          top-12
          text-[140px]
          font-bold
          leading-none
          text-white/[0.025]
          sm:right-0
          sm:top-16
          sm:text-[180px]
          lg:text-[220px]
          "
        >
          07
        </p>

        <motion.div {...fadeUp} className="relative">

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            STEP 07
          </p>

          <h2
            className="
            mt-5
            text-[48px]
            font-bold
            leading-[0.95]
            tracking-[-0.05em]
            text-white
            sm:mt-6
            sm:text-[60px]
            md:text-[68px]
            lg:text-[72px]
            "
          >
            Your
            <br />
            90-Day Roadmap
          </h2>

          <p
            className="
            mt-7
            max-w-[760px]
            text-[17px]
            leading-8
            text-white/55
            sm:mt-10
            sm:text-[19px]
            sm:leading-9
            md:text-[21px]
            md:leading-10
            "
          >
            Optimizing your profile is only the beginning.
            You'll receive a clear execution plan covering
            content, engagement and long-term brand growth.
          </p>

        </motion.div>


        {/* Roadmap phases */}

        <div
          className="
          relative
          mt-14
          grid
          grid-cols-1
          gap-5
          sm:mt-20
          sm:grid-cols-3
          sm:gap-6
          "
        >

          {[
            {
              no: "01",
              title: "Foundation",
              desc: "Build the strategic foundation through profile optimization, positioning and messaging."
            },
            {
              no: "02",
              title: "Visibility",
              desc: "Turn the optimized profile into a consistent visibility engine through content and engagement."
            },
            {
              no: "03",
              title: "Growth",
              desc: "Refine what works, strengthen authority and create a repeatable system for long-term growth."
            }
          ].map((item, index) => (

            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              group
              rounded-[26px]
              border
              border-white/10
              bg-[#121212]
              p-6
              transition-all
              duration-500
              hover:-translate-y-1.5
              hover:border-[#D68A55]/35
              hover:bg-[#161616]
              sm:rounded-[30px]
              sm:p-8
              "
            >

              <div className="flex items-start justify-between">

                <p
                  className="
                  text-[52px]
                  font-bold
                  leading-none
                  text-white/[0.05]
                  transition-colors
                  duration-500
                  group-hover:text-white/[0.08]
                  sm:text-[60px]
                  "
                >
                  {item.no}
                </p>

                <span
                  className="
                  mt-2
                  h-2
                  w-2
                  rounded-full
                  bg-[#D68A55]/50
                  transition-all
                  duration-300
                  group-hover:scale-125
                  group-hover:bg-[#D68A55]
                  "
                />

              </div>

              <h3
                className="
                mt-6
                text-[25px]
                font-semibold
                text-white
                sm:text-[28px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-4
                text-[15px]
                leading-7
                text-white/50
                sm:mt-5
                sm:text-[17px]
                sm:leading-8
                "
              >
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>


        {/* Final outcome */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
          relative
          mt-8
          overflow-hidden
          rounded-[28px]
          border
          border-[#D68A55]/20
          bg-[#15120F]
          p-7
          sm:mt-12
          sm:rounded-[34px]
          sm:p-10
          "
        >

          <div
            className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#D68A55]/[0.06]
            blur-[90px]
            sm:h-[300px]
            sm:w-[300px]
            sm:blur-[110px]
            "
          />

          <p className="relative text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            The Goal
          </p>

          <h3
            className="
            relative
            mt-4
            max-w-[850px]
            text-[27px]
            font-semibold
            leading-tight
            text-white
            sm:mt-5
            sm:text-[34px]
            "
          >
            Build a LinkedIn presence that compounds over time.
          </h3>

          <p
            className="
            relative
            mt-5
            max-w-[760px]
            text-[16px]
            leading-7
            text-white/55
            sm:mt-6
            sm:text-[18px]
            sm:leading-8
            "
          >
            The objective isn't simply to have a better-looking profile.
            It's to create a strategic foundation that makes every future
            piece of content, conversation and connection more valuable.
          </p>

        </motion.div>


        {/* Final CTA */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="
          relative
          mt-16
          border-t
          border-white/10
          pt-10
          sm:mt-24
          sm:pt-12
          "
        >

          <div
            className="
            flex
            flex-col
            gap-7
            sm:gap-8
            md:flex-row
            md:items-end
            md:justify-between
            "
          >

            <div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-white/25 sm:text-[12px] sm:tracking-[0.32em]">
                Ready to build?
              </p>

              <h3
                className="
                mt-4
                max-w-[650px]
                text-[30px]
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-white
                sm:text-[38px]
                md:text-[42px]
                "
              >
                Turn your LinkedIn profile into an authority asset.
              </h3>

            </div>

            <Link
              href="/contact"
              className="
              group
              inline-flex
              h-12
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-[#F7F5F2]
              px-7
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
              sm:px-8
              "
            >

              <span className="text-black">
                Book Discovery Call
              </span>

              <span
                className="
                text-black
                transition-transform
                duration-300
                group-hover:translate-x-1
                "
              >
                →
              </span>

            </Link>

          </div>

        </motion.div>

      </section>

    </div>

  </section>

</main>
  );
}