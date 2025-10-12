import {
  FIRST_IMAGE,
  FORTH_IMAGE,
  MEASURE_MASK,
  QUOTE,
  SECOND_IMAGE,
  STAR,
  THIRD_IMAGE,
} from "../assets";

import Hero from "../ui/hero";

import Service from "../ui/service";
import Portfolio from "../ui/portfolio";
import Trust from "../ui/trust";
import Testimonials from "../ui/testimonials";
import Faqs from "../ui/faqs";

function Home() {
  return (
    <div className="font-inter">
      <Hero />
      <div className="w-full ">
        <img src={MEASURE_MASK} className="w-full h-full" alt="" />

        <div className="w-full px-10 flex flex-col items-start mt-16">
          <div className="w-full flex items-center justify-between">
            <img src={STAR} className="w-[30px] h-[30px]" alt="" />
            <div className="flex items-start gap-x-2">
              <img src={QUOTE} className="w-[30px] h-[30px] mt-3" alt="" />
              <span className="text-[#111112] text-[52px] font-medium tracking-tighter">
                I don’t just market projects.
              </span>
            </div>
          </div>
          <span className="text-[#111112] text-[50px] font-medium tracking-tighter leading-[50px]">
            I build communities, design experiences, and craft stories that give
            blockchain a human heartbeat, turning ideas into movements with
            lasting impact.
          </span>
        </div>
        <div className="w-full flex items-center justify-between gap-3 px-10 mt-16 mb-20">
          <div className="flex items-start flex-col gap-y-3 w-full">
            <div className="w-full border flex items-center justify-between border-[#B8C2CC] rounded-xl px-4 py-3">
              <div className="flex items-center gap-x-2">
                <img
                  src={FIRST_IMAGE}
                  className="w-[50.97px] h-[50.97px]"
                  alt=""
                />
                <img src={SECOND_IMAGE} className="w-[59px] h-[59px]" alt="" />
                <img src={THIRD_IMAGE} className="w-[62px] h-[62px]" alt="" />
                <img src={FORTH_IMAGE} className="w-[70px] h-[70px]" alt="" />
              </div>
              <span className="text-xs text-nowrap ">30+ Partners</span>
            </div>
            <div className="w-full p-4 border border-[#B8C2CC] rounded-xl h-[40vh] flex flex-col items-start justify-between">
              <span className="text-black text-sm">
                Trusted by leading crypto brands and startups
              </span>
              <div className="flex flex-col items-start">
                <span className="text-5xl font-medium">50+</span>
                <span className="text-sm text-[#11111299]">Projects</span>
              </div>
            </div>
          </div>
          <div className="w-full h-[58vh] p-4 border border-[#B8C2CC] rounded-xl flex flex-col items-start justify-between">
            <span className="text-black text-sm">
              Trusted by leading crypto brands and startups
            </span>
            <div className="flex flex-col items-start">
              <span className="text-5xl font-medium">100k+</span>
              <span className="text-sm text-[#11111299]">Followers</span>
            </div>
          </div>
          <div className="w-full h-[58vh] p-4 border border-[#B8C2CC] rounded-xl flex flex-col items-start justify-between">
            <span className="text-black text-sm">
              Trusted by leading crypto brands and startups
            </span>
            <div className="flex flex-col items-start">
              <span className="text-5xl font-medium">5M+</span>
              <span className="text-sm text-[#11111299]">Reach</span>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Portfolio />
      <Trust />
      <Testimonials />
      <Faqs />
    </div>
  );
}

export default Home;
