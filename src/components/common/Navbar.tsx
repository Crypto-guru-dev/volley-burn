import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div
      style={{
        boxShadow: "0px 6px 9.8px rgba(0, 0, 0, 0.25)",
        background:
          "linear-gradient(180deg, rgba(19, 19, 79, 0.870588) 35.78%, rgba(79, 1, 139, 0.870588) 126.81%)",
      }}
      className="w-full flex items-center h-16 fixed top-0 z-50"
    >
      <div className="w-11/12 mx-auto flex items-center justify-between  h-full">
        <div className="self-stretch relative z-[10] flex items-center gap-x-2">
          <img
            className=" w-[31.7px] h-[32.3px] z-[10]"
            alt=""
            src="/images/voy-logo.svg"
          />
          <span className="uppercase">VOY</span>
        </div>
        <div className="self-stretch flex flex-row items-center justify-end h-full ">
          <div className="flex flex-row items-center justify-start gap-5 md:gap-10 h-full">
            <div className="flex flex-col items-center justify-start h-full">
              <div className="flex flex-row items-center justify-start gap-6 h-full">
                <b className="relative inline-block min-w-[44px] whitespace-nowrap z-[10]">
                  zkEVM
                </b>
                <div className="h-full flex items-center  gap-6 shrink-0  text-mediumspringgreen-100 relative">
                  <b className=" inline-block min-w-[63px] whitespace-nowrap z-[10]">
                    Migration
                  </b>
                  <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
                </div>
                <b className="relative inline-block text-white min-w-[33px] whitespace-nowrap z-[10]">
                  Burn
                </b>
                <b className="relative inline-block text-white min-w-[69px] shrink-0 [debug_commit:1de1738] whitespace-nowrap z-[10]">
                  Ecosystem
                </b>
                <b className="relative inline-block min-w-[59px] whitespace-nowrap z-[10]">
                  About Us
                </b>
              </div>
            </div>
            <div className="w-[260px] flex flex-row items-start justify-start gap-6">
              <button className="relative cursor-pointer py-1 px-5 pb-1 bg-[transparent] flex-1 rounded-lg flex flex-row items-center justify-start gap-2 z-[10] ">
                <div
                  className="absolute -inset-[2px] bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute inset-0 bg-zinc-900 rounded-lg"
                  aria-hidden="true"
                ></div>

                <BiSearch className="w-5 h-4 relative overflow-hidden shrink-0 z-[1] " />
                <input
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none py-1 relative text-sm font-oswald text-gray-3 text-left inline-block shrink-0 z-[1]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
