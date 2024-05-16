import { FunctionComponent } from "react";

const GetInTouchSection: FunctionComponent = () => {
  return (
    <div className="self-stretch [background:linear-gradient(180deg,_#8b01fb,_#270e63)] flex flex-col items-center justify-start pt-4 md:px-5 pb-0 box-border gap-[16px] max-w-full z-[14] text-center text-13xl text-white font-oswald">
      <div className="w-[1439px] h-[529px] relative [background:linear-gradient(180deg,_#8b01fb,_#270e63)] hidden max-w-full" />
      <div className="w-full max-w-4xl flex flex-row items-start justify-center">
        <h1 className=" relative text-xl z-[15] font-inherit">
          <span className="font-light">Get in Touch </span>
          <span className="font-semibold">To Find Out More</span>
        </h1>
      </div>
      <form className="w-full max-w-3xl rounded-t-[2rem] md:rounded-t-[5rem] rounded-b-none [background:linear-gradient(180deg,_rgba(141,_0,_255,_0.61),_rgba(3,_182,_136,_0))] flex flex-col items-end justify-start pt-5 gap-5  z-[15] p-5 md:p-10">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
            <div className="w-full flex flex-col md:flex-row flex-wrap items-start justify-start gap-2 gap-x-10">
              <div className="w-full flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                <div className="relative text-base font-light font-oswald text-white text-center inline-block min-w-[32px] z-[16]">
                  Name
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
                  <div className="cursor-pointer p-0.5 bg-gradient-to-t w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center z-[16] to-aquamarine-300 from-darkorchid-100 ">
                    <div className="size-full p-3 text-center bg-indigo   flex flex-row items-center justify-start z-[16] ">
                      <input
                        className="w-full [border:none] [outline:none] font-light font-oswald text-base bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 z-[17]"
                        placeholder="what your call yourself..."
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 flex flex-col items-start justify-start gap-2">
                <div className="relative text-base font-light font-oswald text-white text-left inline-block min-w-[30px] z-[16]">
                  Email
                </div>
                <div className="cursor-pointer p-0.5 bg-gradient-to-t w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center z-[16] to-aquamarine-300 from-darkorchid-100 ">
                  <div className="size-full p-3 text-center bg-indigo   flex flex-row items-center justify-start z-[16] ">
                    <input
                      className="w-full [border:none] [outline:none] font-light font-oswald text-base bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 z-[17]"
                      placeholder="your mail..."
                      type="email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-y-2 ">
              <div className="relative text-base font-light font-oswald text-white text-center inline-block min-w-[71px] z-[16]">
                Let’s Discuss
              </div>
              <div className="cursor-pointer p-0.5 bg-gradient-to-t w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center z-[16] to-aquamarine-300 from-darkorchid-100 ">
                <div className="size-full p-3 text-center bg-indigo   flex flex-row items-center justify-start z-[16] ">
                  <textarea
                    className="size-full [border:none] [outline:none] font-light font-oswald text-base bg-[transparent] relative text-darkgray text-left z-[17]"
                    placeholder="write something..."
                    rows={5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[13px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <input
                type="checkbox"
                className="w-[22px] h-5 relative bg-white z-[16] accent-indigo cursor-pointer"
              />
            </div>
            <div className="relative text-mini font-light font-oswald text-white text-left z-[16]">
              <p className="m-0 text-sm md:text-base">
                As part of our terms of use, you acknowledge you will receive
                occasional updates via email relating to your activity or
                requests. For further details read our
                <a
                  className="text-[inherit] px-1"
                  href="https://www.mxc.org/terms-and-conditions"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">terms</span>
                </a>
                and
                <a
                  className="text-[inherit] pl-1"
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
        <button className="cursor-pointer p-0.5 bg-gradient-to-t w-[169px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center z-[16] from-aquamarine-300 to-darkorchid-100 rounded-lg">
          <div className="size-full p-3 text-center bg-indigo  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center z-[16] rounded-lg">
            {/* <div className="h-[51px] w-[169px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-4xs bg-indigo box-border hidden border-[2px] border-solid border-aquamarine-300" /> */}
            <div className="relative text-base font-semibold font-oswald text-white text-left inline-block min-w-[46px] z-[17]">
              Submit
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default GetInTouchSection;
