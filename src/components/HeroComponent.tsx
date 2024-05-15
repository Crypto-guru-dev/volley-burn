import React from "react";
import HeroBgComponent from "./HeroBgComponent";

type Props = {};

const HeroComponent = (props: Props) => {
  return (
    <div className="w-full h-full pt-20 flex items-center min-h-screen">
      <HeroBgComponent />
      <div className="flex">
        <button className="absolute top-[91.8px] left-[45px] rounded-md box-border w-12 h-12 z-[1] border-[2px] border-solid border-mediumseagreen-100">
          <img
            className="absolute h-[53.13%] w-[65.42%] top-[24.79%] right-[15.83%] bottom-[22.08%] left-[18.75%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/socmed.svg"
          />
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
        </button>
        <button className="cursor-pointer p-0 bg-[transparent] absolute top-[91.8px] left-[193px] rounded-md box-border w-12 h-12 z-[8] border-[2px] border-solid border-mediumseagreen-100">
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
          <img
            className="absolute h-[60.42%] w-[60.42%] top-[20.83%] right-[20.83%] bottom-[18.75%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-7.svg"
          />
        </button>
        <button className="absolute top-[91.8px] left-[118.5px] rounded-md box-border w-12 h-12 z-[1] border-[2px] border-solid border-mediumseagreen-100">
          <img
            className="absolute h-[56.25%] w-[68.75%] top-[21.88%] right-[15.63%] bottom-[21.88%] left-[15.63%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-6.svg"
          />
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
        </button>
      </div>
      <div className=" w-full h-full flex flex-row items-center justify-center text-mediumseagreen-200 font-inter">
        <div className="flex flex-col items-center justify-between w-full gap-5">
          <div className="w-min flex flex-col items-start justify-start text-base text-white font-oswald ">
            <div className="w-min flex flex-col items-end justify-start gap-4 text-center font-basic">
              <div className="self-stretch relative uppercase inline-block shrink-0 [text-shadow:2px_0_0_#1ce4a1,_0_2px_0_#1ce4a1,_-2px_0_0_#1ce4a1,_0_-2px_0_#1ce4a1]  z-[10]">
                <p className="text-8xl font-bungee whitespace-nowrap">
                  Layer 2
                </p>
                <div className="flex flex-col items-center text-3xl">
                  <p className="m-0">solution of the</p>
                  <p className="m-0">Ethereum blockchain</p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-xl font-oswald">
                <button className="flex flex-row items-start justify-start relative gap-2 shrink-0 z-[9] px-14 py-3">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
                    <img
                      className="w-[24.1px] h-[24.5px] relative z-[1]"
                      alt=""
                      src="/group-23.svg"
                    />
                  </div>
                  <b className="relative inline-block min-w-[69px] z-[1] mq450:text-base">
                    Buy Now
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
