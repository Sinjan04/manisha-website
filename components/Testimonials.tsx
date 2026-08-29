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
      px-5
      py-24
      sm:px-6
      sm:py-32
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
        h-[400px]
        w-[400px]
        rounded-full
        bg-[#D68A55]/[0.035]
        blur-[130px]
        md:h-[500px]
        md:w-[500px]
        md:blur-[150px]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        bottom-0
        h-[350px]
        w-[350px]
        rounded-full
        bg-white/[0.018]
        blur-[120px]
        md:h-[450px]
        md:w-[450px]
        md:blur-[140px]
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

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D68A55] sm:text-[13px] sm:tracking-[0.35em]">
            Testimonials
          </p>

          <h2
            className="
            mt-5
            max-w-[900px]
            text-[43px]
            font-bold
            leading-[0.98]
            tracking-[-0.05em]
            text-white
            sm:text-[58px]
            md:mt-6
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
            mt-7
            max-w-[680px]
            text-[16px]
            leading-7
            text-white/50
            sm:mt-10
            sm:text-[19px]
            sm:leading-8
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

        <div className="mt-14 grid gap-6 sm:mt-20 sm:gap-8 md:mt-24 md:grid-cols-2">

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
                rounded-[22px]
                border
                border-white/10
                bg-[#111111]
                p-1.5
                transition-all
                duration-500
                group-hover:-translate-y-2
                group-hover:border-[#D68A55]/30
                group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                sm:rounded-[28px]
                sm:p-2
                "
              >

                {/* Image */}

                <div
                  className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  rounded-[17px]
                  bg-[#161616]
                  sm:rounded-[21px]
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
                    p-2
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.015]
                    sm:p-3
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

              <div className="mt-4 flex items-center justify-between px-1.5 sm:mt-5 sm:px-2">

                <p className="text-[9px] uppercase tracking-[0.24em] text-white/25 sm:text-[11px] sm:tracking-[0.28em]">
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
          mt-20
          border-t
          border-white/10
          pt-8
          sm:mt-28
          sm:pt-10
          "
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.26em] text-white/25 sm:text-[12px] sm:tracking-[0.3em]">
                The difference
              </p>

              <h3
                className="
                mt-3
                max-w-[700px]
                text-[28px]
                font-semibold
                leading-tight
                tracking-[-0.035em]
                text-white
                sm:mt-4
                sm:text-[32px]
                md:text-[42px]
                "
              >
                Strategy first.
                <br />
                Results that follow.
              </h3>

            </div>

            <p className="max-w-[390px] text-[14px] leading-6 text-white/35 sm:text-[15px] sm:leading-7 md:text-right">
              Every personal brand is different. The strategy is
              built around your voice, your expertise and the people
              you actually want to reach.
            </p>

          </div>

        </motion.div>

      </div>

      {/* Fullscreen testimonial viewer */}

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
              p-3
              backdrop-blur-xl
              sm:p-6
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
                right-4
                top-4
                z-[110]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                text-[23px]
                font-light
                text-white/70
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:border-white/20
                hover:bg-white/[0.12]
                hover:text-white
                sm:right-6
                sm:top-6
                sm:h-11
                sm:w-11
                sm:text-[25px]
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
                rounded-[18px]
                border
                border-white/10
                bg-[#111111]
                p-1.5
                shadow-[0_30px_120px_rgba(0,0,0,0.6)]
                sm:rounded-[24px]
                sm:p-2
              "
              onClick={(event) => event.stopPropagation()}
            >

              <Image
                src={selectedImage}
                alt="Enlarged client testimonial"
                width={1800}
                height={1200}
                className="
                  max-h-[82vh]
                  w-auto
                  max-w-full
                  rounded-[14px]
                  object-contain
                  sm:max-h-[86vh]
                  sm:rounded-[18px]
                "
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}