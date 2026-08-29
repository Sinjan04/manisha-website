"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    image: "/images/testimonial-1.png",
    label: "Client Feedback",
  },
  {
    image: "/images/testimonial-2.png",
    label: "Client Feedback",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Testimonials() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section
      id="testimonials"
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      bg-[#0B0B0B]
      px-6
      py-32
      md:px-10
      md:py-40
      "
    >

      {/* Ambient lighting */}

      <div
        className="
        pointer-events-none
        absolute
        -left-40
        top-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#D68A55]/[0.035]
        blur-[150px]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        bottom-0
        h-[450px]
        w-[450px]
        rounded-full
        bg-white/[0.018]
        blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-[1380px]">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          variants={fadeUp}
        >

          <p className="text-[13px] uppercase tracking-[0.35em] text-[#D68A55]">
            Testimonials
          </p>

          <h2
            className="
            mt-6
            max-w-[900px]
            text-[58px]
            font-bold
            leading-[0.98]
            tracking-[-0.05em]
            text-white
            md:text-[78px]
            "
          >
            What clients say
            <br />
            <span className="text-white/30">
              when the work speaks.
            </span>
          </h2>

          <p
            className="
            mt-10
            max-w-[680px]
            text-[19px]
            leading-8
            text-white/50
            md:text-[21px]
            md:leading-9
            "
          >
            No polished marketing quotes. Just real conversations
            from people who experienced the work, the strategy and
            the results firsthand.
          </p>

        </motion.div>

        {/* Testimonial Grid */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={testimonial.image}
               onClick={() => setSelectedImage(testimonial.image)}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer"
            >

              <div
                className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#111111]
                p-2
                transition-all
                duration-500
                group-hover:-translate-y-2
                group-hover:border-[#D68A55]/30
                group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                "
              >

                {/* Image */}

                <div
  className="
  relative
  aspect-[16/10]
  overflow-hidden
  rounded-[21px]
  bg-[#161616]
  "
>

                  <Image
  src={testimonial.image}
  alt="Client testimonial conversation"
  width={1600}
  height={1000}
  className="
  h-full
  w-full
  object-contain
  p-3
  transition-transform
  duration-700
  ease-out
  group-hover:scale-[1.015]
  "
/>

                  {/* Subtle overlay */}

                  <div
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/[0.12]
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    "
                  />

                </div>

              </div>

              {/* Label */}

              <div className="mt-5 flex items-center justify-between px-2">

                <p className="text-[11px] uppercase tracking-[0.28em] text-white/25">
                  {testimonial.label}
                </p>

                <span
                  className="
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#D68A55]/60
                  transition-all
                  duration-300
                  group-hover:w-8
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

        {/* Closing statement */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
          mt-28
          border-t
          border-white/10
          pt-10
          "
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[12px] uppercase tracking-[0.3em] text-white/25">
                The difference
              </p>

              <h3
                className="
                mt-4
                max-w-[700px]
                text-[32px]
                font-semibold
                leading-tight
                tracking-[-0.035em]
                text-white
                md:text-[42px]
                "
              >
                Strategy first.
                <br />
                Results that follow.
              </h3>

            </div>

            <p className="max-w-[390px] text-[15px] leading-7 text-white/35 md:text-right">
              Every personal brand is different. The strategy is
              built around your voice, your expertise and the people
              you actually want to reach.
            </p>

          </div>

        </motion.div>

      </div>
<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/80
        p-6
        backdrop-blur-xl
        md:p-12
      "
      onClick={() => setSelectedImage(null)}
    >

      {/* Close Button */}

      <button
        type="button"
        onClick={() => setSelectedImage(null)}
        aria-label="Close testimonial"
        className="
          absolute
          right-6
          top-6
          z-[110]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.06]
          text-[25px]
          font-light
          text-white/70
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-105
          hover:border-white/20
          hover:bg-white/[0.12]
          hover:text-white
          md:right-10
          md:top-10
        "
      >
        ×
      </button>

      {/* Enlarged Image */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
          y: 15,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
        className="
          relative
          max-h-[90vh]
          max-w-[1200px]
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-[#111111]
          p-2
          shadow-[0_30px_120px_rgba(0,0,0,0.6)]
        "
        onClick={(event) => event.stopPropagation()}
      >

        <Image
          src={selectedImage}
          alt="Enlarged client testimonial"
          width={1800}
          height={1200}
          className="
            max-h-[86vh]
            w-auto
            max-w-full
            rounded-[18px]
            object-contain
          "
        />

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}