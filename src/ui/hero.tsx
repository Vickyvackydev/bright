import { BRIGHT, TEXT_FRAME } from "../assets";

function Hero() {
  // const darkmode = useSelector(selectDarkMode);

  return (
    <div
      style={{
        background:
          "radial-gradient(82.26% 196.87% at 50% 49.96%, #D6E5F3 1.53%, #A9B7C7 100%)",
      }}
      className="w-full h-screen flex items-center justify-center flex-col relative overflow-hidden"
    >
      <img
        src={BRIGHT}
        className="max-w-full max-h-full object-contain"
        alt=""
      />
      <div className="absolute flex flex-col bottom-7 items-center justify-center -space-y-10">
        <span className="text-white">BLOCKCHAIN IN FOCUS</span>
        <img src={TEXT_FRAME} className="w-[60%] h-[265px]" alt="" />
        <div className="flex items-center gap-x-3">
          <button className="w-[190px] h-[55px] rounded-lg px-5 py-3 bg-white text-[#111112] shadow-box-shadow backdrop-blur-[10px]">
            Book a free call
          </button>
          <button className=" rounded-lg w-[190px] h-[55px] text-white border border-white shadow-box-shadow backdrop-blur-[10px]">
            See our work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
