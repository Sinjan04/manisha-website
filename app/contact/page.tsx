"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    window.location.href = "https://topmate.io/manisha13";
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      {/* Main content */}

      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 md:px-10 md:pb-32 md:pt-48">

        {/* Ambient light */}

        <div
          className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D68A55]/[0.035]
          blur-[130px]
          md:h-[500px]
          md:w-[700px]
          md:blur-[150px]
          "
        />

        <div className="relative mx-auto max-w-[1100px]">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-6 bg-[#D68A55] sm:w-8" />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D68A55] sm:text-xs sm:tracking-[0.25em]">
                Discovery Call
              </p>

            </div>

            <h1
              className="
              mt-6
              max-w-[850px]
              text-[43px]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-white
              sm:text-[52px]
              md:mt-7
              md:text-[76px]
              "
            >
              Let's start with
              <br />
              <span className="text-white/35 italic">
                where you are.
              </span>
            </h1>

            <p
              className="
              mt-7
              max-w-[620px]
              text-[15px]
              leading-7
              text-white/55
              sm:text-[17px]
              sm:leading-8
              md:mt-8
              md:text-[19px]
              "
            >
              Tell us a little about yourself, what you're working
              towards and where you need help. Once you've submitted
              your details, you'll be taken to the booking page to
              choose a time that works for you.
            </p>

          </motion.div>

          {/* Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 sm:mt-16 md:mt-20"
          >

            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-10">

              {/* Name */}

              <div className="group">

                <label
                  htmlFor="name"
                  className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                  "
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="
                  mt-3
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-3
                  text-[16px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  sm:mt-4
                  sm:pb-4
                  sm:text-[18px]
                  "
                />

              </div>

              {/* Email */}

              <div className="group">

                <label
                  htmlFor="email"
                  className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="
                  mt-3
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-3
                  text-[16px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  sm:mt-4
                  sm:pb-4
                  sm:text-[18px]
                  "
                />

              </div>

              {/* Phone */}

              <div className="group">

                <label
                  htmlFor="phone"
                  className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                  "
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91"
                  className="
                  mt-3
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-3
                  text-[16px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  sm:mt-4
                  sm:pb-4
                  sm:text-[18px]
                  "
                />

              </div>

              {/* Organization / Personal Brand */}

              <div className="group">

                <label
                  htmlFor="business"
                  className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                  "
                >
                  Organization / Personal Brand

                  <span className="ml-2 normal-case tracking-normal text-white/25">
                    Optional
                  </span>
                </label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Your company or personal brand"
                  className="
                  mt-3
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-3
                  text-[16px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  sm:mt-4
                  sm:pb-4
                  sm:text-[18px]
                  "
                />

              </div>

              {/* Title / Role */}

              <div className="group">

                <label
                  htmlFor="title"
                  className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/55
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                  "
                >
                  Title / Role

                  <span className="ml-2 normal-case tracking-normal text-white/25">
                    Optional
                  </span>
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Founder, CEO, Creator..."
                  className="
                  mt-3
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-3
                  text-[16px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  sm:mt-4
                  sm:pb-4
                  sm:text-[18px]
                  "
                />

              </div>

            </div>

            {/* What they need */}

            <div className="mt-10 sm:mt-12">

              <label
                htmlFor="message"
                className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white/55
                sm:text-[11px]
                sm:tracking-[0.25em]
                "
              >
                What would you like help with?
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us a little about what you're looking to build..."
                className="
                mt-3
                w-full
                resize-none
                border-b
                border-white/15
                bg-transparent
                pb-3
                text-[16px]
                leading-7
                text-white
                outline-none
                placeholder:text-white/20
                transition-colors
                duration-300
                focus:border-[#D68A55]
                sm:mt-4
                sm:pb-4
                sm:text-[18px]
                sm:leading-8
                "
              />

            </div>

            {/* Submit */}

            <div className="mt-10 flex flex-col items-start gap-6 sm:mt-12 sm:gap-5 md:flex-row md:items-center md:justify-between">

              <p className="max-w-[420px] text-[12px] leading-5 text-white/30 sm:text-[13px] sm:leading-6">
                After submitting, you'll be taken to the booking page
                where you can choose a date and time for your call.
              </p>

              <button
                type="submit"
                className="
                group
                relative
                inline-flex
                h-12
                w-full
                shrink-0
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-[#F7F5F2]
                px-8
                text-sm
                font-semibold
                text-black
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:border-white/30
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                sm:w-auto
                "
              >

                <span className="relative z-10 text-black">
                  Continue to Booking
                </span>

                <span
                  className="
                  relative
                  z-10
                  text-black
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                >
                  →
                </span>

                <span
                  className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-full
                  w-1/2
                  skew-x-[-20deg]
                  bg-white/40
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                  "
                />

              </button>

            </div>

          </motion.form>

          {/* Direct contact */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            sm:mt-20
            sm:gap-6
            sm:pt-8
            md:mt-24
            md:flex-row
            md:items-center
            md:justify-between
            "
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-[11px] sm:tracking-[0.25em]">
              Prefer to reach out directly?
            </p>

            <div className="flex flex-col gap-2 text-[13px] sm:gap-3 sm:text-sm md:flex-row md:gap-8">

              <a
                href="tel:+918944890465"
                className="text-white/60 transition-colors duration-300 hover:text-[#D68A55]"
              >
                +91 8944890465
              </a>

              <a
                href="mailto:manishamandal@gmail.com"
                className="text-white/60 transition-colors duration-300 hover:text-[#D68A55]"
              >
                manishamandal@gmail.com
              </a>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}