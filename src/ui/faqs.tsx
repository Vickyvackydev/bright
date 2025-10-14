import { useState } from "react";
import { BLACK_ARROW_RIGHT, BRIGHTY_2, PLUS_ICON, MINUS_ICON } from "../assets";
import { motion, AnimatePresence } from "framer-motion";

const myFaqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "To ensure availability, it’s ideal to book 3-6 months in advance, especially during peak seasons like weddings or holiday events. However, if your date is flexible, feel free to inquire anytime—I’ll do my best to accommodate last-minute requests.",
  },
  {
    question: "What’s your turnaround time?",
    answer:
      "To ensure availability, it’s ideal to book 3-6 months in advance, especially during peak seasons like weddings or holiday events. However, if your date is flexible, feel free to inquire anytime—I’ll do my best to accommodate last-minute requests.",
  },
  {
    question: "How long will it take to receive my photos?",
    answer:
      "To ensure availability, it’s ideal to book 3-6 months in advance, especially during peak seasons like weddings or holiday events. However, if your date is flexible, feel free to inquire anytime—I’ll do my best to accommodate last-minute requests.",
  },
  {
    question: "How much does it cost?",
    answer:
      "To ensure availability, it’s ideal to book 3-6 months in advance, especially during peak seasons like weddings or holiday events. However, if your date is flexible, feel free to inquire anytime—I’ll do my best to accommodate last-minute requests.",
  },
  {
    question: "How many photos do I get?",
    answer:
      "To ensure availability, it’s ideal to book 3-6 months in advance, especially during peak seasons like weddings or holiday events. However, if your date is flexible, feel free to inquire anytime—I’ll do my best to accommodate last-minute requests.",
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
                Professional Photographer
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
          <div className="flex items-center mt-16 sm:mt-24 md:mt-40 lg:mt-52 gap-x-6 border-b-2 pb-3 cursor-pointer transition-all hover:opacity-80">
            <span className="text-lg sm:text-[22px] font-semibold text-[#111112] tracking-tighter">
              Ask me a question
            </span>
            <img
              src={BLACK_ARROW_RIGHT}
              className="w-[14px] sm:w-[16px] h-[14px] sm:h-[16px]"
              alt=""
            />
          </div>
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
                    className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] bg-white cursor-pointer rounded-full flex items-center justify-center shadow-sm"
                  >
                    <img
                      src={selectedFaq === i ? MINUS_ICON : PLUS_ICON}
                      className="w-[14px] sm:w-[16px] h-[14px] sm:h-[16px]"
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
