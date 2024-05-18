import { FunctionComponent } from "react";
import VolleyConstructComponent from "./VolleyConstructComponent";
import { motion } from "framer-motion";

const ProofOfBurn: FunctionComponent = () => {
  // stagger animation with variants
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        delay: 10,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-[1800px] relative w-full mx-auto flex flex-col items-end justify-start gap-5  text-left text-xl text-white font-oswald -translate-y-20 bg-[#270E63] z-10">
      <div className="relative z-10 w-full mx-auto flex flex-col items-end justify-start gap-5 text-left text-xl text-white font-oswald ">
        <div className="proof-of-burn header  w-full flex flex-col items-center justify-between relative  z-[30]  p-0.5 bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-3xl md:rounded-full -translate-y-10 md:-translate-y-1/2">
          <div className="h-full w-full flex flex-col items-center bg-[linear-gradient(180deg,_#13134F_35.78%,_#4F018B_100%)] rounded-3xl md:rounded-full p-5 md:p-0 gap-y-5 md:gap-y-0 ">
            <motion.div
              variants={parentVariant}
              initial="hidden"
              whileInView="visible"
              className="w-11/12 md:w-2/3 mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 place-content-center items-center justify-between md:-translate-y-1/2 "
            >
              <motion.div
                variants={childVariant}
                className="h-16 z-20 relative shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(180deg,_#13134f,_#4f018b)] flex flex-row items-center justify-center  text-left  text-white font-oswald "
              >
                <div
                  className="absolute -inset-[2px] bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,_#13134F_35.78%,_#4F018B_100%)] rounded-md"
                  aria-hidden="true"
                ></div>
                <h2 className="relative inline-block z-[1] ">250+</h2>
                <h2 className="font-bold text-white text-xl shrink-0">+</h2>
                <div className="flex flex-col items-start justify-start text-sm">
                  <div className="relative z-[1]">
                    <p className="m-0">Countries with</p>
                    <p className="m-0">Network Coverage</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={childVariant}
                className="h-full relative shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(180deg,_#13134f,_#4f018b)] flex flex-row items-center justify-center z-[19] text-left  text-white font-oswald "
              >
                <div
                  className="absolute -inset-[2px] bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,_#13134F_35.78%,_#4F018B_100%)] rounded-md"
                  aria-hidden="true"
                ></div>
                <h2 className="relative inline-block z-[1] ">
                  1 Trilion Transaction
                </h2>
              </motion.div>
              <motion.div
                variants={childVariant}
                className="h-16 relative shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(180deg,_#13134f,_#4f018b)] flex flex-row items-center justify-center z-[19] text-left  text-white font-oswald "
              >
                <div
                  className="absolute -inset-[2px] bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,_#13134F_35.78%,_#4F018B_100%)] rounded-md"
                  aria-hidden="true"
                ></div>
                <h2 className="relative inline-block z-[1] ">50+ TB</h2>
                <h2 className="font-bold text-white text-xl shrink-0">+</h2>
                <div className="flex flex-col items-start justify-start text-sm">
                  <div className="relative z-[1]">
                    <p className="m-0">Data </p>
                    <p className="m-0">Acumulated</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <h1 className="self-center text-5xl font-bold font-inherit z-[19] mb-5 md:mb-10">
              Proof Of Burn
            </h1>
          </div>
        </div>

        <VolleyConstructComponent />
      </div>

      <div className="absolute top-0 left-0 right-0 w-full min-w-full z-[2]">
        <img
          className="size-full object-cover  opacity-50 "
          src="/images/volley-chain.svg"
          alt="volley chain bg"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full min-w-full z-[1]">
        <img
          className="size-full object-cover opacity-50 "
          src="/images/gradient-bg.svg"
          alt="volley bg"
        />
      </div>
    </div>
  );
};

export default ProofOfBurn;
