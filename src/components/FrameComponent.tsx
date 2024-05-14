import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
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
  );
};

export default FrameComponent;
