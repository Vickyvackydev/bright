import { useState, useEffect, useRef } from "react";

import {
  BRIGHT_1_PIC,
  HERO_IMAGE_1,
  HERO_IMAGE_2,
  HERO_IMAGE_3,
  HERO_IMAGE_4,
  HERO_IMAGE_5,
  LINE_BAR,
} from "../assets";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [visibleImages, setVisibleImages] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the container is visible
      const containerTop = rect.top;
      const containerBottom = rect.bottom;

      // If container is in viewport
      if (containerTop < windowHeight && containerBottom > 0) {
        // Calculate scroll progress within the container
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - containerTop) /
              (windowHeight + container.offsetHeight)
          )
        );

        // Determine how many images should be visible based on scroll progress
        const totalImages = 6;
        const newVisibleImages = Math.max(
          1,
          Math.min(totalImages, Math.ceil(scrollProgress * totalImages))
        );

        setVisibleImages(newVisibleImages);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-full h-full px-10 pt-[10rem] flex items-center flex-col justify-center">
      <div className="flex flex-col gap-y-1.5 items-center justify-center">
        <span className="text-6xl text-center text-black font-medium tracking-tighter">
          A showcase of <br /> captured moments
        </span>
        <span className="text-xl text-black font-medium">
          Exploring stories through the lens, one moment at a time.
        </span>
      </div>
      <div className="w-full relative mt-10" ref={containerRef}>
        <div
          onClick={() => navigate("/chain-industry")}
          className="w-full h-[500px] cursor-pointer rounded-2xl relative z-10 shadow-2xl"
        >
          <div className="absolute inset-0 z-30 flex flex-col items-center gap-y-2 mt-[15rem] ml-[5rem]">
            <div className="flex items-center gap-x-10 ">
              <span className="text-white text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-lg">
                Content Marketing
              </span>
            </div>
            <span className="text-white text-5xl font-medium">
              ChainDustry Blockchain Week 2025
            </span>
          </div>
          <img
            src={HERO_IMAGE_1}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div
          onClick={() => navigate("/bingx-exchange")}
          className={`w-full h-[500px] rounded-2xl cursor-pointer relative z-20 -mt-20 shadow-2xl transition-all duration-700 ease-out ${
            visibleImages >= 2
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="absolute inset-0 z-30 flex flex-col items-center gap-y-2 mt-[13rem]">
            <div className="flex items-center gap-x-10 ">
              <span className="text-white text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-lg">
                Content Marketing
              </span>
            </div>
            <span className="text-white text-5xl font-medium">
              BingX Exchange
            </span>
          </div>
          <img
            src={HERO_IMAGE_2}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div
          onClick={() => navigate("/myosin")}
          className={`w-full h-[500px] rounded-2xl cursor-pointer relative z-30 -mt-20 shadow-2xl transition-all duration-700 ease-out ${
            visibleImages >= 3
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="absolute inset-0 z-30 flex flex-col items-center gap-y-2 mt-[13rem]">
            <div className="flex items-center gap-x-10 ">
              <span className="text-white text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-lg">
                Content Marketing
              </span>
            </div>
            <span className="text-white text-5xl font-medium">Myosin</span>
          </div>
          <img
            src={HERO_IMAGE_3}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div
          onClick={() => navigate("/v-traders")}
          className={`w-full h-[500px] rounded-2xl cursor-pointer relative z-40 -mt-20 shadow-2xl transition-all duration-700 ease-out ${
            visibleImages >= 4
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="absolute inset-0 z-30 flex flex-col items-center gap-y-2 mt-[13rem]">
            <div className="flex items-center gap-x-10 ">
              <span className="text-white text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-lg">
                Content Marketing
              </span>
            </div>
            <span className="text-white text-5xl font-medium">
              vTrader Global & vTrader Africa
            </span>
          </div>
          <img
            src={HERO_IMAGE_4}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div
          onClick={() => navigate("/infinity-exchange")}
          className={`w-full h-[500px] rounded-2xl relative cursor-pointer z-50 -mt-20 shadow-2xl transition-all duration-700 ease-out ${
            visibleImages >= 5
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="absolute inset-0 z-30 flex flex-col items-center gap-y-2 mt-[13rem]">
            <div className="flex items-center gap-x-10 ">
              <span className="text-white text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-lg">
                Content Marketing
              </span>
            </div>
            <span className="text-white text-5xl font-medium">
              Infinity Exchange
            </span>
          </div>
          <img
            src={HERO_IMAGE_5}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>

        <div
          onClick={() => navigate("/puzzle-exchange")}
          className={`w-full h-[500px] rounded-2xl cursor-pointer relative z-60 -mt-20 shadow-2xl transition-all duration-700 ease-out ${
            visibleImages >= 6
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="absolute inset-0 z-30 flex flex-col items-center gap-y-2 mt-[13rem]">
            <div className="flex items-center gap-x-10 ">
              <span className="text-white text-4xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-lg">
                Content Marketing
              </span>
            </div>
            <span className="text-white text-5xl font-medium">
              Pvzzle Collection
            </span>
          </div>
          <img
            src={BRIGHT_1_PIC}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
