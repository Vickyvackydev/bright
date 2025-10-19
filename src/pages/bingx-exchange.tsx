import { useState } from "react";
import MoreProjects from "../ui/more-projects";
import {
  ARROW_LIGHT,
  FREESTYLE_3,
  FREESTYLE_4,
  FREESTYLE,
  FREESTYLE_2,
  HERO_IMAGE_2,
  BINGX,
  LINE_BAR,
} from "../assets";
import { motion } from "framer-motion";

function BingXExchange() {
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
          <div className="absolute inset-x-0 bottom-0 h-[100%] sm:h-[70%] md:h-[70%] lg:h-[100%] bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
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
                Marketing
              </span>
            </div>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
              BingX Exchange
            </span>
          </div>
        </motion.div>
        <motion.img
          src={HERO_IMAGE_2}
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
              <img
                src={ARROW_LIGHT}
                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                alt=""
              />
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
            BinX wanted to connect with everyday Nigerian crypto traders—not
            just ads. I already run a lively Telegram group of about 7,000
            crypto enthusiasts, so we teamed up.
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            My role was simple but powerful: share clear trading education,
            highlight BinX trading competitions, and invite people to sign up
            using my referral link.
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
                  Rebrand
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-base md:text-lg font-medium text-black">
                  Category
                </span>
                <span className="text-sm text-wrap text-end md:text-base text-[#111112] font-medium ">
                  DeFi • Web3 • Global Community Growth
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
      <div className="w-full h-[600px]  md:h-[520px] xl:h-[700px] px-4 sm:px-6 md:px-10 flex flex-col md:flex-row pb-12 md:pb-20 items-center justify-between gap-4">
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
            src={FREESTYLE}
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
            src={FREESTYLE_2}
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
              Bright Method® <br />/ Challenge
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-y-5 w-full xl:w-[60%] font-geist px-5"
        >
          <ul className="list-disc list-outside space-y-2 text-base md:text-lg text-[#4D5153]">
            <li>
              So Much Noise – Nigeria’s crypto space is packed with exchanges
              and promoters. We had to stand out without shouting.
            </li>
            <li>
              People Want Value, Not Hype – Traders need guidance and trust
              before they try a new platform.
            </li>
            <li>
              Keep It Real – The community had to feel like a conversation, not
              a sales pitch.
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
            <div className="flex items-start flex-col gap-y-5 mt-5">
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold"> Teach First :</span> I posted
                explainers about how BinX works, tips for spot and futures
                trading, and simple risk-management advice.
              </li>
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold"> Make Competitions Fun:</span>{" "}
                Whenever BinX launched a trading competition, I shared updates,
                broke down the rules, and showed members how to get involved—and
                earn.
              </li>
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold">Stay Close to the Community :</span>{" "}
                I hosted casual Q&As, dropped quick polls, and kept the chat
                active so everyone felt heard and excited.
              </li>
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold">Focus on Telegram:</span> Everything
                happened right inside my Telegram channel where people already
                hang out and trade ideas every day.
              </li>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 pb-12 md:pb-20 h-[650px] sm:h-[460px] md:h-[560px] xl:h-[600px] flex flex-col md:flex-row items-start justify-between gap-4 md:gap-7">
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={FREESTYLE_3}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          src={FREESTYLE_4}
          className="h-1/2 md:h-full w-full md:w-[50%] object-cover rounded-2xl"
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
              Early Results
            </span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-3 md:space-y-4 text-base md:text-lg">
              <li>
                Members clicked the referral link and started opening accounts
                almost immediately.
              </li>
              <li>
                Engagement in the group jumped whenever a new competition was
                announced.
              </li>
              <li>
                feedback was great—people said they finally understood how to
                start trading confidently.
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
                Education Builds Trust – When you help people learn first,
                they’re happy to try the platform.
              </li>
              <li>
                Community Beats Ads – A trusted space drives more action than
                any banner or cold outreach.
              </li>
              <li>
                Move Fast – Real-time updates keep energy high and competitions
                full.
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
          className="w-full h-[360px] sm:h-[500px] md:h-[600px] xl:h-[700px]"
        >
          <img
            src={BINGX}
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

export default BingXExchange;
