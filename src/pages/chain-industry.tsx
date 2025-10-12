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

function ChainIndustry() {
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
            ChainDustry Blockchain Week 2025
          </span>
        </div>
        <img src={HERO_IMAGE_1} alt="" className="w-full h-full object-cover" />
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
            Wave of change: Introducing <br /> Cresta’s new brand.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7">
            In May 2025, ChainDustry marked a major milestone: 4 years in
            service and 30,000+ new users. To celebrate and to spotlight the
            ChainDustry Academy, the company planned ChainDustry Blockchain Week
            in Uyo, Nigeria, at a venue with capacity for over 2,000 attendees.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7">
            I was part of the core organizing team, responsible for content
            marketing and event design, ensuring the celebration captured the
            brand’s innovative spirit
          </span>
          <div>
            <span>({"Details".toUpperCase()})</span>
            <div className="w-full flex flex-col gap-y-4">
              <div className="w-full flex items-center border-t pt-4 mt-3 justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">
                  Engagement
                </span>
                <span className="text-[#111112] font-medium border-b border-[#111112]">
                  Chaindustry
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">Type</span>
                <span className="text-[#111112] font-medium ">
                  Event Campaign
                </span>
              </div>
              <div className="w-full flex items-center justify-between pb-4 border-b">
                <span className="text-lg font-medium text-black">Category</span>
                <span className="text-[#111112] font-medium ">Web3</span>
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
            src={EVENT}
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
            src={EVENT_2}
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
              Motto Method® <br /> / Objectives
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 w-[60%] font-geist">
          <span className="text-2xl font-medium text-black tracking-tight leading-7">
            Web3 Forward: Celebrating <br /> ChainDustry's Growth & Innovation
          </span>
          <ul className="list-disc list-inside text-lg text-[#4D5153]">
            <li>Celebrate 4 years of ChainDustry’s growth.</li>
            <li>
              Highlight the ChainDustry Academy to new and existing users.
            </li>
            <li>
              Engage Nigeria’s blockchain community with a web3-forward event.
            </li>
          </ul>
          <div className="flex flex-col gap-y-2">
            <span className="text-2xl font-bold text-black">My Role:</span>
            <span className="text-lg text-[#4D5153] tracking-tight leading-7">
              I led content marketing and stage/environment design, working from
              concept through execution: Content Marketing
            </span>
            <ul className="list-disc list-inside text-lg text-[#4D5153]">
              <li>
                Produced a series of promotional videos showcasing ChainDustry’s
                journey and the upcoming blockchain week.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-2xl font-bold text-black">
              Event Design & Production
            </span>

            <ul className="list-disc list-inside text-lg text-[#4D5153]">
              <li>
                Designed all event backdrops, ensuring strong brand visuals.
              </li>
              <li>
                Planned and executed stage setup with a focus on lighting to
                create a dynamic, camera-ready atmosphere.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px] px-10 pb-20">
        <img
          src={EVENT_3}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full flex items-start justify-between pb-20 gap-x-10 px-10">
        <div className="flex flex-col gap-y-4 w-[90%]">
          <span className="text-4xl font-bold text-black">
            Strategy & Execution
          </span>
          <span className="text-2xl font-bold text-black">
            Creative Direction{" "}
          </span>
          <span>
            Crafted a visual identity aligned with ChainDustry’s brand—sleek
            blockchain-inspired graphics and vibrant, futuristic lighting
            schemes. <br /> Audience Engagement: Deployed teaser videos and
            content across X Twitter, TikTok, Instagram, and LinkedIn, tailored
            for Nigeria’s blockchain audience On-site Experience : Designed a
            stage layout optimized for keynote speeches, panel discussions, and
            live streaming.
          </span>
        </div>
        <div className="w-full h-[400px]">
          <img
            src={STRATEGY}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="px-10 pb-20 h-[600px] flex items-start justify-between gap-7">
        <img
          src={SHOW_1}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
        <img
          src={SHOW_2}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full px-10 pb-20 flex items-start justify-between">
        <div className="flex flex-col gap-y-6">
          <div className="flex items-start flex-col gap-y-2">
            <span className="text-black text-xs font-medium">(01)</span>
            <span className="text-black font-medium">
              Motto Method®
              <br />/ Execution
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 justify-end">
          <span className="text-2xl font-medium text-black tracking-tight leading-7">
            Strategy & Execution
          </span>
          <div>
            <span className=" text-lg text-[#4D5153]">
              2,300+ in-person attendees across the week.
            </span>
            <ul className="list-disc list-inside text-lg text-[#4D5153]">
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
        </div>
      </div>
      <MoreProjects />
    </>
  );
}

export default ChainIndustry;
