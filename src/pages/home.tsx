import {
  BING_X,
  BYBIT,
  CREO_ENGINE,
  FIRST_IMAGE,
  FORTH_IMAGE,
  IMPAKT,
  MEASURE_MASK,
  MYODIN,
  OBIEX,
  OFF_CHAIN,
  QUOTE,
  SECOND_IMAGE,
  STAR,
  TETHER,
  THIRD_IMAGE,
} from "../assets";

import Hero from "../ui/hero";

import Service from "../ui/service";
import Portfolio from "../ui/portfolio";
import Trust from "../ui/trust";
import Testimonials from "../ui/testimonials";
import Faqs from "../ui/faqs";

import { motion, useAnimationFrame } from "framer-motion";

import { useRef, useCallback, useEffect } from "react";

export function ToolsMarquee() {
  const baseVelocity = 40; // px / second (adjust to taste)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // logical position (may be a large negative number)
  const pos = useRef(0);
  // smoothed position used for DOM transform
  const rendered = useRef(0);
  // whether user is hovering (pause)
  const isHovering = useRef(false);

  // get half-width (width of one set) to know when to wrap
  const getHalfWidth = useCallback(() => {
    // scroller contains duplicated content: row + spacer + row
    // halfWidth is width of one row + spacer
    if (!scrollerRef.current) return 0;
    const total = scrollerRef.current.scrollWidth;
    return total / 2;
  }, []);

  // pause on hover
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const enter = () => (isHovering.current = true);
    const leave = () => (isHovering.current = false);
    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    return () => {
      node.removeEventListener("mouseenter", enter);
      node.removeEventListener("mouseleave", leave);
    };
  }, []);

  // useAnimationFrame provides (time, delta) where delta is ms since last frame
  useAnimationFrame((_, delta) => {
    if (!scrollerRef.current) return;

    const half = getHalfWidth();
    if (half === 0) return;

    const dt = delta / 1000; // seconds

    // if hovering, slow to a stop (optional smooth pause)
    const effectiveVel = isHovering.current
      ? baseVelocity * 0.08
      : baseVelocity;

    // advance logical position to the left
    pos.current -= effectiveVel * dt;

    // wrap when we've moved past one duplicated chunk
    if (pos.current <= -half) {
      pos.current += half; // add half to wrap seamlessly
    }

    // LERP smoothing for rendered transform (avoid sudden jumps)
    // rendered = lerp(rendered, pos, 0.12)
    rendered.current += (pos.current - rendered.current) * 0.12;

    // Apply transform
    scrollerRef.current.style.transform = `translateX(${rendered.current}px)`;
  });

  return (
    <div ref={containerRef} className="relative overflow-hidden py-10">
      {/* fade gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/100 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/100 to-transparent z-10" />

      {/* scroller: duplicated content for seamless loop */}
      <div
        ref={scrollerRef}
        className="flex w-max will-change-transform items-center"
        style={{ transform: "translateX(0px)" }}
      >
        {renderToolsRow()}
        <div className="ml-10 sm:ml-14 md:ml-20" />
        {renderToolsRow()}
      </div>
    </div>
  );
}

/* keep your renderToolsRow as-is, example below */
function renderToolsRow() {
  // replace these identifiers with your imports (OBIEX etc.)
  const tools = [
    OBIEX,
    CREO_ENGINE,
    TETHER,
    BYBIT,
    BING_X,
    IMPAKT,
    OFF_CHAIN,
    MYODIN,
  ];

  return (
    <div className="flex items-center gap-10 sm:gap-14 md:gap-20" aria-hidden>
      {tools.map((tool, key) => (
        <img
          key={key}
          src={tool}
          alt=""
          className="shrink-0 opacity-70 hover:opacity-100 transition-opacity w-[105px] h-[54px] object-contain"
        />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="font-inter">
      <Hero />

      <div className="w-full ">
        <motion.img
          src={MEASURE_MASK}
          className="w-full h-full"
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <ToolsMarquee />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:px-10 px-5 flex flex-col items-start lg:mt-16 mt-8"
        >
          <div className="w-full flex lg:flex-row flex-col lg:items-center items-start justify-between">
            <img src={STAR} className="w-[30px] h-[30px]" alt="" />
            <div className="flex lg:items-start items-center gap-x-2 lg:mt-0 mt-5">
              <img
                src={QUOTE}
                className="w-[30px] h-[30px] lg:mt-3 mt-0"
                alt=""
              />
              <span className="text-[#111112] lg:text-[52px] text-2xl font-medium tracking-tighter">
                I don’t just market projects.
              </span>
            </div>
          </div>
          <span className="text-[#111112] lg:text-[50px] text-3xl font-medium tracking-tighter lg:leading-[50px] leading-normal lg:mt-0 mt-5">
            I build communities, design experiences, and craft stories that give
            blockchain a human heartbeat, turning ideas into movements with
            lasting impact.
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex lg:flex-row flex-col items-center justify-between gap-3 lg:px-10 px-5  mt-16 mb-20"
        >
          <div className="flex items-start flex-col gap-y-3 w-full">
            <div className="w-full border flex lg:flex-row flex-col  lg:items-center items-end justify-between border-[#B8C2CC] rounded-xl px-4 py-3">
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
        </motion.div>
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
