import { cn } from "@/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  faqItem: {
    question: string;
    answer: string;
  };
};

const FAQItem = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col w-full gap-2 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 md:p-5 bg-midnightblue-100 flex flex-row items-center justify-center box-border max-w-full z-[2] md:text-xl rounded-lg md:rounded-xl"
      >
        <div className="w-full  rounded-mini bg-midnightblue-100 max-w-full flex items-center justify-between">
          <div className="relative font-light z-[1] text-lg text-center">
            {props.faqItem.question}
          </div>
          <div className="text-white p-2 ">
            <FaAngleDown
              className={cn(
                "text-white transition-all duration-300 ease-in-out",
                isOpen ? "transform rotate-180" : ""
              )}
            />
          </div>
        </div>
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, overflow: "hidden" }}
            animate={{ height: isOpen ? "auto" : 0, overflow: "hidden" }}
            exit={{ height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn("pl-4 sm:pl-5 md:pl-6 lg:pl-10 overflow-hidden transform")}
          >
            <div className="w-full p-3 md:p-5 bg-midnightblue-100 flex flex-row items-center justify-start z-[2] text-sm sm:text-base lg:text-lg rounded-lg md:rounded-xl">
              <p className="relative font-light z-[1] text-start">
                {props.faqItem.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
