import React from "react";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-start justify-start p-10 box-border max-w-full text-left text-xl text-white font-oswald">
        <div className="w-11/12 mx-auto flex flex-row items-start justify-between ">
          <div className="w-[161px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[5.4px] text-5xl text-mediumseagreen-200 font-inter">
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
            <div className="relative text-base font-light font-oswald text-white z-[12]">
              <p className="m-0">© {new Date().getFullYear()} Volley Chain.</p>
              <p className="m-0">All rights reserved.</p>
            </div>
          </div>
          <div className="w-[62px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="relative font-semibold inline-block min-w-[51px] z-[12] mq450:text-base">
                TOOLS
              </div>
              <div className="self-stretch relative text-base font-light z-[12]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Swap
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Liquidity
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Pools
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Farm
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Staking
                </p>
                <p className="m-0">Info Tokens</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[7px] pl-0">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="relative font-semibold inline-block min-w-[93px] z-[12] mq450:text-base">
                ECOSYSTEM
              </div>
              <div className="w-[78px] relative text-base font-light inline-block z-[12]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Migrate
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Burn
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  AMM DEX
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Bridge
                </p>
                <p className="m-0">Perpetual DEX</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[23px] pl-0">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="relative font-semibold inline-block min-w-[85px] z-[12] mq450:text-base">
                RESOURCE
              </div>
              <div className="relative text-base font-light z-[12]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  About Us
                </p>
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  Community
                </p>
                <p className="m-0">Security Audit</p>
              </div>
            </div>
          </div>
          <div className="w-[342px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
              <div className="relative font-semibold inline-block min-w-[93px] z-[12] mq450:text-base">
                SUBSCRIBE
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base text-gray">
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs bg-white box-border flex flex-row items-start justify-between py-0 pr-1 pl-[18px] max-w-full gap-[20px] z-[12] border-[2px] border-solid border-aquamarine-300 mq450:flex-wrap">
                  <div className="self-stretch w-[342px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs bg-white box-border hidden max-w-full border-[2px] border-solid border-aquamarine-300" />
                  <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                    <div className="relative font-light inline-block min-w-[78px] z-[13]">
                      Email Address
                    </div>
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
      <div className="self-stretch [background:linear-gradient(180deg,_#46007e,_#270e63)] flex flex-row items-start justify-between pt-[25px] pb-[25.3px] pr-[107px] pl-[35px] box-border relative max-w-full gap-[20px] z-[12] text-left text-base text-gray font-oswald mq450:flex-wrap mq450:pr-5 mq450:box-border mq750:pr-[53px] mq750:box-border">
        <div className="h-[91px] w-[1440px] relative [background:linear-gradient(180deg,_#46007e,_#270e63)] hidden max-w-full z-[0]" />
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <div className="relative inline-block min-w-[86px] z-[13]">
            Privacy Policy
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[22px]">
          <div className="h-[40.7px] w-[40.7px] relative rounded-md box-border z-[1] border-[2px] border-solid border-mediumseagreen-100">
            <img
              className="absolute h-[53.07%] w-[65.36%] top-[24.82%] right-[15.97%] bottom-[22.11%] left-[18.67%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/socmed-1.svg"
            />
            <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
          </div>
          <div className="h-[40.7px] w-[40.7px] relative rounded-md box-border z-[1] border-[2px] border-solid border-mediumseagreen-100">
            <img
              className="absolute h-[56.27%] w-[68.55%] top-[21.87%] right-[15.97%] bottom-[21.87%] left-[15.48%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector-12.svg"
            />
            <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
          </div>
        </div>
        <div className="h-[40.7px] w-[40.7px] absolute !m-[0] top-[25px] right-[44px] rounded-md box-border z-[13] border-[2px] border-solid border-mediumseagreen-100">
          <div className="absolute top-[0px] left-[0px] rounded-md box-border w-full h-full hidden border-[2px] border-solid border-mediumseagreen-100" />
          <img
            className="absolute h-[60.44%] w-[60.44%] top-[20.88%] right-[20.88%] bottom-[18.67%] left-[18.67%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-13.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
