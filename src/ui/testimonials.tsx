import React from "react";
import { BUTTON, JOHNSON, QUOTE, STAR_ICON } from "../assets";

function Testimonials() {
  return (
    <div className="w-full px-10 py-20">
      <div className="border-t-2 border-[#111112] flex flex-col">
        <span className="text-sm font-semibold text-[#111112] mt-3">
          Testimonials
        </span>
        <div className="flex items-start justify-between mt-10">
          <div className="flex items-start flex-col h-full justify-between ">
            <span className="text-[26px] text-[#11111299] font-medium tracking-tighter leading-[30px]">
              Here’s what people have to say about working together. Real
              moments, real experiences, real feedback.
            </span>
            <div className="flex items-center h-[100vh] gap-x-5">
              <button className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#F6F6F6]">
                <img src={BUTTON} className="w-[7.13px] h-[12.97px]" alt="" />
              </button>
              <button className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#F6F6F6]">
                <img
                  src={BUTTON}
                  className="w-[7.13px] h-[12.97px] scale-x-[-1]"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="w-full flex items-start gap-x-3">
            <img src={QUOTE} className="w-[69px] h-[57px]" alt="" />
            <div className="flex flex-col gap-y-6">
              <span className="text-[#111112] font-medium tracking-tighter leading-20 text-7xl">
                The promotions turned out amazing. He captured the moment
                without feeling staged or forced.
              </span>
              <span className="text-[#11111299] tracking-tighter leading-8 font-medium text-[26px]">
                Every image brings back the emotions of the day, and I couldn’t
                be happier with how they came out.
              </span>
              <div className="flex items-center gap-x-3">
                <img
                  src={JOHNSON}
                  className="w-[58px] h-[58px] rounded-full"
                  alt=""
                />
                <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-x-1">
                    <span className="text-[#111112] font-semibold text-xs">
                      5.0 <span className="text-[#11111299]">/ 5</span>
                    </span>
                    <img src={STAR_ICON} alt="" />
                  </div>
                  <span className="text-[#11111266] font-semibold text-xs">
                    Boris Johnson
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center flex-col mt-20 gap-y-1 justify-center">
          <span className="text-black text-[14.75px] font-medium">Team</span>
          <span className="text-7xl font-medium text-black">
            Book a call to{" "}
            <span className="font-instrument-serif italic">Unlock</span> your
            potential.
          </span>
          <span className="text-lg font-medium text-[#0A0A0A] text-center">
            Schedule a call to explore how I can help <br /> you achieve
            incredible results
          </span>
          <button
            className="bg-[#0A0A0A] text-sm px-5 py-2 rounded-lg text-white shadow-[0px-0px-0px-1px-#FF45331F] backdrop-blur-[10px]
"
          >
            Book a free call
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
