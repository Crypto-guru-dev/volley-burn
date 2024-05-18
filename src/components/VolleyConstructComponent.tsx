import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {};
const text =
  "Volley chain is EVM chain that use POB(Proof-Of-Burn) consensus algorithm. Volley achieves ~3s average block times with a Proof-of-Burn consensus algorithm. Specifically, it uses something called Proof of Burnt (or POB), where participants burn VOY to become validators. If they propose a valid block, they&apos;ll receive transaction fees from X the transactions included in it. The market cap of X and VOY will be the same. Whenever VOY is bought and burned the funds are used to support the price of X.";

const VolleyConstructComponent = (props: Props) => {
  const volleyContainer = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ current: volleyContainer.current });

  return (
    <div className=" relative w-full flex flex-col -translate-y-56 z-[19] ">
      <div className="relative self-stretch flex flex-row items-start justify-end text-justify font-otomanopee-one">
        <div className="relative w-full sm:w-11/12 md:w-3/4 mx-auto shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)]  flex flex-col items-end justify-start gap-10 z-[17] p-0.5  bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-[2rem] md:rounded-[5rem]">
          <div className="size-full bg-[linear-gradient(180deg,_#13134F_35.78%,_#4F018B_100%)] rounded-[2rem] md:rounded-[5rem] p-2 md:p-5">
            <div className="relative w-full mx-auto shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-10 z-[17] p-0.5  bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-[2rem] md:rounded-[5rem]">
              <div className="size-full bg-[linear-gradient(180deg,_#13134F_35.78%,_#4F018B_100%)] rounded-[2rem] md:rounded-[5rem] p-2 md:p-5">
                <div className="relative w-full mx-auto shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)] flex flex-col items-end justify-start gap-10 z-[17] p-0.5  bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-[2rem] md:rounded-[5rem]">
                  <div className="size-full bg-[linear-gradient(180deg,_#2A087B_0%,_#02310C_100%)] rounded-[2rem] md:rounded-[5rem] p-2 md:p-5">
                    <div className="relative w-full mx-auto flex flex-col items-end justify-start gap-10 z-[17] p-5 py-8 md:p-12 md:py-14 ">
                      <div className="w-full flex flex-col items-end justify-start gap-5 pt-24 md:pt-36">
                        <motion.div
                          initial={{ opacity: 0, x: "20%" }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                          viewport={{ once: true }}
                          className="w-full flex flex-col  md:flex-row flex-wrap items-center justify-start gap-2 md:gap-10"
                        >
                          <img
                            className=" h-32 md:h-52 w-32 relative z-[18]"
                            loading="lazy"
                            alt=""
                            src="/layer-x0020-1.svg"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start shrink-0">
                            <div className="w-full text-xs sm:text-sm md:text-base relative inline-block shrink-0 z-[18] ">
                              With proof of burn, miners show that they have
                              burned (destroyed) some coins to prove their
                              commitment to the network. This can help to secure
                              the network and prevent double-spending. Proof of
                              burn is a type of consensus algorithm that is used
                              by some cryptocurrencies. With proof of burn,
                              miners show that they have burned (destroyed) some
                              coins to prove their commitment to the network.
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="flex flex-col gap-2 md:px-10">
                        <motion.div
                          initial={{ opacity: 0, x: "-20%" }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                          viewport={{ once: true }}
                          className="w-full flex flex-col md:flex-row items-center gap-x-10 justify-end font-nunito "
                        >
                          <div className="h-24 sm:h-32 md:h-52 flex flex-col items-start justify-start">
                            <img
                              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[18] "
                              loading="lazy"
                              alt=""
                              src="/subtract.svg"
                            />
                          </div>
                          <div className="w-full flex flex-col items-start justify-start gap-2">
                            <h1 className="relative text-inherit text-left font-black font-inherit  z-[18] ">
                              How does Proof of Burn work?
                            </h1>
                            <div className="self-stretch flex flex-row items-start justify-end py-0 md:pr-[29px] pl-0  max-w-full text-xl">
                              <div className="w-full flex flex-row items-start justify-start gap-2 md:gap-10">
                                <div className="w-full relative font-medium inline-block  z-[18] text-xs sm:text-sm md:text-base">
                                  To participate in a proof of burn system,
                                  miners must send some coins to an un-spendable
                                  address. This act of burning the coins serves
                                  as proof of their commitment to the network.
                                  The more cash burned, the more committed the
                                  miner is considered to be. Over time, the
                                  proof of burn algorithm can help to secure the
                                  network as it becomes stringent for attackers.
                                  This is because they would need to control
                                  most of the mining power and have a large
                                  number of coins they are willing to burn.
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: "20%" }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                          className="w-full flex flex-row items-start justify-end  font-nunito "
                        >
                          <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-10">
                            <div className="h-28 sm:h-32 md:h-52 flex flex-col items-start justify-center">
                              <img
                                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[18] mq1050:self-stretch mq1050:w-auto"
                                alt=""
                                src="/vector-8.svg"
                              />
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-center gap-2">
                              <h1 className="relative text-inherit font-black font-inherit inline-block max-w-full z-[18] ">
                                <p className="m-0">What Are The Benefits Of</p>
                                <p className="m-0">Proof Of Burn?</p>
                              </h1>
                              <div className="self-stretch  relative font-medium inline-block shrink-0 z-[18] text-sm md:text-base">
                                Proof of burn can help to secure a network and
                                prevent double-spending. However, it can also
                                make it more expensive for attackers to mount a
                                51% attack.
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 hidden md:flex z-20">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute top-[200px] left-[10px] size-[100px] z-[18] hover:scale-110 duration-300 ease-out transition-all transform"
              alt=""
              src="/group-15.svg"
            />
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-0px] -left-24 size-[120px] z-[20]"
              alt=""
              src="/group-19.svg"
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute top-[135px] -right-20 w-[70px] h-[80px] z-[15]"
              loading="lazy"
              alt=""
              src="/group-20.svg"
            />
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute top-[600px] -right-14 size-[100px] z-[17]"
              loading="lazy"
              alt=""
              src="/group-17.svg"
            />
          </div>
        </div>
      </div>
      <div className="relative volley-construct w-full flex flex-row items-start justify-center py-10">
        <div className="w-full flex flex-col items-center justify-start gap-5 ">
          <div className="w-full  flex flex-row items-start justify-center py-0 px-5  max-w-full">
            <img
              className="h-[34.9px] w-[33.9px] relative z-[15]"
              alt=""
              src="/-900224208-1.svg"
            />
          </div>
          <motion.div
            ref={volleyContainer}
            className=" flex flex-col items-center justify-start gap-3"
          >
            <div className="self-stretch flex flex-row items-center justify-center max-w-full gap-5">
              <div className="min-w-[680px] flex flex-row items-end justify-start gap-[48.4px] max-w-full mq750:flex-wrap mq750:gap-[24px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="h-[230.8px] flex flex-col items-start justify-start"
                >
                  <img
                    className="w-[124px] h-[130px] relative object-contain shrink-0 z-[14]"
                    alt=""
                    src="/-840030944-2@2x.png"
                  />
                </motion.div>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="h-[400px] md:h-[550px] flex-1 relative max-w-full overflow-hidden shrink-0 z-[15]"
                  loading="lazy"
                  alt=""
                  src="/group-14.svg"
                />
              </div>
              <div className="h-[421.8px] flex flex-col items-start justify-start">
                <div className="h-[352.9px] flex flex-row items-end justify-start gap-[11.7px]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    className="self-stretch flex flex-col items-start justify-start"
                  >
                    <motion.img
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1,
                        delay: 1,
                        ease: "easeInOut",
                      }}
                      className="w-[104.3px] h-[107.4px] relative z-[14]"
                      alt=""
                      src="/-900230424-1.svg"
                    />
                  </motion.div>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                    className="h-[34.9px] w-[33.9px] relative z-[14]"
                    alt=""
                    src="/-900224208-2.svg"
                  />
                </div>
              </div>
            </div>
            <motion.div className="w-4/6 md:w-5/6  flex flex-col items-center justify-center gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="text-4xl font-bold font-inherit z-[14] "
              >
                Volley Chain Construct
              </motion.h1>
              <motion.p className="w-2/3 relative z-[14] text-center text-xs sm:text-sm md:text-base ">
                <AnimatePresence mode="wait">
                  {text.split(" ").map((word, index) => {
                    return (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                          root: volleyContainer.current as any,
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.03 + 1,
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        {word}{" "}
                      </motion.span>
                    );
                  })}
                </AnimatePresence>
              </motion.p>
            </motion.div>
          </motion.div>
          <div className="randomness w-full flex flex-row items-center justify-center">
            <button className="self-stretch hover:scale-105 duration-300 ease-out transition-all transform [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-center justify-center    relative gap-5 z-[13]  p-1 bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-xl">
              <div className="flex items-center text-xl justify-center gap-x-3 rounded-lg px-10 md:px-20 py-1 md:py-3 bg-[linear-gradient(180deg,_#8203E5_0%,_#03AC81_100%)]">
                <img
                  className="size-10 max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector-9.svg"
                />

                <div className="flex flex-col items-start relative z-[1] gap-y-1">
                  <h3 className="font-bold text-lg md:text-xl">Randomness</h3>
                  <p className="uppercase font-light text-sm md:text-base">
                    secured with chain
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolleyConstructComponent;
