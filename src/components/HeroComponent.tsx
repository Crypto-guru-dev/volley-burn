import React from "react";
import HeroBgComponent from "./HeroBgComponent";
import HeroBackground from "./HeroBackground";

type Props = {};

const HeroComponent = (props: Props) => {
  return (
    <div className="relative min-h-screen min-w-full border-8 pt-20 flex items-center ">
      <img
        src="/images/hero-total-bg.svg"
        alt=""
        className="absolute inset-0 min-w-full min-h-screen object-cover object-center "
      />
      {/* <HeroBgComponent /> */}
      {/* <HeroBackground /> */}
      {/* <div className="flex absolute top-[91.8px] left-[45px] gap-2">
        <a
          href="#"
          className="relative rounded-md size-10 md:size-12 p-2 z-[1] border-[2px] border-solid border-mediumseagreen-100 flex items-center justify-center"
        >
          <img
            className=" max-w-full overflow-hidden max-h-full"
            alt=""
            src="/socmed.svg"
          />
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
        </a>
        <a
          href="#"
          className="relative rounded-md size-10 md:size-12 p-2 z-[1] border-[2px] border-solid border-mediumseagreen-100 flex items-center justify-center"
        >
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
          <img
            className="absolute h-[60.42%] w-[60.42%] top-[20.83%] right-[20.83%] bottom-[18.75%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-7.svg"
          />
        </a>
        <a
          href="#"
          className="relative rounded-md size-10 md:size-12 p-2 z-[1] border-[2px] border-solid border-mediumseagreen-100 flex items-center justify-center"
        >
          <img
            className="max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-6.svg"
          />
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
        </a>
      </div> */}
      <div className=" w-full h-full flex flex-row items-center justify-center text-mediumseagreen-200 font-inter pb-20">
        <div className="flex flex-col items-center justify-between w-full gap-5">
          <div className="w-min flex flex-col items-start justify-start text-base text-white font-oswald ">
            <div className="w-min flex flex-col items-end justify-start gap-4 text-center font-basic">
              <div className="self-stretch relative uppercase inline-block shrink-0 [text-shadow:2px_0_0_#1ce4a1,_0_2px_0_#1ce4a1,_-2px_0_0_#1ce4a1,_0_-2px_0_#1ce4a1]  z-[10]">
                <p className="text-6xl sm:text-7xl md:text-8xl font-bungee whitespace-nowrap">
                  Layer 2
                </p>
                <div className="flex flex-col items-center text-xl sm:text-2xl md:text-3xl">
                  <p className="m-0">solution of the</p>
                  <p className="m-0">Ethereum blockchain</p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-xl font-oswald">
                <a
                  href=""
                  className="flex flex-row items-start hover:scale-105 transition-all duration-300 ease-in-out justify-start relative gap-2 shrink-0 z-[9] px-14 py-3"
                >
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
