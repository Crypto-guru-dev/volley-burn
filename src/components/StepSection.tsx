import { motion } from "framer-motion";
import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StepSectionType = {
  iconPath?: string;
  title: string;
  specifyTheRequirements: string[];
};

const StepSection: FunctionComponent<StepSectionType> = ({
  iconPath,
  title,
  specifyTheRequirements,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 1 }}
      className="w-11/12 lg:w-[40%] mx-auto flex flex-row items-center justify-start gap-5 text-center  text-white font-oswald"
    >
      <div className="size-14 sm:size-16 md:size-20 lg:size-28">
        <img
          className="shrink-0 self-stretch flex-1 relative max-w-full overflow-hidden z-[16]"
          alt=""
          src={iconPath}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-2 shrink-0 ">
        <h1 className="relative text-xl md:text-2xl font-bold font-inherit inline-block max-w-full z-[16] ">
          {title}
        </h1>
        <div className="w-full relative text-base font-orienta text-justify z-[16]">
          <ul className=" pl-5 list-disc">
            {specifyTheRequirements.map((specifyTheRequirement, index) => (
              <li key={index} className="text-pretty text-xs md:text-sm">
                {specifyTheRequirement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default StepSection;
