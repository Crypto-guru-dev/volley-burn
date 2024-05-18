import { FunctionComponent, useRef } from "react";
import StepSection from "./StepSection";
import OurEcosystemComponent from "./OurEcosystemComponent";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const FollowInstructionsComponent: FunctionComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, -500);
  const y2 = useParallax(scrollYProgress, -200);
  const y3 = useParallax(scrollYProgress, -100);

  const instructionsContainerVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="w-full flex flex-row items-start justify-center text-center  bg-transparent font-oswald -translate-y-44 z-10">
      <div className="w-full relative bg-[transparent]  shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)]  flex flex-row items-start justify-center whitespace-nowrap z-[15]  p-0.5 bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-[3rem] md:rounded-[6rem]">
        {/* <div className="[background:linear-gradient(180deg,_#2d087b,_#310202)] size-full p- rounded- pt-10 rounded-[6rem]"> */}
        <div className="bg-[#6002AC] size-full rounded-[3rem] md:rounded-[6rem]">
          <div
            style={{
              background:
                "linear-gradient(180deg, #270E63 0%, rgba(0, 0, 0, 0) 100%), #02C391",
              mixBlendMode: "normal",
            }}
            className="w-full flex flex-col items-start justify-start  rounded-[6rem] md:rounded-[6rem] translate-y-5 z-10"
          >
            <div className="self-stretch flex flex-col items-center justify-center gap-y-10 relative">
              <div className=" flex flex-col rounded-[3rem]  md:rounded-[6rem] ">
                <div className="w-full flex flex-col items-start justify-start gap-6 px-10 pt-10 mx-auto md:[clip-path:_polygon(0_0,_100%_0,_100%_60%,_50%_80%,_0_60%)] pb-[80%] md:pb-[40%] lg:pb-[20%] bg-[linear-gradient(180deg,_#8D00FF_0%,_#410075_100%)] rounded-[3rem] md:rounded-[6rem]">
                  <div className="w-11/12 md:w-5/6 mx-auto flex flex-col gap-5 gap-y-10">
                    <div className="w-full flex flex-row items-start justify-center py-0 px-5 ">
                      <h1 className=" relative  font-bold font-inherit inline-block z-[16] text-xl">
                        <p className="m-0">
                          Follow These Steps to Build an EVM Chain
                        </p>
                        <p className="m-0">
                          With a POB (Proof of Burn) System:
                        </p>
                      </h1>
                    </div>
                    <motion.div
                      initial="hidden"
                      variants={instructionsContainerVariant}
                      whileInView="visible"
                      transition={{ duration: 1 }}
                      className="w-full flex flex-row flex-wrap items-start justify-center gap-10"
                    >
                      <StepSection
                        iconPath="/subtract-1.svg"
                        title="Specify the Requirements"
                        specifyTheRequirements={[
                          "Define the chain specifications, such as block time limits and mining  rewards.",
                          "Decide how to implement the token burning mechanism and  distribute the main currency.",
                        ]}
                      />
                      <StepSection
                        iconPath="/subtract-2.svg"
                        title="Structure Arrangement"
                        specifyTheRequirements={[
                          "Determine the structure of the original currency and the token to be burned for mining.",
                          "Consider security aspects and ensure fair distribution of the currencies.",
                        ]}
                      />
                      <StepSection
                        iconPath="/subtract-3.svg"
                        title="Develop Smart Contracts"
                        specifyTheRequirements={[
                          "Create smart contracts that execute the POB mechanism and define how tokens are burned and new currencies are issued.",
                        ]}
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center min-h-[100px] -translate-y-full relative">
                  <div className="w-full flex items-center justify-center">
                    <button className="self-stretch hover:scale-105 duration-300 ease-out transition-all transform [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-center justify-center    relative gap-5 z-[13]  p-1 bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-xl">
                      <div className="flex items-center text-xl justify-center gap-x-3 rounded-lg px-5 sm:px-10 md:px-20 py-2 md:py-4 bg-[linear-gradient(180deg,_#8203E5_0%,_#03AC81_100%)]">
                        <img
                          className="size-8 md:size-10 overflow-hidden max-h-full"
                          alt=""
                          src="/images/logo-white.svg"
                        />

                        <div className="flex flex-col items-start relative z-[1] gap-y-1">
                          <h3 className="font-bold text-base sm:text-lg md:text-xl">
                            VOY zkEVM Explorer
                          </h3>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="self-stretch flex flex-row items-start justify-start absolute inset-0 overflow-visible p-20 top-0 -translate-y-[500px] md:-translate-y-[300px]">
                    <div className="w-full mx-auto flex flex-row flex-wrap items-end justify-between">
                      <div className="w-[30%] md:w-[20%] h-[600px] md:h-[500px]  flex flex-col items-start justify-start gap-10">
                        <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                          <div className="self-stretch w-[110px] flex flex-col items-start justify-start translate-y-44">
                            <motion.img
                              style={{ y: y1 }}
                              transition={{
                                delay: 1,
                                duration: 1,
                                ease: "easeInOut",
                              }}
                              className="self-stretch h-[221.4px] relative max-w-full overflow-hidden shrink-0 z-[16]"
                              loading="lazy"
                              alt=""
                              src="/-566180848.svg"
                            />
                          </div>
                          <motion.img
                            style={{ y: y2 }}
                            transition={{
                              duration: 1,
                              ease: "easeInOut",
                            }}
                            className="h-[94.1px] w-20 relative z-[16]"
                            loading="lazy"
                            alt=""
                            src="/-566185384.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[27px]">
                          <motion.img
                            style={{ y: y3 }}
                            transition={{
                              duration: 1,
                              ease: "easeInOut",
                              // make springy
                            }}
                            className="h-[81px] w-[41.2px] relative z-[15]"
                            alt=""
                            src="/-566182888.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[30%]  h-[600px] md:h-[500px]  flex flex-col items-start justify-end">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 max-w-full text-left text-5xl">
                            <div className="flex-1 flex flex-row items-end justify-start relative gap-[94px] max-w-full mq450:gap-[23px] mq750:flex-wrap mq750:gap-[47px]">
                              <motion.img
                                initial={{ y: 50 }}
                                whileInView={{ y: 0 }}
                                transition={{
                                  duration: 1,
                                  ease: "easeInOut",
                                }}
                                className="h-[100px] w-[90px] absolute !m-[0] top-[85px] right-[0px] z-[16]"
                                loading="lazy"
                                alt=""
                                src="/-566177296.svg"
                              />
                              <div className="h-[321px] w-[136px] flex flex-row items-start justify-start gap-[7px]">
                                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[166px] px-0 pb-0 translate-y-20">
                                  <motion.img
                                    style={{ y: y1 }}
                                    transition={{
                                      duration: 1,
                                      ease: "easeInOut",
                                    }}
                                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[15]"
                                    alt=""
                                    src="/-566180848-1.svg"
                                  />
                                </div>
                                <motion.img
                                  style={{ y: y2 }}
                                  className="h-[122.1px] flex-1 relative max-w-full overflow-hidden z-[16]"
                                  alt=""
                                  src="/-566182888-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Ecosystem Section */}
            <OurEcosystemComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowInstructionsComponent;
