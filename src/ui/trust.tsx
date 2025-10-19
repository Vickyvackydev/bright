import {
  ANIMATION,
  ARROW_LIGHT,
  BRIGHT_7_PIC,
  BRIGHT_MIC,
  BRIGHTY,
  BRIGHTY_2,
  CLOCK,
  GROUP,
  GROUP_PHOTOS,
  TEXTING,
} from "../assets";
import { motion } from "framer-motion";

function Trust() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-5 w-full px-4 md:px-6 lg:px-10 py-16">
      {/* Title Section */}
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#111112] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tighter text-center font-medium"
      >
        Why Projects Trust <br /> Bright’s Presence
      </motion.span>

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg text-[#11111299] tracking-tighter leading-6 sm:leading-[20px] text-center font-medium max-w-3xl"
      >
        Because in the noisy world of crypto, he doesn’t just speak — he
        connects, <br className="hidden sm:block" /> engages, and inspires
        communities that last.
      </motion.span>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full max-w-7xl mx-auto mt-10">
        {/* First Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="relative h-[300px] sm:h-[400px] md:h-[503px]">
            <img
              src={BRIGHT_MIC}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <button className="absolute bottom-6 sm:bottom-11 left-4 sm:left-5 z-20 text-base sm:text-lg text-white flex items-center gap-2">
              <span>Check my instagram</span>
              <img
                src={ARROW_LIGHT}
                className="w-[14px] sm:w-[16px] h-[14px] sm:h-[16px]"
                alt=""
              />
            </button>
          </div>

          <div className="bg-[#88888833] p-5 sm:p-7 rounded-2xl flex flex-col items-start">
            <img
              src={GROUP_PHOTOS}
              className="w-[180px] sm:w-[229px] h-auto"
              alt=""
            />
            <div className="flex items-start gap-x-2 mt-4">
              <span className="text-[#111112] text-3xl sm:text-4xl font-medium">
                50+
              </span>
              <span className="text-[#11111299] font-medium text-xs sm:text-sm">
                projects and collaborations across the decentralized space.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Second Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="relative h-[280px] sm:h-[340px]">
            <img
              src={BRIGHTY}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <div
              className="absolute w-full h-full rounded-2xl inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
              }}
            ></div>
            <motion.img
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              src={ANIMATION}
              className="absolute top-6 sm:top-10 w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] left-1/2 transform -translate-x-1/2"
              alt=""
            />
            <span className="absolute bottom-0 left-0 right-0 z-20 text-white font-medium text-lg sm:text-[26px] text-center p-4 sm:p-6 tracking-tighter leading-6 sm:leading-[30px]">
              Engaging content and creative <br /> design that turn blockchain
              ideas <br /> into culture.
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[280px] sm:h-[340px]"
          >
            <img
              src={GROUP}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </motion.div>
        </motion.div>

        {/* Third Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="w-full h-auto grid grid-cols-2 gap-2">
            <div className="bg-[#E7E7E7] p-6 sm:p-8 rounded-2xl flex items-start justify-center flex-col w-full">
              <div className="relative">
                <span className="text-[#111112] text-4xl sm:text-6xl font-medium">
                  30
                </span>
                <span className="absolute -top-1 sm:-top-2 ml-0.5 text-[#111112] text-xl sm:text-2xl font-medium">
                  %+
                </span>
              </div>
              <span className="text-[#11111299] text-xs sm:text-sm tracking-tighter">
                higher engagement rates for projects powered by Bright’s
                campaigns.
              </span>
            </div>
            <div className="w-full h-full">
              <img
                src={BRIGHTY_2}
                className="w-full h-full object-cover rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div className="w-full">
            <img
              src={TEXTING}
              className="w-full h-[180px] sm:h-[270px] object-cover rounded-2xl"
              alt=""
            />
            <div className="w-full h-full lg:h-[190px] xl:h-[190px] relative rounded-2xl mt-3 overflow-hidden">
              {/* Background Image */}
              <img
                src={BRIGHT_7_PIC}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
                alt=""
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 100%)",
                }}
              />

              {/* Text Overlay */}
              <div className="absolute flex flex-col items-start gap-y-1 inset-0 mt-16 z-20 px-6">
                <div className="flex items-center gap-x-2">
                  <img src={CLOCK} className="w-[19px] h-[19px]" alt="" />
                  <span className="text-white text-xl font-medium">
                    Quick, effective strategies
                  </span>
                </div>
                <span className="text-sm font-medium text-[#FFFFFFBF]">
                  turning crypto buzz into <br /> measurable growth.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Trust;
