"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaArrowRight,
  FaCircleCheck,
  FaPenNib,
  FaChessKing,
} from "react-icons/fa6";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B0B0B] pt-10 pb-24 md:pb-36"
    >
      <div className="mx-auto max-w-[1520px] px-5 md:px-10">

        {/* Section Label */}

        <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#C98A5C] md:mb-6 md:text-[13px] md:tracking-[0.45em]">
          Services
        </p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-[820px]
            text-[45px]
            font-bold
            leading-[1.02]
            tracking-[-0.045em]
            md:text-[70px]
            md:tracking-[-0.05em]
          "
        >
          <span className="block text-[#F6F3EF]">
            How We Turn
          </span>

          <span className="block text-[#555555]">
            Visibility Into
          </span>

          <span className="block text-[#F6F3EF]">
            Authority.
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            max-w-[620px]
            text-[17px]
            leading-8
            text-white/55
            md:mt-10
            md:text-[20px]
            md:leading-9
          "
        >
          Every engagement is built around one objective—
          positioning you as the obvious choice in your industry
          through strategy, content and authority building.
        </motion.p>

        {/* Cards Container */}

        <div className="mt-12 md:mt-16">

          {/* TOP TWO CARDS */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

            {/* ================= CARD 01 ================= */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: "rgba(10,102,194,.35)",
                boxShadow: "0 30px 80px rgba(10,102,194,.12)",
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#131313]
                p-7
                md:rounded-[36px]
                md:p-9
              "
            >

              {/* Background Glow */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-60
                  w-60
                  rounded-full
                  bg-[#0A66C2]
                  opacity-[0.06]
                  blur-[100px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/[0.02]
                  via-transparent
                  to-transparent
                "
              />

              {/* Top */}

              <div className="relative flex items-start justify-between">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "rgba(10,102,194,0.22)",
                    borderColor: "rgba(10,102,194,0.35)",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#0A66C2]/15
                    bg-[#0A66C2]/15
                    text-[#0A66C2]
                    md:h-14
                    md:w-14
                  "
                >
                  <FaLinkedinIn className="text-[19px] md:text-[22px]" />
                </motion.div>

                <motion.p
                  whileHover={{
                    scale: 1.08,
                    opacity: 0.09,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    text-[64px]
                    font-bold
                    leading-none
                    text-white/[0.04]
                    md:text-[82px]
                  "
                >
                  01
                </motion.p>

              </div>

              {/* Title */}

              <h3 className="mt-7 text-[27px] font-semibold leading-tight text-white md:mt-9 md:text-[32px]">
                LinkedIn Profile
                <br />
                Optimization
              </h3>

              {/* Description */}

              <p className="mt-5 text-[16px] leading-7 text-white/55 md:mt-6 md:text-[17px] md:leading-8">
                Most professionals don't lack expertise—they lack positioning.

                <br />
                <br />

                We'll rebuild every part of your LinkedIn profile, from your
                headline and About section to your messaging and profile
                structure, so visitors instantly understand your value and
                why you're worth reaching out to.

                <br />
                <br />

                You'll leave with a fully optimized profile, a clear personal
                brand strategy and a 90-day roadmap designed to turn profile
                visits into meaningful opportunities.
              </p>

              {/* Chips */}

              <div className="mt-7 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">

                {[
                  "Profile Audit",
                  "Messaging",
                  "Headline",
                  "Audience Research",
                  "90-Day Roadmap",
                ].map((tag) => (

                  <div
                    key={tag}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3.5
                      py-2
                      text-[12px]
                      text-white/60
                      transition-all
                      duration-300
                      group-hover:border-[#0A66C2]/20
                      group-hover:bg-[#0A66C2]/10
                      md:px-4
                      md:text-[13px]
                    "
                  >
                    <FaCircleCheck className="text-[10px] text-[#0A66C2] md:text-[11px]" />
                    {tag}
                  </div>

                ))}

              </div>

              {/* Divider */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: "100%",
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  mt-8
                  h-px
                  bg-gradient-to-r
                  from-[#0A66C2]
                  to-transparent
                  md:mt-10
                "
              />

              {/* CTA */}

              <Link
                href="/services/linkedin-strategy"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  font-medium
                  text-[#0A66C2]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  md:mt-7
                "
              >
                Learn More
                <FaArrowRight />
              </Link>

            </motion.div>

            {/* ================= CARD 02 ================= */}

            <motion.div
              whileHover={{
                y: -8,
                borderColor: "rgba(214,138,85,.35)",
                boxShadow: "0 30px 80px rgba(214,138,85,.12)",
              }}
              transition={{ duration: 0.25 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#131313]
                p-7
                md:rounded-[36px]
                md:p-9
              "
            >

              {/* Orange Glow */}

              <div
                className="
                  absolute
                  -bottom-20
                  -left-20
                  h-64
                  w-64
                  rounded-full
                  bg-[#D68A55]
                  opacity-[0.06]
                  blur-[110px]
                "
              />

              {/* Subtle Gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/[0.02]
                  via-transparent
                  to-transparent
                "
              />

              {/* Top */}

              <div className="relative flex items-start justify-between">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#D68A55]/15
                    bg-[#D68A55]/15
                    text-[#D68A55]
                    md:h-14
                    md:w-14
                  "
                >
                  <FaPenNib className="text-[18px] md:text-[20px]" />
                </motion.div>

                <motion.p
                  whileHover={{
                    scale: 1.08,
                    opacity: 0.08,
                  }}
                  className="
                    text-[64px]
                    font-bold
                    leading-none
                    text-white/[0.04]
                    md:text-[82px]
                  "
                >
                  02
                </motion.p>

              </div>

              {/* Title */}

              <h3 className="mt-7 text-[27px] font-semibold leading-tight text-white md:mt-9 md:text-[32px]">
                Content Strategy
                <br />
                & Ghostwriting
              </h3>

              {/* Description */}

              <p className="mt-5 text-[16px] leading-7 text-white/55 md:mt-6 md:text-[17px] md:leading-8">
                Consistency doesn't build authority. Strategic content does.

                <br />
                <br />

                Every post is researched, written and optimized around your
                expertise using the same content framework that has generated
                <span className="font-semibold text-[#D68A55]">
                  {" "}130K+ impressions on a single LinkedIn post{" "}
                </span>
                and
                <span className="font-semibold text-[#D68A55]">
                  {" "}250K+ monthly impressions{" "}
                </span>
                across LinkedIn and Instagram.

                <br />
                <br />

                Instead of wondering what to post next, you'll have a content
                engine that consistently builds visibility, trust and inbound
                opportunities.
              </p>

              {/* Tags */}

              <div className="mt-7 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">

                {[
                  "Ghostwriting",
                  "Content Strategy",
                  "Storytelling",
                  "Community Building",
                  "Analytics",
                ].map((tag) => (

                  <div
                    key={tag}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3.5
                      py-2
                      text-[12px]
                      text-white/60
                      transition-all
                      duration-300
                      group-hover:border-[#D68A55]/20
                      group-hover:bg-[#D68A55]/10
                      md:px-4
                      md:text-[13px]
                    "
                  >
                    <FaCircleCheck className="text-[10px] text-[#D68A55] md:text-[11px]" />
                    {tag}
                  </div>

                ))}

              </div>

              {/* Divider */}

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35 }}
                className="
                  mt-8
                  h-px
                  bg-gradient-to-r
                  from-[#D68A55]
                  to-transparent
                  md:mt-10
                "
              />

              {/* CTA */}

              <button
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  font-medium
                  text-[#D68A55]
                  md:mt-7
                "
              >
                Explore Strategy

                <motion.div whileHover={{ x: 5 }}>
                  <FaArrowRight />
                </motion.div>
              </button>

            </motion.div>

          </div>

          {/* ================= CARD 03 ================= */}

          <motion.div
            whileHover={{
              y: -8,
              borderColor: "rgba(236,185,82,.35)",
              boxShadow: "0 40px 100px rgba(236,185,82,.12)",
            }}
            transition={{ duration: 0.25 }}
            className="
              group
              relative
              mt-6
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#131313]
              p-7
              md:mt-8
              md:rounded-[36px]
              md:p-10
            "
          >

            {/* Gold Glow */}

            <div
              className="
                absolute
                -right-20
                bottom-0
                h-[320px]
                w-[320px]
                rounded-full
                bg-[#ECB952]
                opacity-[0.05]
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.02]
                via-transparent
                to-transparent
              "
            />

            <div className="relative flex flex-col md:flex-row md:justify-between">

              {/* LEFT */}

              <div className="max-w-[760px]">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#ECB952]/15
                    bg-[#ECB952]/12
                    text-[#ECB952]
                    md:h-16
                    md:w-16
                  "
                >
                  <FaChessKing className="text-[23px] md:text-[26px]" />
                </div>

                <h3 className="mt-7 text-[31px] font-semibold leading-tight text-white md:mt-8 md:text-[42px]">
                  Executive Brand
                  <br />
                  Positioning
                </h3>

                <p className="mt-5 max-w-[680px] text-[16px] leading-7 text-white/55 md:mt-6 md:text-[18px] md:leading-8">
                  Personal branding isn't a one-time project—it's a long-term
                  business asset.

                  <br />
                  <br />

                  Think of this as having your own Chief Brand Officer. Together,
                  we'll refine your positioning, review performance, identify
                  growth opportunities and continuously strengthen your online
                  authority through strategic monthly consulting.

                  <br />
                  <br />

                  Every decision is backed by data, ensuring your personal brand
                  keeps growing long after your first viral post.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">

                  {[
                    "Monthly Advisory",
                    "Thought Leadership",
                    "Brand Positioning",
                    "Growth Strategy",
                    "Priority Support",
                  ].map((tag) => (

                    <div
                      key={tag}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3.5
                        py-2
                        text-[12px]
                        text-white/60
                        transition-all
                        duration-300
                        group-hover:border-[#ECB952]/20
                        group-hover:bg-[#ECB952]/10
                        md:px-4
                        md:text-[13px]
                      "
                    >
                      <FaCircleCheck className="text-[10px] text-[#ECB952] md:text-[11px]" />
                      {tag}
                    </div>

                  ))}

                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.35 }}
                  className="
                    mt-8
                    h-px
                    bg-gradient-to-r
                    from-[#ECB952]
                    to-transparent
                    md:mt-10
                  "
                />

                <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    font-medium
                    text-[#ECB952]
                    md:mt-7
                  "
                >
                  Book Strategy Call

                  <FaArrowRight />
                </button>

              </div>

              {/* RIGHT */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  opacity: 0.08,
                }}
                className="
                  mt-8
                  hidden
                  text-[190px]
                  font-bold
                  leading-none
                  text-white/[0.03]
                  md:mt-0
                  md:block
                "
              >
                03
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}