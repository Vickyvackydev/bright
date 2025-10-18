import { BRIGHT, TEXT_FRAME } from "../assets";
import { motion } from "framer-motion";

function Hero() {
  // const darkmode = useSelector(selectDarkMode);

  return (
    <div
      style={{
        background:
          "radial-gradient(82.26% 196.87% at 50% 49.96%, #D6E5F3 1.53%, #A9B7C7 100%)",
      }}
      className="w-full lg:h-screen h-[500px] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-10"
    >
      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={BRIGHT}
        className="max-w-full lg:max-w-[70%] 2xl:max-w-[60%] lg:mt-[22rem] mt-[12rem] lg:h-auto h-screen lg:object-contain object-cover"
        alt="Bright"
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 flex flex-col mt-[19rem] items-center justify-center gap-y-2"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white text-sm sm:text-base md:text-lg font-medium tracking-tight"
        >
          BLOCKCHAIN IN FOCUS
        </motion.span>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          src={TEXT_FRAME}
          className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[55%] h-auto"
          alt="Text Frame"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-[160px] h-[48px] rounded-lg px-5 py-3 bg-white text-[#111112] shadow-box-shadow backdrop-blur-[10px] font-medium text-sm sm:text-base"
          >
            Book a free call
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-[160px] h-[48px] rounded-lg text-white border border-white shadow-box-shadow backdrop-blur-[10px] font-medium text-sm sm:text-base"
          >
            See our work
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
