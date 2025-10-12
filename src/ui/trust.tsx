import {
  ANIMATION,
  ARROW_LIGHT,
  BRIGHT_MIC,
  BRIGHTY,
  BRIGHTY_2,
  GIRLIE,
  GROUP,
  GROUP_PHOTOS,
  TEXTING,
} from "../assets";

function Trust() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-5   w-full">
      <span className="text-[#111112] text-7xl tracking-tighter text-center font-medium">
        Why Projects Trust <br /> Bright’s Presence
      </span>
      <span className="text-lg text-[#11111299] tracking-tighter leading-[20px] text-center font-medium">
        Because in the noisy world of crypto, he doesn’t just speak — he
        connects, <br /> engages, and inspires communities that last.
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full max-w-7xl mx-auto px-4">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <div className="relative h-[503px]">
            <img
              src={BRIGHT_MIC}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <button className="absolute bottom-11 left-5 z-20 text-lg text-white flex items-center gap-2">
              <span>Check my instagram</span>
              <img src={ARROW_LIGHT} className="w-[16px] h-[16px]" alt="" />
            </button>
          </div>
          <div className="bg-[#88888833] p-7 rounded-2xl flex flex-col items-start">
            <img src={GROUP_PHOTOS} className="w-[229px] h-[65px]" alt="" />
            <div className="flex items-center gap-x-1 mt-4">
              <span className="text-[#111112] text-4xl font-medium">100+</span>
              <span className="text-[#11111299] font-medium text-sm">
                projects and collaborations across the decentralized space.
              </span>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4">
          <div className="relative h-[340px]">
            <img
              src={BRIGHTY}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
            <div
              className="absolute w-full h-full rounded-2xl inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
              }}
            ></div>
            <img
              src={ANIMATION}
              className="absolute top-10 w-[155.2px] h-[155.2px] left-[35%]"
              alt=""
            />
            <span className="absolute bottom-0 left-0 right-0 z-20 text-white font-medium text-[26px] text-center p-6 tracking-tighter leading-[30px]">
              Engaging content and creative <br /> design that turn blockchain
              ideas <br />
              into culture.
            </span>
          </div>
          <div className="relative h-[340px]">
            <img
              src={GROUP}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-4 ">
          <div className="w-full h-[229px] grid grid-cols-2 gap-x-2">
            <div className="bg-[#E7E7E7] p-8 rounded-2xl flex items-start justify-center flex-col w-full">
              <div className="relative">
                <span className="text-[#111112] text-6xl font-medium">30</span>
                <span className="absolute -top-2 -ml-0.5 text-[#111112] text-2xl font-medium">
                  %+
                </span>
              </div>
              <span className="text-[#11111299] text-sm tracking-tighter">
                higher engagement rates for projects powered by Bright’s
                campaigns.
              </span>
            </div>
            <div className="w-full h-full">
              <img
                src={BRIGHTY_2}
                className="w-full h-full object-cover rounded-2xl"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[175px]">
            <img
              src={TEXTING}
              className="w-full h-[270px] object-cover rounded-2xl"
              alt=""
            />
            <div className="w-full h-full relative rounded-2xl mt-3 overflow-hidden">
              <img
                src={GIRLIE}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"
                alt=""
              />
              <div
                className="absolute inset-0 w-full h-full rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.24) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
