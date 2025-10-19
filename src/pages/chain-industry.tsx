import { useState } from "react";
import {
  ARROW_LIGHT,
  EVENT,
  EVENT_2,
  EVENT_3,
  HERO_IMAGE_1,
  LINE_BAR,
  SHOW_1,
  SHOW_2,
  STRATEGY,
} from "../assets";
import MoreProjects from "../ui/more-projects";
import { motion } from "framer-motion";

function ChainIndustry() {
  const [activeView, setActiveView] = useState(1);
  return (
    <>
      <div className="w-full h-[70vh] sm:h-[80vh] xl:h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[23rem] px-5"
        >
          {/* Bottom-anchored gradient overlay for natural fade */}
          <div className="absolute inset-x-0 bottom-0 h-[100%] xl:h-[100%] sm:h-[70%] md:h-[70%] lg:h-[65%] bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-start gap-y-2 w-full">
            <div className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10 ">
              <span className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium">
                May 10th, 2025
              </span>
              <img
                src={LINE_BAR}
                className="h-[20px] sm:h-[26px] md:h-[28px] xl:h-[31.5px]"
                alt=""
              />
              <span className="text-[#FFFFFFB8] text-sm sm:text-base md:text-lg">
                BLOCKCHAIN EDUCATION
              </span>
            </div>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
              ChainDustry Blockchain Week 2025
            </span>
          </div>
        </motion.div>
        <motion.img
          src={HERO_IMAGE_1}
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
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7">
            In May 2025, ChainDustry marked a major milestone: 4 years in
            service and 30,000+ new users. To celebrate and to spotlight the
            ChainDustry Academy, the company planned ChainDustry Blockchain Week
            in Uyo, Nigeria, at a venue with capacity for over 2,000 attendees.
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7">
            I was part of the core organizing team, responsible for content
            marketing and event design, ensuring the celebration captured the
            brand’s innovative spirit
          </span>
          <div>
            <span>({"Details".toUpperCase()})</span>
            <div className="w-full flex flex-col gap-y-4">
              <div className="w-full flex items-center border-t pt-4 mt-3 justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Engagement
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium border-b border-[#111112]">
                  Chaindustry
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Type
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium ">
                  Event Campaign
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Category
                </span>
                <span className="text-sm md:text-base text-[#111112] font-medium ">
                  Web3
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
      <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] xl:h-[700px] px-4 sm:px-6 md:px-10 flex flex-col md:flex-row pb-12 md:pb-20 items-center justify-between gap-4">
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
            src={EVENT}
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
            src={EVENT_2}
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
              Motto Method® <br /> / Objectives
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-5 w-full xl:w-[60%] font-geist"
        >
          <span className="text-xl md:text-2xl font-medium text-black tracking-tight leading-7">
            Web3 Forward: Celebrating <br /> ChainDustry's Growth & Innovation
          </span>
          <ul className="list-disc list-inside text-base md:text-lg text-[#4D5153]">
            <li>Celebrate 4 years of ChainDustry’s growth.</li>
            <li>
              Highlight the ChainDustry Academy to new and existing users.
            </li>
            <li>
              Engage Nigeria’s blockchain community with a web3-forward event.
            </li>
          </ul>
          <div className="flex flex-col gap-y-2">
            <span className="text-xl md:text-2xl font-bold text-black">
              My Role:
            </span>
            <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7">
              I led content marketing and stage/environment design, working from
              concept through execution: Content Marketing
            </span>
            <ul className="list-disc list-inside text-base md:text-lg text-[#4D5153]">
              <li>
                Produced a series of promotional videos showcasing ChainDustry’s
                journey and the upcoming blockchain week.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xl md:text-2xl font-bold text-black">
              Event Design & Production
            </span>

            <ul className="list-disc list-inside text-base md:text-lg text-[#4D5153]">
              <li>
                Designed all event backdrops, ensuring strong brand visuals.
              </li>
              <li>
                Planned and executed stage setup with a focus on lighting to
                create a dynamic, camera-ready atmosphere.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[360px] sm:h-[500px] md:h-[560px] xl:h-[600px] px-4 sm:px-6 md:px-10 pb-12 md:pb-20">
        <motion.img
          src={EVENT_3}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <div className="w-full flex flex-col xl:flex-row items-start justify-between pb-12 md:pb-20 gap-6 xl:gap-x-10 px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-4 w-full xl:w-[90%]"
        >
          <span className="text-3xl md:text-4xl font-bold text-black">
            Strategy & Execution
          </span>
          <span className="text-xl md:text-2xl font-bold text-black">
            Creative Direction{" "}
          </span>
          <span className="text-base md:text-lg text-[#111112]">
            Crafted a visual identity aligned with ChainDustry’s brand—sleek
            blockchain-inspired graphics and vibrant, futuristic lighting
            schemes. <br /> Audience Engagement: Deployed teaser videos and
            content across X Twitter, TikTok, Instagram, and LinkedIn, tailored
            for Nigeria’s blockchain audience On-site Experience : Designed a
            stage layout optimized for keynote speeches, panel discussions, and
            live streaming.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-[300px] sm:h-[360px] md:h-[400px]"
        >
          <img
            src={STRATEGY}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
      <div className="px-4 sm:px-6 md:px-10 pb-12 md:pb-20 h-[360px] sm:h-[460px] md:h-[560px] xl:h-[600px] flex flex-col md:flex-row items-start justify-between gap-4 md:gap-7">
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={SHOW_1}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          src={SHOW_2}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
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
              Motto Method®
              <br />/ Execution
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-5 justify-end"
        >
          <span className="text-xl md:text-2xl font-medium text-black tracking-tight leading-7">
            Strategy & Execution
          </span>
          <div>
            <span className=" text-base md:text-lg text-[#4D5153]">
              2,300+ in-person attendees across the week.
            </span>
            <ul className="list-disc list-inside text-base md:text-lg text-[#4D5153]">
              <li className="leading-6">
                Over 80,000 online impressions from promotional videos and{" "}
                <br /> event highlights. 
              </li>
              <li className="leading-6">
                Social engagement up 60% during the three-week campaign <br />{" "}
                window.
              </li>
              <li>Positive feedback from speakers and participants</li>
            </ul>
          </div>
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

export default ChainIndustry;
