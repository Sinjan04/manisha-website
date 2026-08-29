"use client";

import { motion } from "framer-motion";
import {
  FaMoneyBillTrendUp,
  FaBullhorn,
  FaUserTie,
} from "react-icons/fa6";

const problems = [
  {
    number: "01",
    icon: <FaMoneyBillTrendUp />,
    title: "Invisible Expertise",
    description:
      "Your knowledge is valuable, but your online presence doesn't reflect it. Every day, professionals with less experience are winning better opportunities simply because they're more visible.",
    tags: [
      "Low Visibility",
      "Missed Clients",
      "Weak Positioning",
      "Lost Revenue",
    ],
  },
  {
    number: "02",
    icon: <FaBullhorn />,
    title: "Inconsistent Presence",
    description:
      "Posting once in a while isn't enough to build authority. Without consistency and strategy, LinkedIn has no reason to keep showing your content.",
    tags: [
      "No Strategy",
      "Low Reach",
      "Poor Consistency",
      "No Authority",
    ],
  },
  {
    number: "03",
    icon: <FaUserTie />,
    title: "Generic Positioning",
    description:
      "If your profile sounds like everyone else's, people won't remember you. Standing out requires a clear message and a distinct professional identity.",
    tags: [
      "Generic Profile",
      "No Differentiation",
      "Weak Brand",
      "Low Trust",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0B] pt-10 pb-36"
    >
      <div className="mx-auto max-w-[1520px] px-10">

        <p className="mb-6 text-[13px] uppercase tracking-[0.45em] text-[#C98A5C]">
          The Reality
        </p>

        <h2 className="max-w-[760px] text-[68px] font-bold leading-[1.02] tracking-[-0.05em] text-[#E2DED8]">
          <span className="block text-[#E8E4DF]">
  Experts Are Being
</span>

<span className="block text-[#5A5A5A]">
  Overlooked.
</span>

<span className="block text-[#E8E4DF]">
  Every Single Day.
</span>
        </h2>

        <div className="mt-24 grid grid-cols-3 gap-8">

          {problems.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
  opacity: {
    duration: 0.55,
    delay: index * 0.15,
  },
  y: {
    duration: 0.55,
    delay: index * 0.15,
  },
}}
              viewport={{ once: true }}
whileHover={{
  y: -6,
  boxShadow: "0 30px 80px rgba(201,138,92,0.12)",
  transition: {
    duration: 0.18,
    ease: "easeOut",
  },
}}
className="
  group
  rounded-[34px]
  border
  border-white/10
  bg-[#131313]
  p-10 min-h-[470px]
  transition-colors
  duration-150
  hover:border-[#D68A55]/40
hover:bg-[#151515]
"
            >

<>
  {/* Top */}

  <div className="flex items-start justify-between">

    <div
      className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-[#2A201A]
      text-[22px]
      text-[#D68A55]
      transition-all
      duration-300
      group-hover:bg-[#D68A55]
      group-hover:text-black
      "
    >
      {item.icon}
    </div>

    <p className="text-[72px] font-bold leading-none text-white/[0.04]">
      {item.number}
    </p>

  </div>

  {/* Title */}

  <h3 className="mt-9 text-[30px] font-semibold leading-tight text-white">
    {item.title}
  </h3>

  {/* Description */}

  <p className="mt-6 text-[18px] leading-8 text-white/55">
    {item.description}
  </p>

  {/* Tags */}

  <div className="mt-8 flex flex-wrap gap-3">

    {item.tags.map((tag) => (

      <span
        key={tag}
        className="
        rounded-full
        border
        border-[#D68A55]/15
        bg-[#1A1715]
        px-4
        py-2
        text-[13px]
        text-[#B8B8B8]
        transition-all
        duration-300
        group-hover:text-white/70
        "
      >
        {tag}
      </span>

    ))}

  </div>

  {/* CTA */}

  
</>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}