import { useState } from "react";
import MoreProjects from "../ui/more-projects";
import {
  ARROW_LIGHT,
  BRAND_BANNER,
  BRAND_STAND,
  CHINA_1,
  CHINA_2,
  CHINA_3,
  HERO_IMAGE_5,
  LINE_BAR,
} from "../assets";
import { motion } from "framer-motion";

function InfinityExchange() {
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
              <span className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img
                src={LINE_BAR}
                className="h-[20px] sm:h-[26px] md:h-[28px] xl:h-[31.5px]"
                alt=""
              />
              <span className="text-[#FFFFFFB8] text-sm sm:text-base md:text-lg">
                crypto . trading
              </span>
            </div>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
              Infinity Exchange
            </span>
          </div>
        </motion.div>
        <motion.img
          src={HERO_IMAGE_5}
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
            Infinity Exchange wanted to grow its reach across multiple
            regions—from Asia to Africa—while building a strong, trusted
            community.
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            I joined as Global Ambassador, representing the brand in countries
            including Singapore, Malaysia, Korea, and Vietnam, and also led the
            Nigeria Ambassador team.
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            My role was to put Infinity Exchange on the map: promote the
            platform, host and attend events, and drive engagement across social
            channels through consistent, community-first content.
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
                  Marketing
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Category
                </span>
                <span className="text-sm text-wrap text-end md:text-base text-[#111112] font-medium ">
                  DeFi • Web3 • Gltobal Community Growth • RWA
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
            src={CHINA_1}
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
            src={CHINA_2}
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
          className="flex flex-col px-5 gap-y-5 w-full xl:w-[60%] font-geist"
        >
          <ul className="list-disc list-outside space-y-2 text-base md:text-lg text-[#4D5153]">
            <li>
              Truly Global Reach - Infinity needed a presence across very
              different markets and cultures
            </li>
            <li>
              Education First - DeFi can be complex; content had to be clear and
              welcoming for both new and experienced users.
            </li>
            <li>
              Consistent Brand Voice - With so many regions involved, we had to
              keep messaging unified while still local.
            </li>
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-2xl md:text-3xl font-medium text-black">
              What I Did
            </span>
            <div className="flex items-start flex-col gap-y-3 mt-5">
              <li className="list-disc font-medium tracking-tight text-[#484848] text-[23px]">
                On-the-Ground Representation
              </li>
              <span className="text-[#696969] font-medium">
                I attended and spoke at events in Nigeria, Malaysia, Korea, and
                Vietnam, sharing Infinity Exchange’s vision and connecting with
                local crypto communities.
              </span>
              <li className="list-disc font-medium tracking-tight text-[#484848] text-[23px]">
                Africa & Nigeria Leadership
              </li>
              <span className="text-[#696969] font-medium ">
                As Ambassador Lead for Nigeria, I organized meetups and
                workshops that introduced Infinity Exchange to African traders,
                builders, and investors.
              </span>
              <li className="list-disc font-medium tracking-tight text-[#484848] text-[23px]">
                Content & Engagement
              </li>
              <span className="text-[#696969] font-medium">
                I created social content—updates, explainers, and event
                highlights—that kept Infinity’s community active and informed
                across multiple time zones.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 pb-12 md:pb-20 h-[360px] sm:h-[460px] md:h-[560px] xl:h-[600px] flex flex-col md:flex-row items-start justify-between gap-4 md:gap-7">
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={CHINA_3}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          src={BRAND_BANNER}
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
          className="flex flex-col gap-y-4 w-full xl:w-[90%]"
        >
          {/* Section 1 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-2xl md:text-3xl font-medium text-black">
              Results
            </span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-3 md:space-y-4 text-base md:text-lg">
              <li>
                Built strong brand visibility for Infinity Exchange in Asia and
                Africa, with lasting connections in each region.
              </li>
              <li>
                Boosted engagement on Infinity’s social channels through
                regular, community-driven content.
              </li>
              <li>
                Helped establish Africa as a key market for Infinity, with new
                sign-ups and partnerships following local events.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-2xl md:text-3xl font-medium text-black">
              Takeaways
            </span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-3 md:space-y-4 text-base md:text-lg">
              <li>
                Global Mindset Matters – Understanding different cultures and
                adapting outreach made Infinity feel at home everywhere.
              </li>
              <li>
                Events Create Energy – Meeting people face-to-face turned
                curiosity into real participation.
              </li>
              <li>
                Consistent Voice Builds Trust – Whether in Nigeria or Malaysia ,
                a clear message kept the brand strong and recognizable.
              </li>
            </ul>
          </div>

          {/* Section 3 */}

          {/* Additional Results Section */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-[360px] sm:h:[560px] md:h-[640px] xl:h-[700px]"
        >
          <img
            src={BRAND_STAND}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
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

export default InfinityExchange;
