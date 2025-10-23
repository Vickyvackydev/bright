import { useState } from "react";
import { BUTTON, JOHNSON, QUOTE } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const testimonies = [
  {
    name: "Simon",
    role: "Co founder Myosin",
    heading: "Bright is an expert events organizer & content creator.",
    content:
      "He has great instincts for social media and is a great art director for staging photos for marketing and promotion purposes. He also brings a very positive vibe and energy about him, which was a pleasure to work with.",
  },
  {
    name: "Oskar",
    role: "Growth BD BINGX",
    heading: "Working with Bright was smooth and professional.",
    content:
      "His strategic approach and dedication helped us execute our campaigns effectively and reach impressive results. Highly recommended.",
  },
];

function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonies.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonies.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full px-5 md:px-10 py-20 bg-white overflow-hidden">
      <div className="border-t-2 border-[#111112] flex flex-col">
        {/* Section Label */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-sm font-semibold text-[#111112] mt-3"
        >
          Testimonials
        </motion.span>

        <div className="flex flex-col lg:flex-row items-start justify-between mt-10 gap-10 lg:gap-16">
          {/* Left Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-10 max-w-lg"
          >
            <span className="text-[22px] md:text-[26px] text-[#11111299] font-medium tracking-tighter leading-[30px]">
              Here’s what people have to say about working together. Real
              moments, real experiences, real feedback.
            </span>

            <div className="flex items-center gap-x-4 md:gap-x-5">
              <button
                onClick={handlePrev}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full bg-[#F6F6F6] hover:bg-[#EDEDED] transition-all"
              >
                <img src={BUTTON} className="w-[7.13px] h-[12.97px]" alt="" />
              </button>
              <button
                onClick={handleNext}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full bg-[#F6F6F6] hover:bg-[#EDEDED] transition-all"
              >
                <img
                  src={BUTTON}
                  className="w-[7.13px] h-[12.97px] scale-x-[-1]"
                  alt=""
                />
              </button>
            </div>
          </motion.div>

          {/* Right Column with animation */}
          <div className="relative w-full flex flex-col md:flex-row lg:flex-row items-start gap-x-3 min-h-[300px]">
            <img
              src={QUOTE}
              className="w-[50px] md:w-[69px] h-auto md:h-[57px]"
              alt=""
            />

            <div className="relative w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute top-0 left-0 w-full flex flex-col gap-y-6"
                >
                  <span className="text-[#111112] font-medium tracking-tighter leading-tight text-4xl md:text-6xl lg:text-7xl">
                    {testimonies[currentIndex].heading}
                  </span>
                  <span className="text-[#11111299] tracking-tighter leading-8 font-medium text-base md:text-[22px] lg:text-[26px]">
                    {testimonies[currentIndex].content}
                  </span>

                  <div className="flex items-center gap-x-3">
                    <img
                      src={JOHNSON}
                      className="w-[48px] h-[48px] md:w-[58px] md:h-[58px] rounded-full object-cover"
                      alt=""
                    />
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-x-1">
                        <span className="text-[#111112] font-semibold text-xs">
                          {testimonies[currentIndex].name}
                        </span>
                      </div>
                      <span className="text-[#11111266] font-semibold text-xs">
                        {testimonies[currentIndex].role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-col items-center mt-64 gap-y-2 text-center"
        >
          <span className="text-black text-sm md:text-[14.75px] font-medium">
            Team
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-medium text-black leading-tight px-4">
            Book a call to{" "}
            <span className="font-instrument-serif italic">Unlock</span> your
            potential.
          </span>
          <span className="text-base md:text-lg font-medium text-[#0A0A0A] text-center">
            Schedule a call to explore how I can help <br /> you achieve
            incredible results
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0A0A] text-sm px-6 py-3 md:px-8 md:py-3 rounded-lg text-white mt-4 shadow-[0px-0px-0px-1px-#FF45331F] backdrop-blur-[10px]"
          >
            Book a free call
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
