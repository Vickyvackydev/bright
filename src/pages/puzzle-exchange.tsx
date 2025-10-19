import { useState } from "react";
import MoreProjects from "../ui/more-projects";
import { motion } from "framer-motion";
import {
  ARROW_LIGHT,
  ARTIST,
  BRIGHT_1_PIC,
  COOL,
  GYM,
  INFLUENCER,
  LINE_BAR,
} from "../assets";

function PuzzleExchange() {
  const [activeView, setActiveView] = useState(1);
  return (
    <>
      <div className="w-full h-[70vh] sm:h-[80vh] xl:h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[26rem] px-5"
        >
          {/* Bottom-anchored gradient overlay for natural fade */}
          <div className="absolute inset-x-0 bottom-0 h-[100%] sm:h-[70%] md:h-[70%] lg:h-[65%] bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-start gap-y-2 w-full">
            <div className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10 ">
              {/* <span className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium">
                Oct 9, 2024
              </span> */}
              <img
                src={LINE_BAR}
                className="h-[20px] sm:h-[26px] md:h-[28px] xl:h-[31.5px]"
                alt=""
              />
              <span className="text-[#FFFFFFB8] text-sm sm:text-base md:text-lg">
                Fashion
              </span>
            </div>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
              Pvzzle Collection
            </span>
          </div>
        </motion.div>
        <motion.img
          src={BRIGHT_1_PIC}
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
      <div className="w-full px-4 sm:px-6 md:px-10 py-12 md:py-16 xl:py-20 flex flex-col xl:flex-row items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-6"
        >
          <div className="flex items-start flex-col gap-y-2">
            <span className="text-black text-xs font-medium">(01)</span>
            <span className="text-black font-medium">
              Bright Method® <br />/ Overview
            </span>
          </div>
          <button className="w-[130px] h-[44px] md:w-[147px] md:h-[49px] rounded-3xl bg-black pr-1 pl-4 flex items-center justify-between">
            <span className="text-white text-sm font-medium">Visit Site</span>
            <div className="w-[36px] h-[36px] md:w-[40.5px] md:h-[40.5px] rounded-full bg-[#29292B] flex items-center justify-center">
              <img src={ARROW_LIGHT} className="w-[16px] h-[16px]" alt="" />
            </div>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-5 w-full xl:w-[60%]"
        >
          <span className="text-xl md:text-2xl font-medium text-black tracking-tight leading-7">
            Overview
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            Puzzle set out to build stronger visibility within Nigeria’s vibrant
            tech ecosystem. Rather than a typical marketing campaign, i
            partnered with pvzzle collections to merge fashion and technology
            culture, using clothing as a conversation starter.
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            <span className="font-bold text-xl">The goal:</span> express
            Pvzzle’s identity and attract tech-savvy Nigerians through stylish,
            comfortable apparel.
          </span>
          <div>
            <span>({"Details".toUpperCase()})</span>
            <div className="w-full flex flex-col gap-y-4">
              <div className="w-full flex items-center border-t pt-4 mt-3 justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Engagement
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium border-b border-[#111112]">
                  FastTrack®
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Type
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium ">
                  Content/Influencer marketing
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Category
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium ">
                  Fvvashion
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Model
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium ">
                  B2B
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[800px] sm:h-[420px] md:h-[520px] xl:h-[700px] px-4 sm:px-6 md:px-10 flex flex-col md:flex-row pb-12 md:pb-20 items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${
            activeView === 1 ? "w-full" : "w-full md:w-[200px]"
          } h-1/2 md:h-full transition-all duration-700 ease-out`}
        >
          <img
            onMouseEnter={() => setActiveView(1)}
            src={INFLUENCER}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`${
            activeView === 2 ? "w-full" : "w-full md:w-[200px]"
          } h-1/2 md:h-full transition-all duration-700 ease-out`}
        >
          <img
            onMouseEnter={() => setActiveView(2)}
            src={ARTIST}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
      <div className="w-full px-4 sm:px-6 md:px-10 pb-12 md:pb-20 flex flex-col xl:flex-row items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-6"
        >
          <div className="flex items-start flex-col gap-y-2">
            <span className="text-black text-xs font-medium">(01)</span>
            <span className="text-black font-medium">
              Motto Method® <br />/ Challenge
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-5 px-5 w-full xl:w-[60%] font-geist"
        >
          <ul className="list-disc list-outside text-base md:text-lg space-y-3 text-[#4D5153]">
            <li>
              Standing Out in a Crowded Tech Space – Nigeria’s tech community is
              growing fast, with countless events, startups, and creators.
              Pvzzle needed a unique angle to stand apart.
            </li>
            <li>
              Cultural Relevance – The audience values authenticity; any
              outreach must feel organic, not purely promotional.
            </li>
            <li>
              Lifestyle Integration – We wanted Puzzle to be experienced, not
              just seen.
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="px-4 sm:px-6 md:px-10 pb-12 md:pb-20 h-[650px] sm:h-[460px] md:h-[560px] xl:h-[600px] flex flex-col md:flex-row items-start justify-between gap-4 md:gap-7">
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={GYM}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          src={COOL}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col xl:flex-row items-start justify-between pb-12 md:pb-20 gap-6 xl:gap-x-10 px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-4 w-full xl:w-[90%] font-geist"
        >
          <span className="text-3xl md:text-4xl font-bold text-black">
            Strategy & Execution
          </span>

          {/* Section 1 */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-medium text-[#575757]">
              Fashion as a Medium
            </span>
            <ul className="list-disc pl-6 text-base text-gray-800 space-y-4">
              <li>
                Selected Pvzzle gym wear, T-shirts, and hoodies for their clean,
                tech-friendly aesthetic.
              </li>
              <li>
                Incorporated a “techy vibe” in the styling—minimalist colors,
                versatile fits suitable for co-working spaces, hackathons, and
                weekend hangouts.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-medium text-[#575757]">
              Community Presence
            </span>
            <ul className="list-disc pl-6 text-base text-gray-800 space-y-4">
              <li>
                Wore and showcased Pvzzle outfits at tech/web3 meetups,
                blockchain events, and coworking hubs in Lagos, Akwa Ibom, Port
                Harcourt, and Abuja.
              </li>
              <li>
                Gifted select pieces to top voices in the Nigerian tech space.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-medium text-[#575757]">
              Content & Storytelling
            </span>
            <ul className="list-disc pl-6 text-base text-gray-800 space-y-4">
              <li>
                Produced photo and video content of me wearing the pieces while
                creating content, designing, and working out. (Add examples)
              </li>
            </ul>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-medium text-[#575757]">Results</span>
            <ul className="list-disc pl-6 text-base text-gray-800 space-y-4">
              <li>80% increase in Puzzle’s social media presence.</li>
              <li>
                Significant boost in brand recognition within Nigeria and
                outside Nigeria.
              </li>
            </ul>
          </div>

          {/* Additional Results Section */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl font-medium text-[#575757]">Results</span>
            <ul className="list-disc pl-6 text-base text-gray-800 space-y-4">
              <li>
                Lifestyle is the New Marketing: Wearing your message can speak
                louder than a press release.
              </li>
              <li>
                Authenticity Wins: Integrating Pvzzle into everyday tech life
                built trust and curiosity.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-[360px] sm:h-[500px] md:h-[600px] xl:h-[700px]"
        >
          <video
            src={"/leg.mp4"}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MoreProjects />
      </motion.div>
    </>
  );
}

export default PuzzleExchange;
