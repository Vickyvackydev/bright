import { useState } from "react";
import MoreProjects from "../ui/more-projects";
import {
  ARROW_LIGHT,
  LINE_BAR,
  HERO_IMAGE_4,
  V_TRADER,
  V_TRADER_2,
  BRIGHT_5_PIC,
  V_TRADER_3,
  V_TRADER_4,
} from "../assets";

function VTraders() {
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
            vTrader Global & vTrader Africa
          </span>
        </div>
        <img src={HERO_IMAGE_4} alt="" className="w-full h-full object-cover" />
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
            vTrader wanted to build real visibility in Africa, starting with
            Nigeria.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            I joined as Social Media Manager to make it happen.
          </span>
          <span className="text-lg text-[#4D5153] tracking-tight leading-7 font-medium">
            Our goal was simple: get more people talking about vTrader, grow
            engagement on their global and African pages, and give the brand a
            real local presence.
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
                  Crypto • Trading
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
            src={V_TRADER}
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
            src={V_TRADER_2}
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
            <li>Engagement jumped on both the Africa and Global accounts.</li>
            <li>
              The Lagos event sparked fresh sign-ups, product feedback and got
              vTrader mentioned across local trading circles.
            </li>
            <li>
              People loved the merch—it showed up in social posts and kept the
              conversation going long after the event.
            </li>
          </ul>
          <div>
            <span className="text-3xl font-medium text-black">What I Did</span>
            <div className="flex items-start flex-col gap-y-5 mt-5">
              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold"> Social Media :</span> I handled
                daily content for both vTrader Global, sharing trading insights,
                platform updates, and community highlights that spoke to each
                audience.
              </li>
              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold">Merch Drop : </span> I created and
                shared vTrader merch—shirts,water flaks, and stickers—with my
                own audience. It turned into a fun way for people to rep the
                brand and start conversations.
              </li>

              <li className="list-disc font-medium text-[#696969] text-xl">
                <span className="font-bold">Lagos Community Event: </span> To
                cap it off, I organized a meet-up in Lagos where traders and
                fintech fans could connect with vTrader in real life.
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 pb-20 h-[600px] flex items-start justify-between gap-7">
        <img
          src={V_TRADER_3}
          className="h-full w-[50%] object-cover rounded-2xl"
          alt=""
        />
        <img
          src={V_TRADER_4}
          className="w-[50%] h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full flex items-start justify-between pb-20 gap-x-10 px-10">
        <div className="flex flex-col gap-y-4 w-[90%]">
          {/* Section 1 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-3xl font-medium text-black">Results</span>
            <ul className="list-disc pl-6 font-medium text-[#696969] space-y-4">
              <li>Engagement jumped on both the Africa and Global accounts.</li>
              <li>
                The Lagos event sparked fresh sign-ups, product feedback and got
                vTrader mentioned across local trading circles.
              </li>
              <li>
                People loved the merch—it showed up in social posts and kept the
                conversation going long after the event.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-y-4">
            <span className="text-3xl font-medium text-black">Takeaways</span>
            <ul className="list-disc pl-6 font-medium  text-[#696969] space-y-4">
              <li>
                Local Matters – Meeting people face-to-face built more trust
                than any ad campaign.
              </li>
              <li>
                One Voice, Many Audiences – A consistent tone worked globally
                while still feeling personal in Nigeria.
              </li>
            </ul>
          </div>

          {/* Section 3 */}

          {/* Additional Results Section */}
        </div>

        <div className="w-full h-[700px]">
          <img
            src={BRIGHT_5_PIC}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>

      <MoreProjects />
    </>
  );
}

export default VTraders;
