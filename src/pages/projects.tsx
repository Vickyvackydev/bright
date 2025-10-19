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
  const [isStackingComplete, setIsStackingComplete] = useState(false);
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

        // Mark stacking as complete when all images are visible
        if (newVisibleImages === totalImages && !isStackingComplete) {
          setIsStackingComplete(true);
        }
      }
    };

    // Handle wheel events to control scroll during stacking
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If we're in the container area and stacking isn't complete
      if (rect.top < windowHeight && rect.bottom > 0 && !isStackingComplete) {
        e.preventDefault();
        // Manually trigger scroll progress based on wheel direction
        const scrollStep = e.deltaY > 0 ? 1 : -1;
        const newVisible = Math.max(1, Math.min(6, visibleImages + scrollStep));
        setVisibleImages(newVisible);

        if (newVisible === 6) {
          setIsStackingComplete(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isStackingComplete, visibleImages]);

  const navigate = useNavigate();
  return (
    <div className="w-full h-full lg:px-10 px-5 lg:pt-[10rem] pt-[5rem] mb-5 flex items-center flex-col justify-center">
      <div className="flex flex-col gap-y-1.5 items-center justify-center">
        <span className="lg:text-6xl text-4xl text-center text-black font-medium tracking-tighter">
          A showcase of <br /> captured moments
        </span>
        <span className="text-xl text-black text-center opacity-50 font-medium">
          Exploring stories through the lens, one moment at a time.
        </span>
      </div>
      <div className="relative w-full mt-10 space-y-0" ref={containerRef}>
        {[
          {
            id: 1,
            title: "ChainDustry Blockchain Week 2025",
            img: HERO_IMAGE_1,
            link: "/chain-industry",
          },
          {
            id: 2,
            title: "BingX Exchange",
            img: HERO_IMAGE_2,
            link: "/bingx-exchange",
          },
          { id: 3, title: "Myosin", img: HERO_IMAGE_3, link: "/myosin" },
          {
            id: 4,
            title: "vTrader Global & vTrader Africa",
            img: HERO_IMAGE_4,
            link: "/v-traders",
          },
          {
            id: 5,
            title: "Infinity Exchange",
            img: HERO_IMAGE_5,
            link: "/infinity-exchange",
          },
          {
            id: 6,
            title: "Pvzzle Collection",
            img: BRIGHT_1_PIC,
            link: "/puzzle-exchange",
          },
        ].map((item, index) => (
          <div
            key={item.id}
            onClick={() => navigate(item.link)}
            className={`
        relative w-full lg:h-[700px] h-[500px] rounded-2xl  overflow-hidden cursor-pointer shadow-2xl
        transition-all duration-700 ease-out
        ${
          visibleImages >= index + 1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
        ${
          index !== 0
            ? "-mt-[400px] sm:-mt-[380px] md:-mt-[390px] lg:-mt-[400px]"
            : ""
        } 
        z-[${10 + index * 10}]
      `}
          >
            {/* Dark overlay for visibility */}
            <div className="absolute inset-0 bg-black/50 z-20 rounded-2xl"></div>

            {/* Text content */}
            <div className="absolute inset-0 z-30 flex flex-col items-start sm:items-center justify-center gap-y-3 px-6 sm:px-10 text-center">
              <div className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10">
                <span className="text-white text-lg sm:text-2xl md:text-3xl font-medium">
                  Oct 9, 2024
                </span>
                <img
                  src={LINE_BAR}
                  className="h-[20px] sm:h-[26px] md:h-[30px]"
                  alt=""
                />
                <span className="text-[#FFFFFFB8] text-sm sm:text-base md:text-lg">
                  Content Marketing
                </span>
              </div>
              <span className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                {item.title}
              </span>
            </div>

            {/* Background Image */}
            <img
              src={item.img}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
