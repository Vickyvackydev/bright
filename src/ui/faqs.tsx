import { useState } from "react";
import { BLACK_ARROW_RIGHT, BRIGHTY_2, PLUS_ICON, MINUS_ICON } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const myFaqs = [
  {
    question: "What kind of projects do you work with?",
    answer:
      "I work with crypto/fintech startups, exchanges, DAOs, NFT projects, Layer-1/Layer-2 ecosystems, and blockchain events that want growth, community and real adoption.",
  },
  {
    question:
      "Do you only do marketing or can you help with full strategy and launch?",
    answer:
      "Both. I provide end-to-end support — from pre-launch strategy and positioning to social growth, storytelling, partnerships, and community activation.",
  },
  {
    question: "Can you help build and manage a community from zero?",
    answer:
      "Yes. I handle strategy, engagement frameworks, recruitment of moderators, onboarding systems, and long-term community culture building both online and offline.",
  },
  {
    question: "Do you work on long-term retainers or short launch campaigns?",
    answer:
      "Both. I support launch sprints, 30–90 day growth pushes, and long-term retainers for projects looking to scale sustainably.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple — book a free call. We’ll discuss your goals, stage, timeline, and what a realistic roadmap looks like before committing to any engagement.",
  },
];
function Faqs() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  return (
    <div className="w-full px-6 md:px-10 py-16 md:py-20 bg-[#F1F1F1]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full border-t-2 border-[#111112]"
      >
        <span className="text-sm font-semibold text-[#111112] mt-5 block">
          FAQs
        </span>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row items-start justify-between gap-16 xl:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-start gap-y-8 w-full lg:max-w-[455px]"
        >
          {/* Profile */}
          <div className="flex items-center gap-x-3 sm:gap-x-4">
            <img
              src={BRIGHTY_2}
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-xl object-cover"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-medium text-[#111112] tracking-tighter">
                Bright Emmanuel
              </span>
              <span className="text-[15px] sm:text-[16px] font-normal text-[#11111299] tracking-tighter">
                Growth Marketer
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-y-2 leading-6">
            <span className="text-lg sm:text-xl font-medium text-[#111112] tracking-tighter">
              Didn’t find your answer?
            </span>
            <span className="text-[15px] sm:text-[16px] font-normal text-[#11111299] tracking-tighter">
              No worries! If you have any other questions or need more
              information, feel free to reach out directly. I’m always happy to
              help and make sure you feel confident before booking your session.
              Let’s chat!
            </span>
          </div>

          {/* Button */}
          <motion.div
            className="flex items-center mt-16 sm:mt-24 md:mt-40 lg:mt-52 gap-x-6 border-b-2 pb-3 cursor-pointer"
            whileHover={{
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://t.me/brightafia", "_blank")}
          >
            <motion.span
              className="text-lg sm:text-[22px] font-semibold text-[#111112] tracking-tighter"
              whileHover={{
                color: "#333333",
                transition: { duration: 0.2 },
              }}
            >
              Ask me a question
            </motion.span>
            <motion.img
              src={BLACK_ARROW_RIGHT}
              className="w-[14px] sm:w-[16px] h-[14px] sm:h-[16px]"
              alt=""
              whileHover={{
                x: 4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right Column (FAQs) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto flex flex-col gap-y-6 w-full lg:max-w-4xl"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium text-[#111112] tracking-tighter">
            Any questions?
          </span>

          <div className="mt-6 md:mt-10 w-full flex flex-col gap-y-5">
            {myFaqs.map((item, i) => (
              <motion.div
                key={i}
                className="border-b border-[#1111121A] pb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between gap-x-4">
                  <span className="text-lg sm:text-[22px] font-semibold text-[#111112] tracking-tighter">
                    {item.question}
                  </span>
                  <div
                    onClick={() => setSelectedFaq(selectedFaq === i ? null : i)}
                    className="min-w-[40px] min-h-[40px] bg-white cursor-pointer rounded-full flex items-center justify-center shadow-sm"
                  >
                    <img
                      src={selectedFaq === i ? MINUS_ICON : PLUS_ICON}
                      className="min-w-[16px] min-h-[16px]"
                      alt=""
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {selectedFaq === i && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="block text-[15px] sm:text-[16px] font-normal text-[#11111299] tracking-tighter mt-3"
                    >
                      {item.answer}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Faqs;
