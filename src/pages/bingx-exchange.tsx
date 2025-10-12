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

function BingXExchange() {
  const [activeView, setActiveView] = useState(1);
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[26rem] ml-10">
          <div className="flex items-center gap-x-10 ">
            <span className="text-white text-4xl font-medium">Oct 9, 2024</span>
            <img src={LINE_BAR} className="h-[31.5px]" alt="" />
            <span className="text-[#FFFFFFB8] text-lg">Crypto • Trading </span>
          </div>
          <span className="text-white text-5xl font-medium">
            BingX Exchange
          </span>
        </div>
        <img src={HERO_IMAGE_2} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full px-10 py-20 flex items-start justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-start flex-col gap-y-2">
            <span className="text-black text-xs font-medium">(01)</span>
            <span className="text-black font-medium">
              Bright Method® <br />/ Overview
            </span>
          </div>
          <button className="w-[147px] h-[49px] rounded-3xl bg-black pr-1 pl-4 flex items-center justify-between">
            <span className="text-white text-sm font-medium">Visit Site</span>
            <div className="w-[40.5px] h-[40.5px] rounded-full bg-[#29292B] flex items-center justify-center">
              <img src={ARROW_LIGHT} className="w-[16px] h-[16px]" alt="" />
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-y-5 w-[60%]">
          <span className="text-2xl font-medium text-black tracking-tight leading-7">
            Overview
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            BinX wanted to connect with everyday Nigerian crypto traders—not
            just ads. I already run a lively Telegram group of about 7,000
            crypto enthusiasts, so we teamed up.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            My role was simple but powerful: share clear trading education,
            highlight BinX trading competitions, and invite people to sign up
            using my referral link.
          </span>

          <div>
            <span>({"Details".toUpperCase()})</span>
            <div className="w-full flex flex-col gap-y-4">
              <div className="w-full flex items-center border-t pt-4 mt-3 justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">
                  Engagement
                </span>
                <span className="text-[#111112] font-medium border-b border-[#111112]">
                  FastTrack®
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">Type</span>
                <span className="text-[#111112] font-medium ">Rebrand</span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">Category</span>
                <span className="text-[#111112] font-medium ">
                  DeFi • Web3 • Global Community Growth
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">Model</span>
                <span className="text-[#111112] font-medium ">B2B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px] px-10 flex pb-20 items-center justify-between gap-x-4">
        <div
          className={` h-full ${
            activeView === 1 ? "w-full" : "w-[200px]"
          } transition-all duration-700 ease-out`}
        >
          <img
            onMouseEnter={() => setActiveView(1)}
            src={FREESTYLE}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div
          className={`w-[200px] h-full ${
            activeView === 2 ? "w-full" : "w-[200px]"
          } transition-all duration-700 ease-out`}
        >
          <img
            onMouseEnter={() => setActiveView(2)}
            src={FREESTYLE_2}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full px-10 pb-20 flex items-start justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-start flex-col gap-y-2">
            <span className="text-black text-xs font-medium">(01)</span>
            <span className="text-black font-medium">
              Bright Method® <br />/ Challenge
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[60%] font-geist">
          <ul className="list-disc list-outside space-y-2 text-lg text-[#4D5153]">
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
          <div>
            <span className="text-3xl font-medium text-black">What I Did</span>
            <div className="flex items-start flex-col gap-y-5 mt-5">
              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold"> Teach First :</span> I posted
                explainers about how BinX works, tips for spot and futures
                trading, and simple risk-management advice.
              </li>
              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold"> Make Competitions Fun:</span>{" "}
                Whenever BinX launched a trading competition, I shared updates,
                broke down the rules, and showed members how to get involved—and
                earn.
              </li>
              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold">Stay Close to the Community :</span>{" "}
                I hosted casual Q&As, dropped quick polls, and kept the chat
                active so everyone felt heard and excited.
              </li>
              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold">Focus on Telegram:</span> Everything
                happened right inside my Telegram channel where people already
                hang out and trade ideas every day.
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 pb-20 h-[600px] flex items-start justify-between gap-7">
        <img
          src={FREESTYLE_3}
          className="w-[50%] h-full object-cover rounded-2xl"
          alt=""
        />
        <img
          src={FREESTYLE_4}
          className="h-full w-[50%] object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full flex items-start justify-between pb-20 gap-x-10 px-10">
        <div className="flex flex-col gap-y-4 w-[90%]">
          {/* Section 1 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-3xl font-medium text-black">
              Early Results
            </span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-4">
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
            <span className="text-3xl font-medium text-black">Takeaways</span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-4">
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
        </div>

        <div className="w-full h-[700px]">
          <img
            src={BINGX}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>

      <MoreProjects />
    </>
  );
}

export default BingXExchange;
