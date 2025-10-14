import { BUTTON, JOHNSON, QUOTE, STAR_ICON } from "../assets";
import { motion } from "framer-motion";

function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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

        {/* Testimonial Content */}
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
              <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full bg-[#F6F6F6] hover:bg-[#EDEDED] transition-all">
                <img src={BUTTON} className="w-[7.13px] h-[12.97px]" alt="" />
              </button>
              <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-full bg-[#F6F6F6] hover:bg-[#EDEDED] transition-all">
                <img
                  src={BUTTON}
                  className="w-[7.13px] h-[12.97px] scale-x-[-1]"
                  alt=""
                />
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full flex flex-col md:flex-row lg:flex-row items-start gap-x-3"
          >
            <img
              src={QUOTE}
              className="w-[50px] md:w-[69px] h-auto md:h-[57px]"
              alt=""
            />
            <div className="flex flex-col gap-y-6">
              <span className="text-[#111112] font-medium tracking-tighter leading-tight text-4xl md:text-6xl lg:text-7xl">
                The promotions turned out amazing. He captured the moment
                without feeling staged or forced.
              </span>
              <span className="text-[#11111299] tracking-tighter leading-8 font-medium text-base md:text-[22px] lg:text-[26px]">
                Every image brings back the emotions of the day, and I couldn’t
                be happier with how they came out.
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
                      5.0 <span className="text-[#11111299]">/ 5</span>
                    </span>
                    <img src={STAR_ICON} alt="" />
                  </div>
                  <span className="text-[#11111266] font-semibold text-xs">
                    Boris Johnson
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-col items-center mt-20 gap-y-2 text-center"
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
