import { useState } from "react";
import MoreProjects from "../ui/more-projects";
import {
  ARROW_LIGHT,
  LINE_BAR,
  HERO_IMAGE_3,
  MYOSIN_1,
  MYOSIN_2,
  MYOSIN_3,
  MYOSIN_4,
  MYOSIN_5,
} from "../assets";
import { motion } from "framer-motion";

function Myosin() {
  const [activeView, setActiveView] = useState(1);
  return (
    <>
      <div className="w-full h-[70vh] sm:h-[80vh] xl:h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-40 sm:mt-60 md:mt-72 xl:mt-[26rem] ml-4 sm:ml-6 md:ml-10 xl:ml-10"
        >
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
              Crypto • Marketing{" "}
            </span>
          </div>
          <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
            Myosin
          </span>
        </motion.div>
        <motion.img
          src={HERO_IMAGE_3}
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
            Myosin wanted to connect with Africa’s fast-growing crypto crowd and
            show global projects that the continent is a serious market.
          </span>
          <span className="text-base md:text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            I stepped in as African Lead to make that happen—overseeing content,
            sharing real market insight, and hosting events that brought Myosin
            face-to-face with African builders
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
                <span className="text-sm md:text-base text-[#111112] font-medium ">
                  Web3 • Crypto Marketing • Community Growth
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
            src={MYOSIN_1}
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
            src={MYOSIN_2}
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
          className="flex flex-col gap-y-5 w-full xl:w-[60%] font-geist"
        >
          <ul className="list-disc list-outside space-y-2 text-base md:text-lg text-[#4D5153]">
            <li>
              Two Audiences, One Message – We had to talk to African crypto
              users and international projects at the same time.
            </li>
            <li>
              Trust First – Many people were curious about Web3 but cautious.
              The content had to teach, not just sell.
            </li>
            <li>
              Shining a Light on Africa – Big projects often overlook the region
              or don’t know where to start.
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
                <span className="font-bold"> Telling Africa’s Story : </span> I
                created content that promoted Myosin’s mission in Nigeria and
                across Africa—short posts and conversations that highlighted
                local talent and opportunity. I also shared deep insights on why
                global investors should pay attention to Africa: things like
                cultural trends, user habits, and market signals you won’t
                easily find online.
              </li>
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold">Events & Community:</span> I hosted
                meet-ups that gave people a real chance to connect with Myosin,
                ask questions, and share their own projects.
              </li>
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold">Stay Close to the Community :</span>{" "}
                I hosted casual Q&As, dropped quick polls, and kept the chat
                active so everyone felt heard and excited.
              </li>
              <li className="list-disc font-medium text-[#696969] text-lg md:text-xl">
                <span className="font-bold">Marketing & Partnerships: </span> I
                helped shape campaigns that showed international teams how to
                reach African users and why this market is worth their
                attention.
              </li>
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
          src={MYOSIN_3}
          className="w-full md:w-[50%] h-1/2 md:h-full object-cover rounded-2xl"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          src={MYOSIN_4}
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
            <ul className="list-disc pl-6 font-medium  text-[#696969] space-y-3 md:space-y-4 text-base md:text-lg">
              <li>
                Myosin’s name started popping up across key African crypto hubs.
              </li>
              <li>
                Global projects began reaching out, wanting to learn how to
                launch here.
              </li>
              <li>
                A growing network of creators, developers, and traders now sees
                Myosin as a trusted bridge between Africa and the wider Web3
                world.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-2xl md:text-3xl font-medium text-black">
              Takeaways
            </span>
            <ul className="list-disc pl-6 font-medium  text-[#696969] space-y-3 md:space-y-4 text-base md:text-lg">
              <li>
                Local Knowledge Wins – Sharing details you can’t Google built
                trust fast.
              </li>
              <li>
                Education Opens Doors – Explaining why Africa matters turned
                interest into action.
              </li>
              <li>
                Community Beats Ads – Real conversations and events made Myosin
                feel like part of the ecosystem, not an outsider.
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
            src={MYOSIN_5}
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

export default Myosin;
