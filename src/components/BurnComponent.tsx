import { cn } from "@/utils/utils";
import React, { useState } from "react";

type Props = {};

const BurnComponent = (props: Props) => {
  const [currentBalance, setCurrentBalance] = useState(100000000000000);
  const [burnAmount, setBurnAmount] = useState<Number | null>(null);

  const handleBurn = () => {
    // Burn logic
  };

  const handleApprove = () => {
    // Approve logic
  };

  return (
    <div className="w-11/12 max-w-3xl flex flex-col items-start justify-start gap-7">
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
        <div className="self-stretch flex flex-row items-center justify-start md:justify-center">
          <h3 className="relative text-inherit font-bold font-inherit inline-block z-[2] text-xl md:text-2xl">
            VOY BURN
          </h3>
        </div>
        <div className="w-full p-3 md:p-5 bg-midnightblue-100 flex flex-row items-center justify-center box-border max-w-full z-[2] text-xl rounded-xl">
          <div className="relative rounded-mini bg-midnightblue-100 max-w-full">
            <div className="relative font-light z-[1] text-base md:text-lg text-center text-pretty">
              Burn VOY to become Volley chain validator and get reward from
              Volley Chain
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-mini bg-midnightblue-100 flex flex-col items-start justify-start gap-7 md:gap-10 z-[2] text-center p-3 md:p-5 lg:p-8 rounded-xl">
        <div className="w-full relative rounded-mini bg-midnightblue-100 max-w-full">
          <div className="self-stretch relative z-[3] text-sm md:text-base">
            <div className="m-0  ">
              <p>
                <span className="font-inter">
                  Burning Amount to become Validator:{" "}
                </span>
                <b className="font-inter">500,000,000,000 VOY</b>
              </p>
              <p>
                The more VOY burned, the more committed the miner is considered
                to be.
              </p>
            </div>
            <br />
            <p className="m-0 text-xl md:text-2xl font-semibold">
              Reward Amount: 0.001V2X
            </p>
          </div>
        </div>

        <div className="self-stretch flex flex-row items-start justify-start  max-w-full text-left text-xl text-slategray-200">
          <div className="flex-1 flex flex-col items-start justify-start gap-1 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end">
              <p className="relative z-[1] text-sm md:text-base">
                Balance: {Intl.NumberFormat("en-US").format(currentBalance)} VOY
              </p>
            </div>
            <label
              htmlFor="input"
              className={cn(
                "relative self-stretch rounded-xl md:rounded-3xl bg-midnightblue-200 py-2 sm:py-3 md:py-5 px-5 md:px-10 border-2  flex flex-row items-center justify-between  max-w-full gap-5 z-[1] text-white border-slategray-200  has-[:focus]:border-mediumspringgreen-100 transition-all duration-300 ease-in-out",
                ""
              )}
            >
              <img
                className="h-14 w-12 md:h-22 md:w-16 relative z-[2]"
                loading="lazy"
                alt=""
                src="/group-1569.svg"
              />
              <div className="flex flex-row items-center justify-start gap-x-1">
                <input
                  id="input"
                  onChange={(event) => {
                    setBurnAmount(Number(event.target.value));
                  }}
                  max={currentBalance}
                  placeholder="50,000,000"
                  className="relative font-bold z-[2] text-xl sm:text-2xl md:text-3xl xl:text-4xl text-right text-white bg-transparent border-0 border-transparent outline-none size-full hide-arrow"
                  inputMode="numeric"
                  type="number"
                  min={0}
                />
                <p className=" font-bold text-slategray-100 text-xl sm:text-2xl md:text-3xl xl:text-4xl">
                  VOY
                </p>
              </div>
            </label>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-px box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[29px] max-w-full">
            <button
              onClick={handleApprove}
              className="h-10 md:h-14 cursor-pointer  bg-midnightblue-200 duration-200 flex-1 uppercase font-semibold rounded-lg flex flex-row items-center justify-center z-[1] border-2 border-slategray-200  hover:border-2  hover:border-mediumspringgreen-100 hover:text-mediumspringgreen-100"
            >
              APROVE
            </button>
            <button
              onClick={handleBurn}
              className="h-10 md:h-14 cursor-pointer  bg-midnightblue-200 duration-200 flex-1 uppercase font-semibold rounded-lg flex flex-row items-center justify-center z-[1] border-2 border-slategray-200  hover:border-2  hover:border-mediumspringgreen-100 hover:text-mediumspringgreen-100"
            >
              BURN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnComponent;
