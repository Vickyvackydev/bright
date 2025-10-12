import { useState } from "react";
import MoreProjects from "../ui/more-projects";
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
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[26rem] ml-10">
          <div className="flex items-center gap-x-10 ">
            <span className="text-white text-4xl font-medium">Oct 9, 2024</span>
            <img src={LINE_BAR} className="h-[31.5px]" alt="" />
            <span className="text-[#FFFFFFB8] text-lg">Content Marketing</span>
          </div>
          <span className="text-white text-5xl font-medium">
            Pvzzle Collection
          </span>
        </div>
        <img src={BRIGHT_1_PIC} alt="" className="w-full h-full object-cover" />
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
            Puzzle set out to build stronger visibility within Nigeria’s vibrant
            tech ecosystem. Rather than a typical marketing campaign, i
            partnered with pvzzle collections to merge fashion and technology
            culture, using clothing as a conversation starter.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            <span className="font-bold text-xl">The goal:</span> express
            Pvzzle’s identity and attract tech-savvy Nigerians through stylish,
            comfortable apparel.
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
                <span className="text-[#111112] font-medium ">AI</span>
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
            src={INFLUENCER}
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
            src={ARTIST}
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
          <ul className="list-disc list-outside text-lg space-y-3 text-[#4D5153]">
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
        </div>
      </div>

      <div className="px-10 pb-20 h-[600px] flex items-start justify-between gap-7">
        <img
          src={GYM}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
        <img
          src={COOL}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full flex items-start justify-between pb-20 gap-x-10 px-10">
        <div className="flex flex-col gap-y-4 w-[90%] font-geist">
          <span className="text-4xl font-bold text-black">
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
        </div>

        <div className="w-full h-[700px]">
          <video
            src={"/leg.mp4"}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <MoreProjects />
    </>
  );
}

export default PuzzleExchange;
