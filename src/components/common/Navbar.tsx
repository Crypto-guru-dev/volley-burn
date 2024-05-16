import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path: string) => {
    // return true if the current path is equal to the path, otherwise return false
    return pathname.includes(path);
  };

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
        <Link
          href="/"
          className="self-stretch relative z-[10] flex items-center gap-x-2"
        >
          <img
            className=" w-[31.7px] h-[32.3px] z-[10]"
            alt=""
            src="/images/voy-logo.svg"
          />
          <span className="uppercase">VOY</span>
        </Link>
        <div className="self-stretch flex flex-row items-center justify-end h-full ">
          <div className="flex flex-row items-center justify-start gap-5 md:gap-10 h-full">
            <div className="hidden md:flex flex-col items-center justify-start h-full">
              <div className="flex flex-row items-center justify-start gap-6 h-full">
                <Link
                  href="/zkevm"
                  className="relative min-w-[44px] flex items-center gap-x-2 whitespace-nowrap z-[10]"
                >
                  zkEVM
                  {isActive("/zkEVM") && (
                    <div className="w-[44px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
                  )}
                  <img className="w-3 h-2 z-[10]" alt="" src="/vector-4.svg" />
                </Link>
                <Link
                  href="/migrations"
                  className={cn(
                    "h-full flex items-center  gap-6 shrink-0  relative hover:text-mediumspringgreen-100",
                    isActive("/migrations") && "text-mediumspringgreen-100"
                  )}
                >
                  <b className=" inline-block min-w-[63px] whitespace-nowrap z-[10]">
                    Migration
                  </b>
                  {isActive("/migrations") && (
                    <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
                  )}
                </Link>
                <Link
                  href="/burn"
                  className={cn(
                    "h-full flex items-center  gap-6 shrink-0  relative hover:text-mediumspringgreen-100",
                    isActive("/migrations") && "text-mediumspringgreen-100"
                  )}
                >
                  Burn
                  {isActive("/migrations") && (
                    <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
                  )}
                </Link>
                <Link
                  href="/ecosystem"
                  className="relative text-white min-w-[69px] shrink-0 flex items-center gap-x-2 whitespace-nowrap z-[10]"
                >
                  Ecosystem
                  {isActive("/migrations") && (
                    <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
                  )}
                  <img className="w-3 h-2 z-[10]" alt="" src="/vector-4.svg" />
                </Link>
                <Link
                  href="about-us"
                  className="relative inline-block min-w-[59px] whitespace-nowrap z-[10]"
                >
                  About Us
                  {isActive("/migrations") && (
                    <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
                  )}
                </Link>
              </div>
            </div>
            <div className="w-48 md:w-72 flex flex-row items-start justify-start gap-6">
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
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <CiMenuFries className="size-7" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed translate-x-full duration-500 top-0 right-0 p-5 h-full w-full bg-black backdrop-blur-sm bg-opacity-50 z-50 gap-y-5",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="self-stretch relative z-[10] flex items-center gap-x-2"
          >
            <img
              className=" w-[31.7px] h-[32.3px] z-[10]"
              alt=""
              src="/images/voy-logo.svg"
            />
            <span className="uppercase">VOY</span>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <AiOutlineClose className="size-7" />
          </button>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center justify-start gap-5 py-10">
            <Link
              href="/zkevm"
              className="relative min-w-[44px] flex items-center gap-x-2 whitespace-nowrap z-[10]"
            >
              zkEVM
              {isActive("/zkEVM") && (
                <div className="w-[44px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
              )}
              <img className="w-3 h-2 z-[10]" alt="" src="/vector-4.svg" />
            </Link>
            <Link
              href="/migrations"
              className={cn(
                "h-full flex items-center  gap-6 shrink-0  relative hover:text-mediumspringgreen-100",
                isActive("/migrations") && "text-mediumspringgreen-100"
              )}
            >
              <b className=" inline-block min-w-[63px] whitespace-nowrap z-[10]">
                Migration
              </b>
              {isActive("/migrations") && (
                <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
              )}
            </Link>
            <Link
              href="/burn"
              className={cn(
                "h-full flex items-center  gap-6 shrink-0  relative hover:text-mediumspringgreen-100",
                isActive("/migrations") && "text-mediumspringgreen-100"
              )}
            >
              Burn
              {isActive("/migrations") && (
                <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
              )}
            </Link>
            <Link
              href="/ecosystem"
              className="relative text-white min-w-[69px] shrink-0 flex items-center gap-x-2 whitespace-nowrap z-[10]"
            >
              Ecosystem
              {isActive("/migrations") && (
                <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
              )}
              <img className="w-3 h-2 z-[10]" alt="" src="/vector-4.svg" />
            </Link>
            <Link
              href="about-us"
              className="relative inline-block min-w-[59px] whitespace-nowrap z-[10]"
            >
              About Us
              {isActive("/migrations") && (
                <div className="w-[63px] h-[3px] absolute bottom-0 shadow-[0px_0px_40px_rgba(253,_230,_63,_0.24)] bg-mediumspringgreen-100 z-[10]" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
