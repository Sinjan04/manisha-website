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
      className="mx-auto max-w-[1520px] px-5 pt-6 pb-16 md:px-10 md:pt-10 md:pb-24"
    >
      {/* ================= TOP ================= */}

      <div className="flex flex-col items-start justify-between gap-14 md:flex-row md:gap-0">

        {/* LEFT */}

        <motion.div
          className="w-full max-w-[640px]"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.32em] text-[#C98A5C] md:mb-8 md:text-[14px] md:tracking-[0.42em]">
            Personal Branding Strategist
          </p>

          <h1 className="leading-[0.9] font-bold tracking-[-0.07em]">
            <span className="block text-[58px] text-[#F6F3EF] sm:text-[72px] md:text-[102px]">
              Position.
            </span>

            <span className="block text-[58px] text-[#454545] sm:text-[72px] md:text-[102px]">
              Influence.
            </span>

            <span className="block text-[58px] text-[#F6F3EF] sm:text-[72px] md:text-[102px]">
              Scale.
            </span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[16px] leading-[1.7] font-light text-[#8E8E8E] md:mt-10 md:text-[20px] md:leading-[1.8]">
            Your expertise is valuable. Most people just can't find it.
            I help Founders, CEOs and Consultants build a LinkedIn
            presence that turns visibility into opportunity.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-5 md:mt-14">

            <Link
              href="/contact"
              className="
              group
              w-full
              rounded-full
              bg-white
              px-7
              py-4
              text-center
              font-semibold
              !text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(255,255,255,0.18)]
              sm:w-auto
              sm:px-9
              sm:py-5
              "
            >
              <span className="flex items-center justify-center gap-2">
                Book Discovery Call
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

            <Link
              href="/services/linkedin-strategy"
              className="
              group
              w-full
              rounded-full
              border
              border-white/15
              px-7
              py-4
              text-center
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#D68A55]/50
              hover:bg-white/5
              sm:w-auto
              sm:px-9
              sm:py-5
              "
            >
              <span className="flex items-center justify-center gap-2">
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
          h-[520px]
          w-full
          overflow-hidden
          rounded-tl-[100px]
          rounded-tr-[30px]
          rounded-br-[30px]
          rounded-bl-[30px]
          border
          border-white/10
          bg-[#171717]
          sm:h-[620px]
          sm:max-w-[480px]
          md:h-[720px]
          md:w-[540px]
          md:max-w-none
          md:rounded-tl-[180px]
          md:rounded-tr-[40px]
          md:rounded-br-[40px]
          md:rounded-bl-[40px]
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
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#D6844A]
            blur-[100px]
            md:h-[420px]
            md:w-[420px]
            md:blur-[120px]
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
            left-3
            bottom-6
            flex
            items-center
            gap-3
            rounded-[20px]
            bg-[#171717]/90
            px-4
            py-3
            backdrop-blur-xl
            sm:left-4
            sm:bottom-8
            sm:gap-4
            sm:rounded-[24px]
            sm:px-5
            sm:py-4
            md:bottom-10
            "
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] sm:h-12 sm:w-12">
              <FaLinkedinIn className="text-lg text-white sm:text-xl" />
            </div>

            <div>

              <p className="text-[26px] font-bold text-white sm:text-[34px]">
                130K+
              </p>

              <p className="text-[11px] text-white/50 sm:text-[13px]">
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
            right-3
            top-5
            flex
            items-center
            gap-3
            rounded-[20px]
            bg-[#171717]/90
            px-4
            py-3
            backdrop-blur-xl
            sm:right-5
            sm:top-8
            sm:gap-4
            sm:rounded-[24px]
            sm:px-5
            sm:py-4
            "
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] sm:h-12 sm:w-12">
              <FaInstagram className="text-lg text-white sm:text-xl" />
            </div>

            <div>

              <p className="text-[26px] font-bold text-white sm:text-[34px]">
                250K+
              </p>

              <p className="text-[11px] text-white/50 sm:text-[13px]">
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
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-7"
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
            rounded-[22px]
            border
            border-white/10
            bg-[#141414]
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#D68A55]/40
            hover:bg-[#171717]
            sm:p-7
            md:rounded-[28px]
            md:p-8
            "
          >

            <>
              {index === 0 && (
                <div className="mb-6 md:mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] md:h-11 md:w-11">
                    <FaLinkedinIn className="text-base text-white md:text-lg" />
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="mb-6 flex items-center gap-2 md:mb-8">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] md:h-11 md:w-11">
                    <FaLinkedinIn className="text-base text-white md:text-lg" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] md:h-11 md:w-11">
                    <FaInstagram className="text-base text-white md:text-lg" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:h-11 md:w-11">
                    <FaPlus className="text-[11px] text-white/60 md:text-[13px]" />
                  </div>

                </div>
              )}

              {index === 2 && (
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#1A1A1A] md:mb-8 md:h-11 md:w-11">
                  <FaComments className="text-base text-[#D68A55] md:text-[18px]" />
                </div>
              )}

              {index === 3 && (
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#1A1A1A] md:mb-8 md:h-11 md:w-11">
                  <FaHandshake className="text-base text-[#E7C86E] md:text-[18px]" />
                </div>
              )}

              {index === 0 && (
                <p className="text-[44px] font-bold leading-none text-[#0A66C2] sm:text-[50px] md:text-[58px]">
                  {number}
                </p>
              )}

              {index === 1 && (
                <p
                  className="
                    text-[44px]
                    font-bold
                    leading-none
                    bg-gradient-to-r
                    from-[#F58529]
                    via-[#DD2A7B]
                    to-[#8134AF]
                    bg-clip-text
                    text-transparent
                    sm:text-[50px]
                    md:text-[58px]
                  "
                >
                  250K<span className="text-[#0A66C2]">+</span>
                </p>
              )}

              {index === 2 && (
                <p className="text-[44px] font-bold leading-none text-[#D68A55] sm:text-[50px] md:text-[58px]">
                  {number}
                </p>
              )}

              {index === 3 && (
                <p className="text-[44px] font-bold leading-none text-[#E7C86E] sm:text-[50px] md:text-[58px]">
                  {number}
                </p>
              )}
            </>

            <p className="mt-4 text-[18px] font-semibold text-white sm:text-[20px] md:mt-5 md:text-[22px]">
              {title}
            </p>

            <p className="mt-2 text-[13px] text-white/40 sm:text-[14px] md:text-[15px]">
              {subtitle}
            </p>

          </div>

        ))}

      </motion.div>

    </section>
  );
}