import { HERO_IMAGE_4, HERO_IMAGE_2, LINE_BAR } from "../assets";
import { GO_BACK } from "../assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function MoreProjects() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pb-20">
      {/* Go Back */}
      <motion.div
        onClick={() => navigate("/projects")}
        whileHover={{ x: -5 }}
        className="flex items-center gap-x-2 cursor-pointer mt-10 sm:mt-0"
      >
        <img src={GO_BACK} className="w-5 h-5 sm:w-6 sm:h-6" alt="Back" />
        <span className="text-[#8D8D8D] font-medium text-base sm:text-xl">
          Go back to portfolio
        </span>
      </motion.div>

      {/* Title */}
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-black tracking-tight mt-5 text-center"
      >
        More projects
      </motion.span>

      {/* Projects List */}
      <div className="flex flex-col gap-y-10 sm:gap-y-12 w-full mt-10">
        {/* Project Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full cursor-pointer h-[400px] sm:h-[500px] md:h-[650px] rounded-2xl overflow-hidden"
          onClick={() => navigate("/bingx-exchange")}
        >
          <motion.img
            src={HERO_IMAGE_2}
            className="w-full h-full object-cover rounded-2xl"
            alt="BinX Exchange"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 z-30 flex flex-col items-start gap-y-2 justify-end p-6 sm:p-10 md:p-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          >
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 mb-2">
              <span className="text-white text-xl sm:text-3xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[20px] sm:h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-sm sm:text-lg">
                Crypto • Trading
              </span>
            </div>
            <span className="text-white text-3xl sm:text-5xl font-medium">
              BinX Exchange
            </span>
          </motion.div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] rounded-2xl overflow-hidden"
        >
          <motion.img
            src={HERO_IMAGE_4}
            className="w-full h-full object-cover rounded-2xl"
            alt="Habby Exchange"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 cursor-pointer z-30 flex flex-col items-start gap-y-2 justify-end p-6 sm:p-10 md:p-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            onClick={() => navigate("/v-traders")}
          >
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 mb-2">
              <span className="text-white text-xl sm:text-3xl font-medium">
                Oct 9, 2024
              </span>
              <img src={LINE_BAR} className="h-[20px] sm:h-[31.5px]" alt="" />
              <span className="text-[#FFFFFFB8] text-sm sm:text-lg">
                Crypto • Trading
              </span>
            </div>
            <span className="text-white text-3xl sm:text-5xl font-medium">
              vTrader Global & vTrader Africa
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default MoreProjects;
