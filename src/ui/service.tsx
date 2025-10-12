import {
  BLACK_BG,
  FRAME_1_PIC,
  FRAME_2_PIC,
  FRAME_3_PIC,
  FRAME_4_PIC,
  FRAME_5_PIC,
  FRAME_6_PIC,
} from "../assets";

const services = [
  {
    img: FRAME_1_PIC,
    title: "Crypto Social Marketing",
    content:
      "Growth-focused campaigns tailored for Web3 audiences. Twitter growth, TikTok content, and community engagement strategies.",
  },
  {
    img: FRAME_2_PIC,
    title: "Community Building",
    content:
      "From online engagement to real-world events. Building loyal communities that drive project success.",
  },
  {
    img: FRAME_3_PIC,
    title: "Design Solutions",
    content:
      "Extended creative design for brands and projects. Visual identity that stands out in the Web3 space.",
  },
  {
    img: FRAME_4_PIC,
    title: "End-to-End Strategy",
    content:
      "Helping projects launch, scale, and sustain. Complete marketing strategies from concept to success.",
  },
  {
    img: FRAME_5_PIC,
    title: "Content Creation & Storytelling",
    content:
      "Crafting narratives that make blockchain human, relatable, and unforgettable",
  },
  {
    img: FRAME_6_PIC,
    title: "Brand Partnerships & Event Activation",
    content:
      "Connecting projects with the right voices, stages, and communities to scale visibility and trust.",
  },
];
function Service() {
  return (
    <div className="w-full relative h-[900px]">
      <img src={BLACK_BG} className="w-full h-full object-fill" alt="" />

      <div className="w-full absolute inset-0 z-10 bg-[#0C0C0D]/50" />

      <div className="w-full absolute inset-0 z-20 py-20 flex items-start space-x-12 justify-between px-10">
        <div className="flex flex-col items-start gap-y-6">
          <span className="block tracking-tighter text-7xl text-nowrap leading-[70px] font-medium text-white">
            Services That <br /> Scale
          </span>
          <span className="block text-[#FFFFFF99] max-w-[77%] text-2xl leading-[30px] font-medium tracking-tighter">
            From social media growth to event organizing, I provide
            comprehensive solutions for crypto projects looking to thrive in the
            decentralized world.
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-stretch w-full text-white gap-10">
          {/* Left Column */}
          <div className="flex flex-col justify-start gap-y-10 w-full lg:w-1/2">
            {services.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between w-full border-b border-[#FFFFFF1A] pb-4"
              >
                <div className="flex items-start flex-col gap-4">
                  <img
                    src={item.img}
                    className="w-[58px] h-[58px] rounded-xl object-cover"
                    alt={item.title}
                  />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-semibold text-nowrap">
                      {item.title}
                    </span>
                    <span className="text-xs text-[#FFFFFF99]">
                      {item.content}
                    </span>
                  </div>
                </div>
                <span className="text-[#FFFFFF4D] text-[20px] font-medium">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end gap-y-10 w-full lg:w-1/2 mt-[15rem]">
            {[...services.slice(3, 6)].map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between w-full border-b border-[#FFFFFF1A] pb-4"
              >
                <div className="flex items-start flex-col gap-4">
                  <img
                    src={item.img}
                    className="w-[58px] h-[58px] rounded-xl object-cover"
                    alt={item.title}
                  />
                  <div className="flex flex-col">
                    <span className="text-[20px] font-semibold text-nowrap">
                      {item.title}
                    </span>
                    <span className={`text-xs text-[#FFFFFF99] `}>
                      {item.content}
                    </span>
                  </div>
                </div>
                <span className="text-[#FFFFFF4D] text-[20px] font-medium">
                  0{i + 4}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
