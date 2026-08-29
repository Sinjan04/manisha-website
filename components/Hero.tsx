"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaPlus,
  FaComments,
  FaHandshake,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
  id="hero"
  className="mx-auto max-w-[1520px] px-10 pt-10 pb-24"
>
      {/* ================= TOP ================= */}

     <div className="flex items-start justify-between">

        {/* LEFT */}

        <motion.div
          className="max-w-[640px]"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-8 text-[14px] font-medium uppercase tracking-[0.42em] text-[#C98A5C]">
            Personal Branding Strategist
          </p>

          <h1 className="leading-[0.9] font-bold tracking-[-0.07em]">
            <span className="block text-[102px] text-[#F6F3EF]">
              Position.
            </span>

            <span className="block text-[102px] text-[#454545]">
              Influence.
            </span>

            <span className="block text-[102px] text-[#F6F3EF]">
              Scale.
            </span>
          </h1>

          <p className="mt-10 max-w-[560px] text-[20px] leading-[1.8] font-light text-[#8E8E8E]">
            Your expertise is valuable. Most people just can't find it.
            I help Founders, CEOs and Consultants build a LinkedIn
            presence that turns visibility into opportunity.
          </p>

          <div className="mt-14 flex gap-5">

            <Link
              href="/contact"
              className="
              group
              rounded-full
              bg-white
              px-9
              py-5
              font-semibold
              !text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(255,255,255,0.18)]
              "
            >
              <span className="flex items-center gap-2">
                Book Discovery Call
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/results"
              className="
              group
              rounded-full
              border
              border-white/15
              px-9
              py-5
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D68A55]/50
              hover:bg-white/5
              "
            >
              <span className="flex items-center gap-2">
                View Client Results
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
          relative
          h-[720px]
          w-[540px]
          overflow-hidden
          rounded-tl-[180px]
          rounded-tr-[40px]
          rounded-br-[40px]
          rounded-bl-[40px]
          border
          border-white/10
          bg-[#171717]
          "
        >

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.55, 0.75, 0.55],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="
            absolute
            -right-20
            -top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#D6844A]
            blur-[120px]
            "
          />

          <Image
            src="/images/manisha.jpg"
            alt="Manisha"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* LinkedIn */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="
            absolute
            left-4
            bottom-10
            flex
            items-center
            gap-4
            rounded-[24px]
            bg-[#171717]/90
            px-5
            py-4
            backdrop-blur-xl
            "
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2]">
              <FaLinkedinIn className="text-xl text-white" />
            </div>

            <div>

              <p className="text-[34px] font-bold text-white">
                130K+
              </p>

              <p className="text-[13px] text-white/50">
                LinkedIn Reach
              </p>

            </div>

          </motion.div>

          {/* Instagram */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="
            absolute
            right-5
            top-8
            flex
            items-center
            gap-4
            rounded-[24px]
            bg-[#171717]/90
            px-5
            py-4
            backdrop-blur-xl
            "
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
              <FaInstagram className="text-xl text-white" />
            </div>

            <div>

              <p className="text-[34px] font-bold text-white">
                250K+
              </p>

              <p className="text-[13px] text-white/50">
                Monthly Impressions
              </p>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= STATS ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20 grid grid-cols-4 gap-7"
      >

{[
  ["130K+", "Highest LinkedIn Reach", "On a single post"],
  ["250K+", "Monthly Impressions", "Across LinkedIn & Instagram"],
  ["17K+", "Comments Generated", "Organic engagement"],
  ["500+", "Founders & CEOs", "Worked with"],
].map(([number, title, subtitle], index) => (

          <div
            key={title}
            className="
            rounded-[28px]
            border
            border-white/10
            bg-[#141414]
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#D68A55]/40
            hover:bg-[#171717]
            "
          >

            <>
  {index === 0 && (
    <div className="mb-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2]">
        <FaLinkedinIn className="text-lg text-white" />
      </div>
    </div>
  )}

  {index === 1 && (
    <div className="mb-8 flex items-center gap-2">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2]">
        <FaLinkedinIn className="text-lg text-white" />
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
        <FaInstagram className="text-lg text-white" />
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <FaPlus className="text-[13px] text-white/60" />
      </div>

    </div>
  )}

  {index === 2 && (
    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#1A1A1A]">
  <FaComments className="text-[18px] text-[#D68A55]" />
</div>
  )}

  {index === 3 && (
    <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#1A1A1A]">
  <FaHandshake className="text-[18px] text-[#E7C86E]" />
</div>
  )}

  {index === 0 && (
  <p className="text-[58px] font-bold leading-none text-[#0A66C2]">
    {number}
  </p>
)}

{index === 1 && (
  <p
    className="
      text-[58px]
      font-bold
      leading-none
      bg-gradient-to-r
      from-[#F58529]
      via-[#DD2A7B]
      to-[#8134AF]
      bg-clip-text
      text-transparent
    "
  >
    250K<span className="text-[#0A66C2]">+</span>
  </p>
)}

{index === 2 && (
  <p className="text-[58px] font-bold leading-none text-[#D68A55]">
    {number}
  </p>
)}

{index === 3 && (
  <p className="text-[58px] font-bold leading-none text-[#E7C86E]">
    {number}
  </p>
)}
</>

            <p className="mt-5 text-[22px] font-semibold text-white">
              {title}
            </p>

            <p className="mt-2 text-[15px] text-white/40">
              {subtitle}
            </p>

          </div>

        ))}

      </motion.div>

    </section>
  );
}