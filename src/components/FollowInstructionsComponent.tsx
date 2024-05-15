import { FunctionComponent } from "react";
import StepSection from "./StepSection";

const FollowInstructionsComponent: FunctionComponent = () => {
  const instructions = [
    {
      id: 1,
      title: "Volley Swap",
    },
    {
      id: 2,
      title: "NFT Marketplace",
    },
    {
      id: 3,
      title: "Volley Social Media",
    },
    {
      id: 4,
      title: "Volley E-Commerce",
    },
    {
      id: 5,
      title: "Volley AI",
    },
    {
      id: 6,
      title: "Stable Coin",
    },
  ];

  return (
    <div className="w-full flex flex-row items-start justify-center text-center  text-white font-oswald -translate-y-40">
      <div
        style={{
          background:
            "linear-gradient(180deg, #270E63 0%, rgba(0, 0, 0, 0) 100%), #02C391",
          mixBlendMode: "normal",
        }}
        className="mx-auto w-full flex flex-col items-start justify-start max-w-full rounded-[5rem]"
      >
        <div className="self-stretch flex flex-col items-center justify-center gap-y-10">
          <div className="flex flex-col  rounded-[5rem]">
            <div className="w-full min-h-[800px] flex flex-col items-start justify-start gap-6 px-10 pt-10 mx-auto [clip-path:_polygon(0_0,_100%_0,_100%_60%,_50%_80%,_0_60%)] bg-[linear-gradient(180deg,_#8D00FF_0%,_#410075_100%)] rounded-[5rem]">
              <div className="w-full flex flex-row items-start justify-center py-0 px-5 ">
                <h1 className=" relative  font-bold font-inherit inline-block z-[16] text-xl">
                  <p className="m-0">
                    Follow These Steps to Build an EVM Chain
                  </p>
                  <p className="m-0">With a POB (Proof of Burn) System:</p>
                </h1>
              </div>
              <div className="w-full flex flex-row flex-wrap items-start justify-center gap-20">
                <StepSection
                  subtract="/subtract-1.svg"
                  specifyTheRequirements="Specify the Requirements"
                  defineTheChainSpecificati="Define the chain specifications, such as block time limits and mining  rewards."
                  decideHowToImplementTheTo="Decide how to implement the token burning mechanism and  distribute the main currency."
                />
                <StepSection
                  subtract="/subtract-2.svg"
                  specifyTheRequirements="Structure Arrangement"
                  defineTheChainSpecificati="Determine the structure of the original currency and the token to be burned for mining."
                  decideHowToImplementTheTo="Consider security aspects and ensure fair distribution of the currencies."
                />
                <StepSection
                  subtract="/subtract-3.svg"
                  specifyTheRequirements="Develop Smart Contracts"
                  defineTheChainSpecificati="Create smart contracts that execute the POB mechanism and define how tokens are burned and new currencies are issued."
                  decideHowToImplementTheTo=""
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center min-h-[100px] -translate-y-full relative">
              <div className="w-full flex flex-col items-start justify-start">
                <div className="self-stretch [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-center pt-[26px] px-5 pb-[25.1px] relative gap-[20px] z-[13] mq450:flex-wrap">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-4.svg"
                  />
                  <img
                    className="h-[48.9px] w-12 relative z-[1]"
                    alt=""
                    src="/group-23-1.svg"
                  />
                  <button className="flex flex-col items-start text-xl justify-start ">
                    <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1] ">
                      VOY zkEVM Explorer
                    </h3>
                  </button>
                </div>
              </div>

              <div className="self-stretch flex flex-row items-start justify-start absolute inset-0 overflow-visible p-20 top-0 -translate-y-[300px]">
                <div className="w-full mx-auto flex flex-row flex-wrap items-end justify-between">
                  <div className="w-[20%] h-[500px]  flex flex-col items-start justify-start gap-10">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-between gap-[20px]">
                      <div className="self-stretch w-[111px] flex flex-col items-start justify-start">
                        <img
                          className="self-stretch h-[221.4px] relative max-w-full overflow-hidden shrink-0 z-[16]"
                          loading="lazy"
                          alt=""
                          src="/-566180848.svg"
                        />
                      </div>
                      <img
                        className="h-[94.1px] w-20 relative z-[16]"
                        loading="lazy"
                        alt=""
                        src="/-566185384.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[27px]">
                      <img
                        className="h-[81px] w-[41.2px] relative z-[15]"
                        alt=""
                        src="/-566182888.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[30%] h-[500px] flex flex-col items-start justify-end">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border max-w-full text-left text-5xl">
                        <div className="flex-1 flex flex-row items-end justify-start relative gap-[94px] max-w-full mq450:gap-[23px] mq750:flex-wrap mq750:gap-[47px]">
                          <img
                            className="h-[98.2px] w-[89.7px] absolute !m-[0] top-[85px] right-[0px] z-[16]"
                            loading="lazy"
                            alt=""
                            src="/-566177296.svg"
                          />
                          <div className="h-[321px] w-[136px] flex flex-row items-start justify-start gap-[7px]">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[166px] px-0 pb-0">
                              <img
                                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[15]"
                                alt=""
                                src="/-566180848-1.svg"
                              />
                            </div>
                            <img
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
        <div className="w-full bg-[transparent] translate-y-20 shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)]  flex flex-row items-start justify-center whitespace-nowrap z-[15]  p-0.5 bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-[3rem]">
          <div className="w-full flex flex-row items-start justify-start py-5 px-6  text-left bg-[linear-gradient(180deg,_#2A087B_0%,_#02310C_100%)] rounded-[3rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-10 py-10 ">
              <div className="self-stretch flex flex-row items-start justify-center">
                <h1 className="text-4xl relative text-inherit font-bold font-inherit z-[15] ">
                  Our Ecosystem
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-8 ">
                <div className="self-stretch flex flex-row items-start justify-center gap-10">
                  <div className="w-5/6 grid grid-cols-3 gap-10">
                    {instructions.map((item) => {
                      return (
                        <button
                          key={item.id}
                          className="cursor-pointer  bg-[transparent]  shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)]  flex flex-row items-start justify-center whitespace-nowrap z-[15]  p-0.5 bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-lg"
                        >
                          <div className="[background:linear-gradient(180deg,_#2d087b,_#310202)] size-full px-5 py-5 rounded-lg">
                            <b className="relative text-xl inline-block font-oswald text-white text-left min-w-[116px] z-[16]">
                              {item.title}
                            </b>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowInstructionsComponent;
