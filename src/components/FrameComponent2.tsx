import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="self-stretch [background:linear-gradient(180deg,_#8b01fb,_#270e63)] flex flex-col items-center justify-start pt-4 px-5 pb-0 box-border gap-[16px] max-w-full z-[14] text-center text-13xl text-white font-oswald">
      <div className="w-[1439px] h-[529px] relative [background:linear-gradient(180deg,_#8b01fb,_#270e63)] hidden max-w-full" />
      <div className="w-[977px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[357px] relative text-inherit inline-block z-[15] font-inherit mq450:text-lgi mq1050:text-7xl">
          <span className="font-light">{`Get in Touch `}</span>
          <span className="font-semibold">To Find Out More</span>
        </h1>
      </div>
      <form className="m-0 w-[977px] rounded-t-60xl rounded-b-none [background:linear-gradient(180deg,_rgba(141,_0,_255,_0.61),_rgba(3,_182,_136,_0))] flex flex-col items-end justify-start pt-5 pb-[27px] pr-[107px] pl-[106px] box-border gap-[19px] max-w-full z-[15] mq450:pb-5 mq450:box-border mq750:pl-[26px] mq750:pr-[26px] mq750:box-border mq1050:pl-[53px] mq1050:pr-[53px] mq1050:box-border">
        <div className="w-[977px] h-[450px] relative rounded-t-60xl rounded-b-none [background:linear-gradient(180deg,_rgba(141,_0,_255,_0.61),_rgba(3,_182,_136,_0))] hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[38px] max-w-full mq450:gap-[19px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[236px] max-w-full">
                <div className="relative text-base font-light font-oswald text-white text-center inline-block min-w-[32px] z-[16]">
                  Name
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-indigo box-border flex flex-row items-start justify-start pt-2.5 px-8 pb-[11px] max-w-full z-[16] border-[2px] border-solid border-aquamarine-100">
                    <div className="h-[51px] w-[363px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-indigo box-border hidden max-w-full border-[2px] border-solid border-aquamarine-100" />
                    <input
                      className="w-[132px] [border:none] [outline:none] font-light font-oswald text-base bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 z-[17]"
                      placeholder="what your call yourself..."
                      type="text"
                    />
                  </div>
                  <div className="relative text-base font-light font-oswald text-white text-center inline-block min-w-[71px] z-[16]">
                    Let’s Discuss
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[7px] min-w-[236px] max-w-full">
                <div className="relative text-base font-light font-oswald text-white text-left inline-block min-w-[30px] z-[16]">
                  Email
                </div>
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-indigo box-border flex flex-row items-start justify-start pt-2.5 px-[23px] pb-[11px] max-w-full z-[16] border-[2px] border-solid border-aquamarine-300">
                  <div className="h-[51px] w-[363px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-indigo box-border hidden max-w-full border-[2px] border-solid border-aquamarine-300" />
                  <input
                    className="w-[59px] [border:none] [outline:none] font-light font-oswald text-base bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 z-[17]"
                    placeholder="your mail..."
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-indigo box-border flex flex-row items-start justify-start pt-2 px-8 pb-[106px] max-w-full z-[16] border-[2px] border-solid border-aquamarine-200">
              <div className="h-36 w-[764px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-indigo box-border hidden max-w-full border-[2px] border-solid border-aquamarine-200" />
              <input
                className="w-[97px] [border:none] [outline:none] font-light font-oswald text-base bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 z-[17]"
                placeholder="write something..."
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[13px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="w-[22px] h-5 relative bg-white z-[16]" />
            </div>
            <div className="relative text-mini font-light font-oswald text-white text-left z-[16]">
              <p className="m-0">
                As part of our terms of use, you acknowledge you will receive
                occasional updates via email relating to your activity or
                requests. For further
              </p>
              <p className="m-0">
                {`details read our `}
                <a
                  className="text-[inherit]"
                  href="https://www.mxc.org/terms-and-conditions"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">terms</span>
                </a>
                {` and `}
                <a
                  className="text-[inherit]"
                  href="https://www.mxc.org/privacy-policy"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    privacy policy
                  </span>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer pt-[11px] pb-2.5 pr-[58px] pl-[61px] bg-indigo w-[169px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs box-border flex flex-row items-start justify-start z-[16] border-[2px] border-solid border-aquamarine-300 hover:bg-darkorchid-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-mediumseagreen-400">
          <div className="h-[51px] w-[169px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs bg-indigo box-border hidden border-[2px] border-solid border-aquamarine-300" />
          <div className="relative text-base font-semibold font-oswald text-white text-left inline-block min-w-[46px] z-[17]">
            Submit
          </div>
        </button>
      </form>
    </div>
  );
};

export default FrameComponent2;
