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
      className="relative overflow-hidden bg-[#0B0B0B] pt-8 pb-24 sm:pt-10 sm:pb-28 md:pt-10 md:pb-36"
    >
      <div className="mx-auto max-w-[1520px] px-5 sm:px-7 md:px-10">

        <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[#C98A5C] sm:text-[12px] sm:tracking-[0.4em] md:mb-6 md:text-[13px] md:tracking-[0.45em]">
          The Reality
        </p>

        <h2 className="max-w-[760px] text-[46px] font-bold leading-[0.98] tracking-[-0.055em] text-[#E2DED8] sm:text-[56px] md:text-[68px] md:leading-[1.02] md:tracking-[-0.05em]">
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:mt-24 md:grid-cols-3 md:gap-8">

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
                min-h-[auto]
                rounded-[26px]
                border
                border-white/10
                bg-[#131313]
                p-6
                transition-colors
                duration-150
                hover:border-[#D68A55]/40
                hover:bg-[#151515]
                sm:rounded-[30px]
                sm:p-8
                md:min-h-[470px]
                md:rounded-[34px]
                md:p-10
              "
            >

              <>
                {/* Top */}

                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#2A201A]
                      text-[19px]
                      text-[#D68A55]
                      transition-all
                      duration-300
                      group-hover:bg-[#D68A55]
                      group-hover:text-black
                      sm:h-14
                      sm:w-14
                      sm:text-[22px]
                    "
                  >
                    {item.icon}
                  </div>

                  <p className="text-[58px] font-bold leading-none text-white/[0.04] sm:text-[66px] md:text-[72px]">
                    {item.number}
                  </p>

                </div>

                {/* Title */}

                <h3 className="mt-7 text-[25px] font-semibold leading-tight text-white sm:mt-8 sm:text-[28px] md:mt-9 md:text-[30px]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-[16px] leading-7 text-white/55 sm:text-[17px] sm:leading-7 md:mt-6 md:text-[18px] md:leading-8">
                  {item.description}
                </p>

                {/* Tags */}

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3 md:mt-8">

                  {item.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-[#D68A55]/15
                        bg-[#1A1715]
                        px-3
                        py-1.5
                        text-[11px]
                        text-[#B8B8B8]
                        transition-all
                        duration-300
                        group-hover:text-white/70
                        sm:px-3.5
                        sm:py-2
                        sm:text-[12px]
                        md:px-4
                        md:text-[13px]
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}