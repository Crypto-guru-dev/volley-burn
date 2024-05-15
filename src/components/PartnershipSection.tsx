import { FunctionComponent } from "react";

const PartnershipSection: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-row items-center py-10  -translate-y-10 justify-center  text-white font-oswald">
      <div className="w-full  max-w-xl flex flex-row gap-4">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-full flex flex-col items-center justify-start gap-5">
            <div className="self-stretch flex flex-row items-center justify-center">
              <h1 className="text-center relative text-2xl font-bold font-inherit z-[14]">
                In Partnertship
              </h1>
            </div>
            <div className="flex flex-col ">
              <div className="w-full grid grid-cols-3 gap-5 place-items-center">
                <img
                  className="h-20 w-full relative overflow-hidden shrink-0 z-[14]"
                  loading="lazy"
                  alt=""
                  src="/web-nuls-logo-2101-1.svg"
                />
                <img
                  className="h-20 w-full shrink-0 z-[14]"
                  loading="lazy"
                  alt=""
                  src="/mainlogodark5f4d2bf1-1.svg"
                />
                <img
                  className="h-20 w-full relative  z-[14] object-contain"
                  loading="lazy"
                  alt=""
                  src="/gzkgspshan5mnrcetd26vijllpb1638472074635-200x200-1@2x.png"
                />
              </div>
              <div className="flex items-center justify-center w-full gap-5 ">
                <div className="w-1/3 flex items-center gap-x-2">
                  <img
                    className="size-10 relative z-[14] object-contain"
                    alt=""
                    src="/vector-10.svg"
                  />

                  <img
                    className="h-10 flex-1 overflow-hidden shrink-0 z-[14]"
                    alt=""
                    src="/group-5.svg"
                  />
                </div>
                <img
                  className="w-1/3 h-10 overflow-hidden shrink-0 object-contain z-[14]"
                  loading="lazy"
                  alt=""
                  src="/downloadwwwww-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
