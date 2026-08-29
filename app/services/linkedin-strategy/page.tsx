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

  // Shared scroll-reveal presets. Purely presentational — no logic change.
  const fadeUp = {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
       duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const, },
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
<main className="relative min-h-screen bg-[#0B0B0B]">

  {/* Ambient grain — subtle texture, no new colors */}
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
  gap-16
  px-10
  pt-32
  pb-32
  "
>

    {/* LEFT SIDEBAR */}

<aside className="sticky top-28 h-fit w-[300px]">

  <div
    className="
    rounded-[28px]
    border
    border-white/[0.07]
    bg-white/[0.02]
    p-7
    backdrop-blur-xl
    shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-30px_rgba(0,0,0,0.7)]
    "
  >

  <p className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#D68A55]">
    Service Guide
  </p>

  <div className="mt-3 flex items-center gap-2.5">

  <motion.p
    key={stepIndex}
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="font-mono text-[13px] tracking-[0.2em] text-white/70"
  >
    {stepIndex}
  </motion.p>

  <span className="h-px w-4 bg-white/15" />

  <p className="font-mono text-[13px] tracking-[0.2em] text-white/25">
    07
  </p>

</div>

  <h2 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
    LinkedIn
    <br />
    Strategy
  </h2>

  <div className="mt-8 flex flex-col gap-1.5">

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
        px-5
        py-3
        text-[15px]
        transition-all
        duration-300
        ease-out

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

 <div className="my-10 flex justify-center">

  <div className="relative h-[168px] w-[2px] rounded-full bg-white/[0.06]">

    <motion.div
      animate={{ height: progressHeight }}
      transition={{ type: "spring", stiffness: 130, damping: 22 }}
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

  <div className="space-y-7 border-t border-white/[0.06] pt-7">

    <div>
      <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">
        Duration
      </p>

      <p className="mt-2 text-[19px] font-semibold text-white">
        2–3 Weeks
      </p>
    </div>

    <div>
      <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">
        Deliverables
      </p>

      <p className="mt-2 text-[19px] font-semibold text-white">
        7 Optimized Sections
      </p>
    </div>

    <div>
      <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">
        Goal
      </p>

      <p className="mt-2 text-[19px] font-semibold leading-8 text-white">
        Build Authority &
        <br />
        Generate Leads
      </p>
    </div>

  </div>

  </div>

</aside>

<div
  className="
  sticky
  top-28
  h-[calc(100vh-220px)]
  w-px
  self-start
  bg-gradient-to-b
  from-white/[0.09]
  via-white/[0.04]
  to-transparent
  "
/>

    {/* RIGHT CONTENT */}

    <div className="flex-1">

      <section
        id="audit"
        className="relative min-h-screen overflow-hidden border-b border-white/10 pb-24"
      >

        <div
          className="pointer-events-none absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#D68A55]/[0.05] blur-[130px]"
        />

        <motion.div {...fadeUp} className="relative">

        <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
  STEP 01
</p>

<h1 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
  Profile Audit
</h1>

<p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
  Before we create content or improve visibility, we need to
  understand why your current profile isn't converting visitors
  into opportunities.

  <br /><br />

  Every section of your LinkedIn profile is strategically reviewed
  to identify weak positioning, unclear messaging and missed
  opportunities that are costing you credibility.
</p>

        </motion.div>

{/* Deliverables */}

<div className="relative mt-20 grid grid-cols-2 gap-8">

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
      rounded-[30px]
      border
      border-white/10
      bg-[#121212]
      p-8
      shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_20px_40px_-28px_rgba(0,0,0,0.7)]
      transition-all
      duration-500
      ease-out
      hover:-translate-y-1.5
      hover:border-[#D68A55]/40
      hover:bg-[#161616]
      hover:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_30px_60px_-24px_rgba(214,138,85,0.22)]
      "
    >

      {/* Large Number */}

      <p
        className="
        absolute
        right-8
        top-5
        text-[72px]
        font-bold
        leading-none
        text-white/[0.04]
        transition-all
        duration-500
        group-hover:text-white/[0.08]
        "
      >
        {item.no}
      </p>

      {/* Section Label */}

      <p className="text-[12px] uppercase tracking-[0.32em] text-[#D68A55]">
        Included
      </p>

      {/* Title */}

      <h3
        className="
        mt-5
        text-[30px]
        font-semibold
        text-white
        transition-colors
        duration-300
        group-hover:text-[#D68A55]
        "
      >
        {item.title}
      </h3>

      {/* Description */}

<p className="mt-5 text-[18px] leading-9 text-white/55">
  {item.desc}
</p>

{/* Included */}

<div className="mt-8 space-y-3">

  {item.points?.map((point) => (

    <div
      key={point}
      className="flex items-center gap-3"
    >

      <span className="h-[5px] w-[5px] rounded-full bg-[#D68A55]" />

      <p className="text-[15px] text-white/65">
        {point}
      </p>

    </div>

  ))}

</div>

{/* Bottom */}

<div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

  <span className="text-[14px] text-white/35">
    Included in your strategy
  </span>

  <span
    className="
    text-[28px]
    text-white/20
    transition-all
    duration-300
    ease-out
    group-hover:translate-x-2
    group-hover:text-[#D68A55]
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
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className="
  relative
  mt-20
  overflow-hidden
  rounded-[34px]
  border
  border-[#D68A55]/20
  bg-[#15120F]
  p-10
  shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)]
  "
>

  <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#D68A55]/[0.06] blur-[110px]" />

  <p className="relative text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    Expected Outcome
  </p>

  <h3 className="relative mt-5 text-[34px] font-semibold text-white">
    A profile that instantly communicates authority.
  </h3>

  <p className="relative mt-6 max-w-[720px] text-[18px] leading-8 text-white/55">
    Instead of visitors wondering what you do, they'll immediately
    understand your expertise, your positioning and why you're the
    right person to work with.
  </p>

</motion.div>

      </section>
      <section
  id="positioning"
  className="relative min-h-screen overflow-hidden border-b border-white/10 py-28"
>

  <div className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-white/[0.02] blur-[130px]" />

  <motion.div {...fadeUp} className="relative">

  <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    STEP 02
  </p>

  <h2 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
    Strategic
    <br />
    Positioning
  </h2>

  <p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
    Visibility without positioning creates attention.
    Positioning creates opportunities.

    <br /><br />

    Together we'll define exactly who you help,
    what makes your expertise different and why
    someone should choose you over everyone else
    in your niche.
  </p>

  </motion.div>

  <div className="relative mt-20 grid grid-cols-2 gap-8">

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
        rounded-[30px]
        border
        border-white/10
        bg-[#121212]
        p-8
        shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_20px_40px_-28px_rgba(0,0,0,0.7)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1.5
        hover:border-[#D68A55]/40
        hover:bg-[#161616]
        hover:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_30px_60px_-24px_rgba(214,138,85,0.22)]
        "
      >

        <p className="text-[56px] font-bold text-white/[0.05]">
          0{index + 1}
        </p>

        <h3 className="mt-3 text-[28px] font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-5 text-[17px] leading-8 text-white/55">
          {item.desc}
        </p>

      </motion.div>

    ))}

  </div>

  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="
    relative
    mt-20
    overflow-hidden
    rounded-[34px]
    border
    border-[#D68A55]/20
    bg-[#15120F]
    p-10
    shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)]
    "
  >

    <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#D68A55]/[0.06] blur-[110px]" />

    <p className="relative text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
      Expected Outcome
    </p>

    <h3 className="relative mt-5 text-[34px] font-semibold text-white">
      Become the obvious choice in your niche.
    </h3>

    <p className="relative mt-6 max-w-[720px] text-[18px] leading-8 text-white/55">
      Instead of competing on price or experience alone,
      your positioning communicates a clear reason for
      prospects to trust you before the first conversation.
    </p>

  </motion.div>

</section>
{/* RESULTS / PROOF */}

<section
  className="
  relative
  min-h-screen
  overflow-hidden
  border-b
  border-white/10
  bg-[#0D0D0D]
  py-32
  "
>

  {/* Ambient glow */}

  <div
    className="
    pointer-events-none
    absolute
    -right-40
    top-40
    h-[420px]
    w-[420px]
    rounded-full
    bg-[#D68A55]/[0.04]
    blur-[120px]
    "
  />

  <div className="relative">

    <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
      Proof
    </p>

    <h2 className="mt-6 max-w-[850px] text-[64px] font-bold leading-[0.98] tracking-[-0.05em] text-white">
      Numbers that speak
      <br />
      for themselves.
    </h2>

    <p className="mt-10 max-w-[760px] text-[20px] leading-9 text-white/50">
      Strategy only matters when it creates measurable movement.
      These are real performance results from the content,
      engagement and community work managed for clients.
    </p>

    {/* Main proof image */}

    <div
      className="
      group
      relative
      mt-20
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-[#121212]
      p-3
      transition-all
      duration-500
      hover:border-[#D68A55]/30
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

      <div className="relative overflow-hidden rounded-[24px]">

        <Image
          src="/images/linkedin-results.png"
          alt="LinkedIn performance results showing impressions, comments, engagements and reactions"
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

    {/* Highlight numbers */}

    <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">

      {[
        {
          number: "130K+",
          label: "Impressions on a single post",
        },
        {
          number: "17K+",
          label: "Impressions on a single comment",
        },
        {
          number: "250K+",
          label: "Impressions in 28 days",
        },
        {
          number: "6,293",
          label: "Total engagements",
        },
      ].map((item) => (

        <div
          key={item.number}
          className="
          rounded-[24px]
          border
          border-white/10
          bg-[#121212]
          p-7
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#D68A55]/30
          "
        >

          <p className="text-[34px] font-semibold tracking-[-0.04em] text-white">
            {item.number}
          </p>

          <p className="mt-3 text-[14px] leading-6 text-white/40">
            {item.label}
          </p>

        </div>

      ))}

    </div>

    <div
      className="
      mt-12
      rounded-[28px]
      border
      border-[#D68A55]/15
      bg-[#15120F]
      px-8
      py-7
      "
    >

      <p className="text-[13px] uppercase tracking-[0.32em] text-[#D68A55]">
        The point
      </p>

      <p className="mt-4 max-w-[800px] text-[18px] leading-8 text-white/55">
        These aren't isolated vanity metrics. They show what happens
        when positioning, content strategy and intentional community
        engagement work together.
      </p>

    </div>

  </div>

</section>
<section
  id="headline"
  className="relative min-h-screen overflow-hidden border-b border-white/10 py-28"
>

  <div className="pointer-events-none absolute -left-32 top-10 h-[380px] w-[380px] rounded-full bg-[#D68A55]/[0.04] blur-[130px]" />

  <motion.div {...fadeUp} className="relative">

  <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    STEP 03
  </p>

  <h2 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
    Headline
    <br />
    Rewrite
  </h2>

  <p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
    Your headline is the first thing people notice after your name.

    <br /><br />

    Instead of saying what you do, it should explain the value you
    create and give people an immediate reason to keep reading.
  </p>

  </motion.div>

  <div className="relative mt-20 space-y-8">

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
        justify-between
        border-b
        border-white/10
        pb-8
        transition-colors
        duration-300
        hover:border-[#D68A55]/30
        "
      >

        <div>

          <p className="text-[14px] text-[#D68A55]">
            0{index + 1}
          </p>

          <h3
            className="
            mt-3
            text-[30px]
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-white/90
            "
          >
            {item.title}
          </h3>

        </div>

        <p className="max-w-[480px] text-[18px] leading-9 text-white/55">
          {item.desc}
        </p>

      </motion.div>

    ))}

  </div>

  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="
    relative
    mt-20
    overflow-hidden
    rounded-[34px]
    border
    border-[#D68A55]/20
    bg-[#15120F]
    p-10
    shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)]
    "
  >

    <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#D68A55]/[0.06] blur-[110px]" />

    <p className="relative text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
      Expected Outcome
    </p>

    <h3 className="relative mt-5 text-[34px] font-semibold text-white">
      A headline that earns attention in seconds.
    </h3>

    <p className="relative mt-6 max-w-[720px] text-[18px] leading-8 text-white/55">
      Whether someone discovers you through search, comments or
      content, your headline immediately communicates expertise,
      credibility and relevance.
    </p>

  </motion.div>

</section>
<section
  id="about"
  className="relative min-h-screen overflow-hidden border-b border-white/10 py-28"
>

  <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-white/[0.02] blur-[130px]" />

  <motion.div {...fadeUp} className="relative">

  <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    STEP 04
  </p>

  <h2 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
    About
    <br />
    Section
  </h2>

  <p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
    Your About section shouldn't read like a résumé.
    It should tell a compelling story that builds trust,
    establishes authority and motivates visitors to connect with you.
  </p>

  </motion.div>

  <div className="relative mt-20 grid grid-cols-3 gap-8">

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
        rounded-[24px]
        border
        border-white/10
        bg-[#121212]
        p-7
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1
        hover:border-[#D68A55]/30
        hover:bg-[#161616]
        "
      >

        <p className="text-[48px] font-bold text-white/[0.05] transition-colors duration-500 group-hover:text-white/[0.08]">
          0{index + 1}
        </p>

        <h3 className="mt-4 text-[24px] font-semibold text-white">
          {item}
        </h3>

      </motion.div>

    ))}

  </div>

</section>
<section
  id="featured"
  className="relative min-h-screen overflow-hidden border-b border-white/10 py-28"
>

  <div className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#D68A55]/[0.04] blur-[130px]" />

  <p
    className="
    pointer-events-none
    absolute
    right-0
    top-16
    text-[220px]
    font-bold
    leading-none
    text-white/[0.025]
    "
  >
    05
  </p>

  <motion.div {...fadeUp} className="relative">

  <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    STEP 05
  </p>

  <h2 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
    Featured
    <br />
    Content
  </h2>

  <p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
    Your best work deserves to be seen first.
    We'll strategically organize case studies,
    testimonials, media appearances and high-performing
    posts so visitors immediately see proof of your expertise.
  </p>

  </motion.div>

</section>
<section
  id="seo"
  className="relative min-h-screen overflow-hidden border-b border-white/10 py-28"
>

  <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-white/[0.02] blur-[130px]" />

  <p
    className="
    pointer-events-none
    absolute
    right-0
    top-16
    text-[220px]
    font-bold
    leading-none
    text-white/[0.025]
    "
  >
    06
  </p>

  <motion.div {...fadeUp} className="relative">

  <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    STEP 06
  </p>

  <h2 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
    Profile
    <br />
    SEO
  </h2>

  <p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
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
  py-32
  "
>

  <div className="relative">

    <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
      Case Studies
    </p>

    <h2 className="mt-6 max-w-[900px] text-[64px] font-bold leading-[0.98] tracking-[-0.05em] text-white">
      Real clients.
      <br />
      Real results.
    </h2>

    <p className="mt-10 max-w-[760px] text-[20px] leading-9 text-white/50">
      The strategy changes depending on the person, their audience
      and their goals. The outcome is always measured by whether
      the right people start paying attention.
    </p>

    {/* Case study image */}

    <div
      className="
      group
      relative
      mt-20
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-[#151515]
      p-3
      transition-all
      duration-500
      hover:border-[#D68A55]/30
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

      <div className="relative overflow-hidden rounded-[24px]">

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

    <div className="mt-10 grid gap-6 md:grid-cols-2">

      <div
        className="
        rounded-[30px]
        border
        border-white/10
        bg-[#151515]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D68A55]/30
        "
      >

        <p className="text-[12px] uppercase tracking-[0.3em] text-[#D68A55]">
          CA Educator & Founder
        </p>

        <h3 className="mt-5 text-[30px] font-semibold tracking-[-0.03em] text-white">
          From inconsistent presence to measurable reach.
        </h3>

        <p className="mt-5 text-[16px] leading-8 text-white/50">
          Content strategy was rebuilt around thought leadership,
          community pain points and personal narrative, while
          community engagement was managed to amplify reach.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">

          <div>
            <p className="text-[25px] font-semibold text-white">
              59K+
            </p>
            <p className="mt-1 text-[12px] text-white/35">
              Impressions
            </p>
          </div>

          <div>
            <p className="text-[25px] font-semibold text-white">
              690
            </p>
            <p className="mt-1 text-[12px] text-white/35">
              Comments
            </p>
          </div>

          <div>
            <p className="text-[25px] font-semibold text-white">
              1,208
            </p>
            <p className="mt-1 text-[12px] text-white/35">
              Reactions
            </p>
          </div>

        </div>

      </div>

      <div
        className="
        rounded-[30px]
        border
        border-white/10
        bg-[#151515]
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D68A55]/30
        "
      >

        <p className="text-[12px] uppercase tracking-[0.3em] text-[#D68A55]">
          Security & Consulting CEO
        </p>

        <h3 className="mt-5 text-[30px] font-semibold tracking-[-0.03em] text-white">
          Turning executive credibility into authority.
        </h3>

        <p className="mt-5 text-[16px] leading-8 text-white/50">
          Thought leadership positioning was developed around
          institutional knowledge, leadership and India's
          intellectual capital narrative.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-7">

          <div>
            <p className="text-[25px] font-semibold text-white">
              17,146
            </p>
            <p className="mt-1 text-[12px] text-white/35">
              Comment impressions
            </p>
          </div>

          <div>
            <p className="text-[25px] font-semibold text-white">
              250K+
            </p>
            <p className="mt-1 text-[12px] text-white/35">
              Impressions in 28 days
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<section
  id="roadmap"
  className="relative overflow-hidden py-28"
>

  <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#D68A55]/[0.06] blur-[140px]" />

  <p
    className="
    pointer-events-none
    absolute
    right-0
    top-16
    text-[220px]
    font-bold
    leading-none
    text-white/[0.025]
    "
  >
    07
  </p>

  <motion.div {...fadeUp} className="relative">

  <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
    STEP 07
  </p>

  <h2 className="mt-6 text-[72px] font-bold leading-[0.95] tracking-[-0.05em] text-white">
    Your
    <br />
    90-Day Roadmap
  </h2>

  <p className="mt-10 max-w-[760px] text-[21px] leading-10 text-white/55">
    Optimizing your profile is only the beginning.
    You'll receive a clear execution plan covering
    content, engagement and long-term brand growth.
  </p>

  </motion.div>

</section>
      

    </div>

  </section>

</main>
  );
}