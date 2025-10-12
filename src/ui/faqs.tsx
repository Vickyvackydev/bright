import React, { useState } from "react";
import { BLACK_ARROW_RIGHT, BRIGHTY_2, PLUS_ICON, MINUS_ICON } from "../assets";

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
    <div className="w-full px-10 py-20 bg-[#F1F1F1]">
      <div className="w-full border-t-2 border-[#111112]">
        <span className="text-sm font-semibold text-[#111112] mt-5">FAQs</span>
      </div>
      <div className="mt-10 flex items-start justify-between gap-x-24">
        <div className="flex flex-col items-start gap-y-8 w-[455px]">
          <div className="flex items-center gap-x-2">
            <img
              src={BRIGHTY_2}
              className="w-[70px] h-[70px] rounded-xl"
              alt=""
            />
            <div className="flex flex-col">
              <span className="text-xl font-medium text-[#111112] tracking-tighter">
                Bright Emmanuel
              </span>
              <span className="text-[16px] font-normal text-[#11111299] tracking-tighter">
                Professional Photographer
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 leading-6">
            <span className="text-xl font-medium text-[#111112] tracking-tighter">
              Didn’t find your answer?
            </span>
            <span className="text-[16px] font-normal text-[#11111299] tracking-tighter">
              No worries! If you have any other questions or need more
              information, feel free to reach out directly. I’m always happy to
              help and make sure you feel confident before booking your session.
              Let’s chat!
            </span>
          </div>
          <div>
            <div className="flex items-center mt-52 gap-x-10 border-b-2 pb-3 cursor-pointer">
              <span className="text-[22px] font-semibold text-[#111112] tracking-tighter">
                Ask me a question
              </span>
              <img
                src={BLACK_ARROW_RIGHT}
                className="w-[16px] h-[16px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-y-7 w-6xl">
          <span className="text-7xl font-medium text-[#111112] tracking-tighter">
            Any questions?
          </span>
          <div className="mt-10 w-full flex flex-col gap-y-5">
            {myFaqs.map((item, i) => (
              <div key={i} className="border-b border-[#1111121A] pb-5">
                <div key={i} className="flex items-start justify-between">
                  <span className="text-[22px] font-semibold text-[#111112] tracking-tighter">
                    {item.question}
                  </span>
                  <div
                    onClick={() => setSelectedFaq(selectedFaq === i ? null : i)}
                    className="w-[48px] bg-white cursor-pointer h-[48px] rounded-full flex items-center justify-center"
                  >
                    <img
                      src={selectedFaq === i ? MINUS_ICON : PLUS_ICON}
                      className="w-[16px] h-[16px]"
                      alt=""
                    />
                  </div>
                </div>
                {selectedFaq === i && (
                  <span className="text-[16px] font-normal text-[#11111299] tracking-tighter">
                    {item.answer}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
