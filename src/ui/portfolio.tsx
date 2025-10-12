import React from "react";
import {
  BOTTOM,
  BOTTOM_1,
  BOTTOM_2,
  BRIGHT_1_PIC,
  BRIGHT_2_PIC,
  BRIGHT_3_PIC,
  BRIGHT_4_PIC,
  BRIGHT_5_PIC,
  BRIGHT_6_PIC,
  GROUP,
  HERO_IMAGE_5,
} from "../assets";

const items = [
  {
    img: BRIGHT_1_PIC,
    title: "Pvzzle Collection",
    tags: [
      { title: "Content Marketing", color: "bg-[#F6EFCD]" },
      { title: "Community Building", color: "bg-[#BEFFAA]" },
    ],
    category: "Lifestyle",
  },
  {
    img: BRIGHT_2_PIC,
    title: "BingX Exchange",
    tags: [
      { title: "Social Media & Content", color: "bg-[#FFD4AA]" },
      { title: "Community Building", color: "bg-[#BEFFAA]" },
    ],
    category: "Lifestyle",
  },
  {
    img: GROUP,
    title: "Myosin",
    tags: [{ title: "Community Building", color: "bg-[#BEFFAA]" }],
    category: "Lifestyle",
  },
  {
    img: BRIGHT_4_PIC,
    title: "ChainDustry Blockchain Week",
    tags: [{ title: "Event Marketing & Activations", color: "bg-[#AAFFFC]" }],
    category: "Lifestyle",
  },
  {
    img: BRIGHT_5_PIC,
    title: "vTrader Global",
    tags: [
      { title: "Social Media & Content", color: "bg-[#FFD4AA]" },
      { title: "Community Building", color: "bg-[#BEFFAA]" },
    ],
    category: "Lifestyle",
  },
  {
    img: HERO_IMAGE_5,
    title: "Infinity Exchange",
    tags: [{ title: "Partnerships & Collaborations", color: "bg-[#FFC4E5]" }],
    category: "Lifestyle",
  },
];
function Portfolio() {
  return (
    <div className="w-full px-10 py-20">
      <div className="border-t-2 border-[#111112] flex flex-col">
        <span className="text-sm font-semibold text-[#111112] mt-3">
          Portfolio
        </span>
        <div className="flex items-center justify-between w-full mt-10">
          <span className="text-[#111112] leading-[65px] text-7xl font-medium tracking-tighter">
            See the magic <br /> for yourself
          </span>
          <div className="flex items-start gap-x-10 w-[50%]">
            <span className="text-xl font-medium tracking-tighter w-[65%] text-[#11111299]">
              Browse a curated collection of moments that have made their way
              into the hearts of clients.
            </span>
            <span className="text-[#11111299] font-medium text-sm w-[60%]">
              <span className="text-[#111112] text-[16px]">
                {" "}
                What’s my style?
              </span>{" "}
              <br /> Natural, emotive, and storytelling- focused. I aim to
              capture the real you.
            </span>
          </div>
        </div>

        <section className="max-w-7xl mx-auto py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="group  overflow-hidden transition-all duration-300 "
              >
                <div className="overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="flex items-center justify-between bottom-4 px-5 w-full absolute">
                    <img src={BOTTOM_1} className="w-[13px] h-[13px] " alt="" />
                    <img src={BOTTOM_2} className="w-[13px] h-[13px] " alt="" />
                  </div>
                </div>

                <div className="py-4  flex items-center justify-between w-full">
                  <div>
                    <p className="font-semibold text-lg text-wrap text-[#2F2F2F] tracking-tighter">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#11111299] tracking-tighter">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-end gap-2 mt-3">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className={`px-3 py-1 tracking-tighter ${tag.color} rounded-lg text-nowrap text-[10px] font-medium  text-[#3C3C3C]`}
                      >
                        {tag.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
