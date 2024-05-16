import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-start justify-start p-5 md:p-10 box-border max-w-full text-left text-xl text-white font-oswald">
        <div className="w-11/12 mx-auto flex flex-row flex-wrap gap-5 items-start justify-between ">
          <div className="w-full md:w-[160px] flex flex-col items-start justify-start  gap-3 text-5xl text-mediumseagreen-200 font-inter">
            <div className="w-[90.8px] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-[38.6px] w-[37.8px] relative shrink-0 [debug_commit:1de1738] z-[12]"
                loading="lazy"
                alt=""
                src="/group-34.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                <h3 className="m-0 self-stretch h-6 relative text-inherit font-normal font-inherit inline-block shrink-0 [debug_commit:1de1738] z-[12] mq450:text-lgi">
                  V<span className="uppercase">OY</span>
                </h3>
              </div>
            </div>
            <div className="relative text-base flex flex-row md:flex-col gap-x-2 font-light font-oswald text-white z-[12]">
              <p className="m-0">© {new Date().getFullYear()} Volley Chain.</p>
              <p className="m-0">All rights reserved.</p>
            </div>
          </div>
          <div className="w-[62px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="relative font-semibold inline-block min-w-[51px] z-[12] mq450:text-base">
                TOOLS
              </div>
              <div className="self-stretch relative flex flex-col text-base font-light z-[12]">
                <Link
                  href="/swap"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Swap
                </Link>
                <Link
                  href="/liquidity"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Liquidity
                </Link>
                <Link
                  href="/pools"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Pools
                </Link>
                <Link
                  href="/farm"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Farm
                </Link>
                <Link
                  href="/staking"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Staking
                </Link>
                <Link href="/info" className="m-0">
                  Info Tokens
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start ">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="relative font-semibold inline-block min-w-[93px] z-[12] mq450:text-base">
                ECOSYSTEM
              </div>
              <div className="flex flex-col relative text-base font-light  z-[12]">
                <Link
                  href="/migrate"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Migrate
                </Link>
                <Link
                  href="/burn"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Burn
                </Link>
                <Link
                  href="/amm"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  AMM DEX
                </Link>
                <Link
                  href="/bridge"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Bridge
                </Link>
                <Link href="/perpetual" className="m-0">
                  Perpetual DEX
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="relative font-semibold inline-block min-w-[85px] z-[12] mq450:text-base">
                RESOURCE
              </div>
              <div className="flex flex-col relative text-base font-light z-[12]">
                <Link
                  href="/"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className={cn(
                    "hover:text-mediumspringgreen-100 duration-300 ease-in-out transition-all py-1"
                  )}
                >
                  Community
                </Link>
                <Link href="/" className="m-0">
                  Security Audit
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[350px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
              <div className="relative font-semibold inline-block min-w-[93px] z-[12] mq450:text-base">
                SUBSCRIBE
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base text-gray">
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs bg-white box-border flex flex-row items-center justify-between  z-[12] border-2 border-aquamarine-300 rounded-md">
                  <div className="flex flex-col items-start justify-start w-full">
                    <input
                      placeholder="Email Address"
                      className="relative font-light inline-block min-w-[78px] size-full p-4 z-[13] outline-none"
                    />
                  </div>
                  <button className="cursor-pointer pt-[13px] pb-3.5 pr-4 pl-5 bg-blue w-[62px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs box-border flex flex-row items-start justify-start z-[13] border-[2px] border-solid border-aquamarine-300">
                    <div className="h-[54px] w-[62px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs bg-blue box-border hidden border-[2px] border-solid border-aquamarine-300" />
                    <img
                      className="h-[21.3px] w-[21.9px] relative z-[14]"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-px box-border max-w-full">
                  <div className="flex-1 relative font-light inline-block max-w-full z-[12]">
                    Subscribe to our newsletter to receive relevant information
                    on the Volley.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch [background:linear-gradient(180deg,_#46007e,_#270e63)] flex flex-row items-center justify-between pt-[25px] pb-[25.3px] pr-[107px] pl-[35px] box-border relative max-w-full gap-[20px] z-[12] text-left text-base text-gray font-oswald mq450:flex-wrap mq450:pr-5 mq450:box-border mq750:pr-[53px] mq750:box-border">
        <div className="flex flex-col items-start justify-start">
          <a href="#" className="whitespace-nowrap">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-5 ">
          <a
            href="#"
            className="size-10 relative flex items-center justify-center rounded-md  z-[1] border-2  border-mediumseagreen-100"
          >
            <img className="" alt="" src="/socmed-1.svg" />
          </a>
          <a
            href="#"
            className="size-10 relative flex items-center justify-center rounded-md  z-[1] border-2  border-mediumseagreen-100"
          >
            <img
              className="absolute h-[56.27%] w-[68.55%] top-[21.87%] right-[15.97%] bottom-[21.87%] left-[15.48%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-12.svg"
            />
          </a>
          <a
            href="#"
            className="size-10 relative flex items-center justify-center rounded-md  z-[1] border-2  border-mediumseagreen-100"
          >
            <img
              className="absolute h-[56.27%] w-[68.55%] top-[21.87%] right-[15.97%] bottom-[21.87%] left-[15.48%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-13.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
