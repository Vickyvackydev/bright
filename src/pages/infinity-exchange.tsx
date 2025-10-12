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

function InfinityExchange() {
  const [activeView, setActiveView] = useState(1);
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[26rem] ml-10">
          <div className="flex items-center gap-x-10 ">
            <span className="text-white text-4xl font-medium">Oct 9, 2024</span>
            <img src={LINE_BAR} className="h-[31.5px]" alt="" />
            <span className="text-[#FFFFFFB8] text-lg">Content Marketing</span>
          </div>
          <span className="text-white text-5xl font-medium">
            Infinity Exchange
          </span>
        </div>
        <img src={HERO_IMAGE_5} alt="" className="w-full h-full object-cover" />
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
            Infinity Exchange wanted to grow its reach across multiple
            regions—from Asia to Africa—while building a strong, trusted
            community.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            I joined as Global Ambassador, representing the brand in countries
            including Singapore, Malaysia, Korea, and Vietnam, and also led the
            Nigeria Ambassador team.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            My role was to put Infinity Exchange on the map: promote the
            platform, host and attend events, and drive engagement across social
            channels through consistent, community-first content.
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
            src={CHINA_1}
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
            src={CHINA_2}
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
              Motto Method® <br />/ Challenge
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[60%] font-geist">
          <ul className="list-disc list-outside space-y-2 text-lg text-[#4D5153]">
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
          <div>
            <span className="text-3xl font-medium text-black">What I Did</span>
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
          </div>
        </div>
      </div>

      <div className="px-10 pb-20 h-[600px] flex items-start justify-between gap-7">
        <img
          src={CHINA_3}
          className="w-[50%] h-full object-cover rounded-2xl"
          alt=""
        />
        <img
          src={BRAND_BANNER}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full flex items-start justify-between pb-20 gap-x-10 px-10">
        <div className="flex flex-col gap-y-4 w-[90%]">
          {/* Section 1 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-3xl font-medium text-black">Results</span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-4">
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
            <span className="text-3xl font-medium text-black">Takeaways</span>
            <ul className="list-disc pl-6 font-medium tracking-tighter text-[#696969] space-y-4">
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
        </div>

        <div className="w-full h-[700px]">
          <img
            src={BRAND_STAND}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>

      <MoreProjects />
    </>
  );
}

export default InfinityExchange;
