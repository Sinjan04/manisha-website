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
      className="relative overflow-hidden bg-[#0B0B0B] pt-10 pb-36"
    >
      <div className="mx-auto max-w-[1520px] px-10">

        {/* Section Label */}

        <p className="mb-6 text-[13px] uppercase tracking-[0.45em] text-[#C98A5C]">
          Services
        </p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[820px] text-[70px] font-bold leading-[1.02] tracking-[-0.05em]"
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
          className="mt-10 max-w-[620px] text-[20px] leading-9 text-white/55"
        >
          Every engagement is built around one objective—
          positioning you as the obvious choice in your industry
          through strategy, content and authority building.
        </motion.p>

        {/* Cards Container */}

        <div className="mt-16">

          <div className="grid grid-cols-2 gap-8">

            <motion.div
  whileHover={{
    y: -8,
    borderColor: "rgba(10,102,194,.35)",
    boxShadow: "0 30px 80px rgba(10,102,194,.12)",
  }}
  transition={{
    duration: .25,
  }}
  className="
  group
  relative
  overflow-hidden
  rounded-[36px]
  border
  border-white/10
  bg-[#131313]
  p-9
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
  absolute
  inset-0
  bg-gradient-to-br
  from-white/[0.02]
  via-transparent
  to-transparent
  pointer-events-none
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
  h-14
  w-14
  items-center
  justify-center
  rounded-2xl
  border
  border-[#0A66C2]/15
  bg-[#0A66C2]/15
  text-[#0A66C2]
  "
>
  <FaLinkedinIn className="text-[22px]" />
</motion.div>

    <motion.p
  whileHover={{
    scale: 1.08,
    opacity: 0.09,
  }}
  transition={{
    duration: .3,
  }}
  className="text-[82px] font-bold leading-none text-white/[0.04]"
>
      01
    </motion.p>

  </div>

  {/* Title */}

  <h3 className="mt-9 text-[32px] font-semibold leading-tight text-white">

    LinkedIn Profile
    <br />
    Optimization

  </h3>

  {/* Description */}

  <p className="mt-6 text-[17px] leading-8 text-white/55">
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

  <div className="mt-8 flex flex-wrap gap-3">

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
        px-4
        py-2
        text-[13px]
        text-white/60
        transition-all
        duration-300
        group-hover:border-[#0A66C2]/20
        group-hover:bg-[#0A66C2]/10
        "
      >

        <FaCircleCheck className="text-[11px] text-[#0A66C2]" />

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
      duration: .35,
    }}
    className="
    mt-10
    h-px
    bg-gradient-to-r
    from-[#0A66C2]
    to-transparent
    "
  />

  {/* CTA */}

  <Link
  href="/services/linkedin-strategy"
  className="
  mt-7
  inline-flex
  items-center
  gap-2
  font-medium
  text-[#0A66C2]
  transition-all
  duration-300
  hover:translate-x-1
  "
>
  Learn More

  <FaArrowRight />
</Link>

</motion.div>

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
  rounded-[36px]
  border
  border-white/10
  bg-[#131313]
  p-9
  "
>

  {/* Orange Glow */}

  <div
    className="
    absolute
    -left-20
    -bottom-20
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
    absolute
    inset-0
    bg-gradient-to-br
    from-white/[0.02]
    via-transparent
    to-transparent
    pointer-events-none
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
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      border
      border-[#D68A55]/15
      bg-[#D68A55]/15
      text-[#D68A55]
      "
    >
      <FaPenNib className="text-[20px]" />
    </motion.div>

    <motion.p
      whileHover={{
        scale: 1.08,
        opacity: 0.08,
      }}
      className="text-[82px] font-bold leading-none text-white/[0.04]"
    >
      02
    </motion.p>

  </div>

  {/* Title */}

  <h3 className="mt-9 text-[32px] font-semibold leading-tight text-white">

    Content Strategy
    <br />
    & Ghostwriting

  </h3>

  {/* Description */}

  <p className="mt-6 text-[17px] leading-8 text-white/55">
  Consistency doesn't build authority. Strategic content does.

  <br />
  <br />

  Every post is researched, written and optimized around your
  expertise using the same content framework that has generated
  <span className="font-semibold text-[#D68A55]"> 130K+ impressions on a single LinkedIn post </span>
  and
  <span className="font-semibold text-[#D68A55]"> 250K+ monthly impressions </span>
  across LinkedIn and Instagram.

  <br />
  <br />

  Instead of wondering what to post next, you'll have a content
  engine that consistently builds visibility, trust and inbound
  opportunities.
</p>

  {/* Tags */}

  <div className="mt-8 flex flex-wrap gap-3">

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
        px-4
        py-2
        text-[13px]
        text-white/60
        transition-all
        duration-300
        group-hover:border-[#D68A55]/20
        group-hover:bg-[#D68A55]/10
        "
      >

        <FaCircleCheck className="text-[11px] text-[#D68A55]" />

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
    mt-10
    h-px
    bg-gradient-to-r
    from-[#D68A55]
    to-transparent
    "
  />

  {/* CTA */}

  <button
    className="
    mt-7
    flex
    items-center
    gap-2
    font-medium
    text-[#D68A55]
    "
  >

    Explore Strategy

    <motion.div whileHover={{ x: 5 }}>
      <FaArrowRight />
    </motion.div>

  </button>

</motion.div>
          </div>

          <motion.div
  whileHover={{
    y: -8,
    borderColor: "rgba(236,185,82,.35)",
    boxShadow: "0 40px 100px rgba(236,185,82,.12)",
  }}
  transition={{ duration: .25 }}
  className="
  group
  relative
  mt-8
  overflow-hidden
  rounded-[36px]
  border
  border-white/10
  bg-[#131313]
  p-10
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

  <div className="relative flex justify-between">

    {/* LEFT */}

    <div className="max-w-[760px]">

      <div
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-[#ECB952]/15
        bg-[#ECB952]/12
        text-[#ECB952]
        "
      >
        <FaChessKing className="text-[26px]" />
      </div>

      <h3 className="mt-8 text-[42px] font-semibold leading-tight text-white">

        Executive Brand
        <br />
        Positioning

      </h3>

      <p className="mt-6 max-w-[680px] text-[18px] leading-8 text-white/55">
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

      <div className="mt-8 flex flex-wrap gap-3">

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
            px-4
            py-2
            text-[13px]
            text-white/60
            transition-all
            duration-300
            group-hover:border-[#ECB952]/20
            group-hover:bg-[#ECB952]/10
            "
          >

            <FaCircleCheck className="text-[11px] text-[#ECB952]" />

            {tag}

          </div>

        ))}

      </div>

      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: .35 }}
        className="
        mt-10
        h-px
        bg-gradient-to-r
        from-[#ECB952]
        to-transparent
        "
      />

      <button
        className="
        mt-7
        flex
        items-center
        gap-2
        font-medium
        text-[#ECB952]
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
        opacity: .08,
      }}
      className="
      text-[190px]
      font-bold
      leading-none
      text-white/[0.03]
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