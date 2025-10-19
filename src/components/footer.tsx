import { MEASURE_GRAPHIC, NAME } from "../assets";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

function Footer() {
  const handleScrollToElem = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  return (
    <div
      id="contact"
      className="w-full bg-[#111112] h-full relative py-16 sm:py-20 px-4 sm:px-6 md:px-10"
    >
      <motion.img
        src={MEASURE_GRAPHIC}
        className="w-full absolute top-0"
        alt=""
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="flex w-full items-start md:items-center justify-between gap-10 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-[65%] flex items-start md:items-center justify-between gap-8 md:gap-x-10 flex-col md:flex-row"
        >
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <span className="text-[#FFFFFF99] font-medium text-xs sm:text-sm tracking-tighter">
              Ready to capture the <br /> moments that matter most?
            </span>
            <span className="text-white font-medium text-xl sm:text-[26px] tracking-tighter leading-7 sm:leading-8">
              Let’s make it happen. <br /> Contact me today!
            </span>
          </div>
          <div className="flex flex-col gap-y-3 sm:gap-y-4">
            <span className="text-[#FFFFFF99] font-medium text-xs sm:text-sm tracking-tighter">
              {"Lets talk".toUpperCase()}
            </span>

            <a href="mailto:bright.tech86@gmail.com">
              <span className="text-white font-medium text-3xl sm:text-5xl underline tracking-tighter break-all">
                bright.tech86@gmail.com
              </span>
            </a>
            <div className="flex flex-col">
              <span className="text-[#FFFFFF99] font-semibold text-xs sm:text-sm tracking-tighter">
                growth marketer
              </span>
              <span className="text-white font-semibold text-xs sm:text-sm tracking-tighter">
                base in lagos nigeria
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.08,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          className="flex flex-col gap-y-2 text-lg sm:text-2xl font-medium text-white md:mr-[5rem]"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition-colors duration-200 hover:text-gray-300"
            onClick={() => handleScrollToElem("/")}
          >
            Home
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition-colors duration-200 hover:text-gray-300"
            onClick={() => handleScrollToElem("portfolio")}
          >
            Portfolio
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition-colors duration-200 hover:text-gray-300"
            onClick={() => navigate("/projects")}
          >
            Projects
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition-colors duration-200 hover:text-gray-300"
            onClick={() => handleScrollToElem("service")}
          >
            Service
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer transition-colors duration-200 hover:text-gray-300"
            onClick={() => handleScrollToElem("/contact")}
          >
            Contact
          </motion.span>
        </motion.div>
      </div>
      <div className="w-full flex items-start justify-between mt-16 sm:mt-28 md:mt-40 mb-6 sm:mb-10 flex-col md:flex-row gap-6 md:gap-0">
        <motion.img
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={NAME}
          className="w-full md:w-[900px] h-auto"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-start flex-col gap-y-8 sm:gap-y-[10rem]"
        >
          <div className="flex items-start  flex-col gap-y-2 text-xs sm:text-sm font-semibold text-white">
            <a href="https://www.instagram.com/brigaz_afia/#" target="_blank">
              Instagram
            </a>
            <a href="https://x.com/AfiaBrigaz" target="_blank">
              x.com
            </a>
            <a
              href="https://www.linkedin.com/in/bright-afia-703481178/"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://www.tiktok.com/@brigaz_afia" target="_blank">
              Tiktok
            </a>
            <a
              href="https://www.facebook.com/people/Bright-Emmanuel/100075079857314/"
              target="_blank"
            >
              Facebook
            </a>
            <a href="https://t.me/brightafia" target="_blank">
              Telegram
            </a>
          </div>
          <span className="text-[#FFFFFF99] font-semibold text-nowrap text-xs sm:text-sm">
            @ {new Date().getFullYear()} All rights reserved
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
