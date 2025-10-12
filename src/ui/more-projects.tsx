import { HERO_IMAGE_4, HERO_IMAGE_2, LINE_BAR } from "../assets";
import { GO_BACK } from "../assets";
import { useNavigate } from "react-router-dom";

function MoreProjects() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center flex-col px-10 pb-20">
      <div
        onClick={() => navigate("/projects")}
        className="flex items-center gap-x-2 cursor-pointer"
      >
        <img src={GO_BACK} className="w-[24px] h-[24px]" alt="" />
        <span className="text-[#8D8D8D] font-medium text-xl">
          Go back to portfolio
        </span>
      </div>
      <span className="text-7xl font-semibold text-black tracking-tight">
        More projects
      </span>
      <div className="flex flex-col gap-y-8 w-full mt-8">
        <div className="w-full h-[650px] relative">
          <div className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[20rem] ml-[25rem]">
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
              BinX Exchange
            </span>
          </div>
          <img
            src={HERO_IMAGE_2}
            className="w-full rounded-2xl h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full h-[650px] relative">
          <div className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 mt-[20rem] ml-[25rem]">
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
              Habby Exchange
            </span>
          </div>
          <img
            src={HERO_IMAGE_4}
            className="w-full rounded-2xl h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MoreProjects;
