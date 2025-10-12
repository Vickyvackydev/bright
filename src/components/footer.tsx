import { MEASURE_GRAPHIC, NAME } from "../assets";

function Footer() {
  return (
    <div className="w-full bg-[#111112] h-full relative py-20 px-10">
      <img src={MEASURE_GRAPHIC} className="w-full absolute top-0" alt="" />
      <div className="flex w-full items-center justify-between">
        <div className="w-[65%] flex items-center justify-between gap-x-10">
          <div className="flex flex-col gap-y-6">
            <span className="text-[#FFFFFF99] font-medium text-sm tracking-tighter">
              Ready to capture the <br /> moments that matter most?
            </span>
            <span className="text-white font-medium text-[26px] tracking-tighter leading-8">
              Let’s make it happen. <br /> Contact me today!
            </span>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-[#FFFFFF99] font-medium text-sm tracking-tighter">
              {"Lets talk".toUpperCase()}
            </span>
            <span className="text-white font-medium text-xl tracking-tighter">
              (510) 895-6500
            </span>
            <a href="mailto:hello@bright.space">
              <span className="text-white font-medium text-5xl underline tracking-tighter">
                hello@bright.space
              </span>
            </a>
            <div className="flex flex-col">
              <span className="text-[#FFFFFF99] font-semibold text-sm tracking-tighter">
                Photographer{" "}
              </span>
              <span className="text-white font-semibold text-sm tracking-tighter">
                (Based in London)
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 text-2xl font-medium text-white mr-[5rem]">
          <span>Home</span>
          <span>Portfolio</span>
          <span>Blog</span>
          <span>About Me</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="w-full flex items-start justify-between mt-40 mb-10">
        <img src={NAME} className="w-[900px] h-full" alt="" />
        <div className="flex items-start flex-col gap-y-[10rem]">
          <div className="flex items-start  flex-col gap-y-2 text-sm font-semibold text-white">
            <span>Instagram</span>
            <span>x.com</span>
          </div>
          <span className="text-[#FFFFFF99] font-semibold text-nowrap">
            @ {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
