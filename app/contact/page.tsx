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

      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48">

        {/* Ambient light */}

        <div
          className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#D68A55]/[0.035]
          blur-[150px]
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

              <span className="h-px w-8 bg-[#D68A55]" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#D68A55]">
                Discovery Call
              </p>

            </div>

            <h1
              className="
              mt-7
              max-w-[850px]
              text-[52px]
              font-medium
              leading-[1]
              tracking-[-0.045em]
              text-white
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
              mt-8
              max-w-[620px]
              text-[17px]
              leading-8
              text-white/55
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
            className="mt-20"
          >

            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">

              {/* Name */}

              <div className="group">

                <label
                  htmlFor="name"
                  className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/55
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
                  mt-4
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-4
                  text-[18px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  "
                />

              </div>

              {/* Email */}

              <div className="group">

                <label
                  htmlFor="email"
                  className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/55
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
                  mt-4
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-4
                  text-[18px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  "
                />

              </div>

              {/* Phone */}

              <div className="group">

                <label
                  htmlFor="phone"
                  className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/55
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
                  mt-4
                  w-full
                  border-b
                  border-white/15
                  bg-transparent
                  pb-4
                  text-[18px]
                  text-white
                  outline-none
                  placeholder:text-white/20
                  transition-colors
                  duration-300
                  focus:border-[#D68A55]
                  "
                />

              </div>

              {/*  Organization / Personal Brand */}

              <div className="group">

  <label
  htmlFor="business"
  className="
  text-[11px]
  font-semibold
  uppercase
  tracking-[0.25em]
  text-white/55
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
    mt-4
    w-full
    border-b
    border-white/15
    bg-transparent
    pb-4
    text-[18px]
    text-white
    outline-none
    placeholder:text-white/20
    transition-colors
    duration-300
    focus:border-[#D68A55]
    "
  />

</div>
{/* Title / Role */}

<div className="group">

  <label
    htmlFor="title"
    className="
    text-[11px]
    font-semibold
    uppercase
    tracking-[0.25em]
    text-white/55
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
    mt-4
    w-full
    border-b
    border-white/15
    bg-transparent
    pb-4
    text-[18px]
    text-white
    outline-none
    placeholder:text-white/20
    transition-colors
    duration-300
    focus:border-[#D68A55]
    "
  />

</div>
            </div>

            {/* What they need */}

            <div className="mt-12">

              <label
                htmlFor="message"
                className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/55
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
                mt-4
                w-full
                resize-none
                border-b
                border-white/15
                bg-transparent
                pb-4
                text-[18px]
                leading-8
                text-white
                outline-none
                placeholder:text-white/20
                transition-colors
                duration-300
                focus:border-[#D68A55]
                "
              />

            </div>

            {/* Submit */}

            <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-[420px] text-[13px] leading-6 text-white/30">
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
            mt-24
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
            "
          >

            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Prefer to reach out directly?
            </p>

            <div className="flex flex-col gap-3 text-sm md:flex-row md:gap-8">

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