import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path: string) => {
    // return true if the current path is equal to the path, otherwise return false
    return pathname.includes(path);
  };

  return (
    <header className="w-full h-16 justify-between px-5 md:px-10 flex items-center  [background:linear-gradient(180deg,_#111145,_#350669)]  z-[99] gap-5 text-left text-base text-white font-oswald">
      <div className=" flex flex-1 items-center justify-start gap-x-20 max-w-full">
        <Link href="/" className="h-full flex items-center gap-x-3">
          <img
            className="size-8 relative z-[3]"
            loading="lazy"
            alt=""
            src="/group-12.svg"
          />

          <p className="flex items-center min-w-[88px] z-[3] text-mediumspringgreen-200 gap-x-1">
            <span className="font-great-vibes">
              V<span className="uppercase font-medium">OY</span>
            </span>
            <b>Burn</b>
          </p>
        </Link>
        <div className="items-center gap-x-10 hidden md:flex">
          <Link
            href="/doc"
            className="group flex flex-row items-center justify-start gap-x-2 hover:text-mediumspringgreen-100 transition-all duration-300 ease-in-out"
          >
            <svg
              className="w-[13px] h-[17px] relative z-[1] "
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.375 2.125H8.66667C8.66667 0.95293 7.69505 0 6.5 0C5.30495 0 4.33333 0.95293 4.33333 2.125H1.625C0.727865 2.125 0 2.83887 0 3.71875V15.4062C0 16.2861 0.727865 17 1.625 17H11.375C12.2721 17 13 16.2861 13 15.4062V3.71875C13 2.83887 12.2721 2.125 11.375 2.125ZM3.25 14.0781C2.79974 14.0781 2.4375 13.7229 2.4375 13.2812C2.4375 12.8396 2.79974 12.4844 3.25 12.4844C3.70026 12.4844 4.0625 12.8396 4.0625 13.2812C4.0625 13.7229 3.70026 14.0781 3.25 14.0781ZM3.25 10.8906C2.79974 10.8906 2.4375 10.5354 2.4375 10.0938C2.4375 9.65215 2.79974 9.29688 3.25 9.29688C3.70026 9.29688 4.0625 9.65215 4.0625 10.0938C4.0625 10.5354 3.70026 10.8906 3.25 10.8906ZM3.25 7.70312C2.79974 7.70312 2.4375 7.34785 2.4375 6.90625C2.4375 6.46465 2.79974 6.10938 3.25 6.10938C3.70026 6.10938 4.0625 6.46465 4.0625 6.90625C4.0625 7.34785 3.70026 7.70312 3.25 7.70312ZM6.5 1.32812C6.95026 1.32812 7.3125 1.6834 7.3125 2.125C7.3125 2.5666 6.95026 2.92188 6.5 2.92188C6.04974 2.92188 5.6875 2.5666 5.6875 2.125C5.6875 1.6834 6.04974 1.32812 6.5 1.32812ZM10.8333 13.5469C10.8333 13.693 10.7115 13.8125 10.5625 13.8125H5.6875C5.53854 13.8125 5.41667 13.693 5.41667 13.5469V13.0156C5.41667 12.8695 5.53854 12.75 5.6875 12.75H10.5625C10.7115 12.75 10.8333 12.8695 10.8333 13.0156V13.5469ZM10.8333 10.3594C10.8333 10.5055 10.7115 10.625 10.5625 10.625H5.6875C5.53854 10.625 5.41667 10.5055 5.41667 10.3594V9.82812C5.41667 9.68203 5.53854 9.5625 5.6875 9.5625H10.5625C10.7115 9.5625 10.8333 9.68203 10.8333 9.82812V10.3594ZM10.8333 7.17188C10.8333 7.31797 10.7115 7.4375 10.5625 7.4375H5.6875C5.53854 7.4375 5.41667 7.31797 5.41667 7.17188V6.64062C5.41667 6.49453 5.53854 6.375 5.6875 6.375H10.5625C10.7115 6.375 10.8333 6.49453 10.8333 6.64062V7.17188Z"
                fill="currentColor"
              />
            </svg>
            <b className="relative inline-block min-w-[25px] z-[1]">Doc</b>
          </Link>
          <Link
            href="/blog"
            className="group flex flex-row items-center justify-start gap-x-2 hover:text-mediumspringgreen-100 transition-all duration-300 ease-in-out"
          >
            <svg
              className="w-4 h-4 relative z-[1]"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2857 16H1.71429C0.767857 16 0 15.2321 0 14.2857V1.71429C0 0.767857 0.767857 0 1.71429 0H14.2857C15.2321 0 16 0.767857 16 1.71429V14.2857C16 15.2321 15.2321 16 14.2857 16ZM8.50357 5.21071L3.65714 10.0571L3.43214 12.0964C3.40357 12.3679 3.63214 12.6 3.90714 12.5714L5.94643 12.3464L10.7929 7.5C10.875 7.41786 10.875 7.28214 10.7929 7.19643L8.81071 5.21429C8.72143 5.12857 8.58572 5.12857 8.50357 5.21071ZM12.3214 4.75357L11.2464 3.67857C10.9107 3.34286 10.3679 3.34286 10.0357 3.67857L9.21071 4.50357C9.12857 4.58571 9.12857 4.72143 9.21071 4.80714L11.1929 6.78929C11.275 6.87143 11.4107 6.87143 11.4964 6.78929L12.3214 5.96429C12.6536 5.63214 12.6536 5.08929 12.3214 4.75357Z"
                fill="currentColor"
              />
            </svg>

            <b className="relative inline-block min-w-[30px] z-[1]">Blog</b>
          </Link>
          <Link
            href="/faq"
            className="group flex flex-row items-center justify-start gap-x-2 hover:text-mediumspringgreen-100 transition-all duration-300 ease-in-out"
          >
            <svg
              className="w-[19px] h-[17px] relative z-[1]"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0C4.25348 0 0 3.53357 0 7.89286C0 9.77348 0.794512 11.4978 2.11523 12.854C1.64988 14.7631 0.100195 16.4688 0.0816406 16.4877C0.0417691 16.5308 0.015106 16.5849 0.00494422 16.6432C-0.00521759 16.7016 0.00156691 16.7618 0.0244599 16.8163C0.0473528 16.8707 0.0853515 16.9172 0.133763 16.9498C0.182175 16.9825 0.23888 16.9999 0.296875 17C2.75574 17 4.60156 15.7952 5.51445 15.0503C6.78885 15.5387 8.13903 15.7879 9.5 15.7857C14.7469 15.7857 19 12.2521 19 7.89286C19 3.53357 14.7469 0 9.5 0ZM13.0625 8.80357C13.0625 8.88408 13.0312 8.9613 12.9755 9.01823C12.9199 9.07516 12.8444 9.10714 12.7656 9.10714H10.6875V11.2321C10.6875 11.3127 10.6562 11.3899 10.6005 11.4468C10.5449 11.5037 10.4694 11.5357 10.3906 11.5357H8.60938C8.53064 11.5357 8.45513 11.5037 8.39945 11.4468C8.34378 11.3899 8.3125 11.3127 8.3125 11.2321V9.10714H6.23438C6.15564 9.10714 6.08013 9.07516 6.02445 9.01823C5.96878 8.9613 5.9375 8.88408 5.9375 8.80357V6.98214C5.9375 6.90163 5.96878 6.82442 6.02445 6.76749C6.08013 6.71055 6.15564 6.67857 6.23438 6.67857H8.3125V4.55357C8.3125 4.47306 8.34378 4.39584 8.39945 4.33891C8.45513 4.28198 8.53064 4.25 8.60938 4.25H10.3906C10.4694 4.25 10.5449 4.28198 10.6005 4.33891C10.6562 4.39584 10.6875 4.47306 10.6875 4.55357V6.67857H12.7656C12.8444 6.67857 12.9199 6.71055 12.9755 6.76749C13.0312 6.82442 13.0625 6.90163 13.0625 6.98214V8.80357Z"
                fill="currentColor"
              />
            </svg>

            <b className="relative inline-block min-w-[24px] z-[1]">Faq</b>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex flex-row items-center gap-4">
        <img
          className="size-6 relative z-[3]"
          loading="lazy"
          alt=""
          src="/group-1608.svg"
        />
        <button className="cursor-pointer p-0.5 bg-[transparent] rounded-3xs flex flex-row items-center justify-start z-[3]  bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg">
          <div className="p-1.5 bg-[#17082f] px-10 rounded-lg bg-[linear-gradient(180deg,_#111145_0%,_#350669_100%)]">
            <div className="relative font-oswald text-transparent !bg-clip-text [background:linear-gradient(180deg,_#8936a9_25.55%,_#1fdfa2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center whitespace-nowrap z-[1] font-semibold">
              Connect Wallet
            </div>
          </div>
        </button>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <CiMenuFries className="size-7" />
      </button>

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
            <p className="flex items-center min-w-[88px] z-[3] text-mediumspringgreen-200 gap-x-1">
              <span className="font-great-vibes">
                V<span className="uppercase font-medium">OY</span>
              </span>
              <b>Burn</b>
            </p>{" "}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <AiOutlineClose className="size-7" />
          </button>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center justify-start gap-5 py-10">
            <Link
              href="/doc"
              className="group flex flex-row items-center justify-start gap-x-2 hover:text-mediumspringgreen-100 transition-all duration-300 ease-in-out"
            >
              <svg
                className="w-[13px] h-[17px] relative z-[1] "
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.375 2.125H8.66667C8.66667 0.95293 7.69505 0 6.5 0C5.30495 0 4.33333 0.95293 4.33333 2.125H1.625C0.727865 2.125 0 2.83887 0 3.71875V15.4062C0 16.2861 0.727865 17 1.625 17H11.375C12.2721 17 13 16.2861 13 15.4062V3.71875C13 2.83887 12.2721 2.125 11.375 2.125ZM3.25 14.0781C2.79974 14.0781 2.4375 13.7229 2.4375 13.2812C2.4375 12.8396 2.79974 12.4844 3.25 12.4844C3.70026 12.4844 4.0625 12.8396 4.0625 13.2812C4.0625 13.7229 3.70026 14.0781 3.25 14.0781ZM3.25 10.8906C2.79974 10.8906 2.4375 10.5354 2.4375 10.0938C2.4375 9.65215 2.79974 9.29688 3.25 9.29688C3.70026 9.29688 4.0625 9.65215 4.0625 10.0938C4.0625 10.5354 3.70026 10.8906 3.25 10.8906ZM3.25 7.70312C2.79974 7.70312 2.4375 7.34785 2.4375 6.90625C2.4375 6.46465 2.79974 6.10938 3.25 6.10938C3.70026 6.10938 4.0625 6.46465 4.0625 6.90625C4.0625 7.34785 3.70026 7.70312 3.25 7.70312ZM6.5 1.32812C6.95026 1.32812 7.3125 1.6834 7.3125 2.125C7.3125 2.5666 6.95026 2.92188 6.5 2.92188C6.04974 2.92188 5.6875 2.5666 5.6875 2.125C5.6875 1.6834 6.04974 1.32812 6.5 1.32812ZM10.8333 13.5469C10.8333 13.693 10.7115 13.8125 10.5625 13.8125H5.6875C5.53854 13.8125 5.41667 13.693 5.41667 13.5469V13.0156C5.41667 12.8695 5.53854 12.75 5.6875 12.75H10.5625C10.7115 12.75 10.8333 12.8695 10.8333 13.0156V13.5469ZM10.8333 10.3594C10.8333 10.5055 10.7115 10.625 10.5625 10.625H5.6875C5.53854 10.625 5.41667 10.5055 5.41667 10.3594V9.82812C5.41667 9.68203 5.53854 9.5625 5.6875 9.5625H10.5625C10.7115 9.5625 10.8333 9.68203 10.8333 9.82812V10.3594ZM10.8333 7.17188C10.8333 7.31797 10.7115 7.4375 10.5625 7.4375H5.6875C5.53854 7.4375 5.41667 7.31797 5.41667 7.17188V6.64062C5.41667 6.49453 5.53854 6.375 5.6875 6.375H10.5625C10.7115 6.375 10.8333 6.49453 10.8333 6.64062V7.17188Z"
                  fill="currentColor"
                />
              </svg>
              <b className="relative inline-block min-w-[25px] z-[1]">Doc</b>
            </Link>
            <Link
              href="/blog"
              className="group flex flex-row items-center justify-start gap-x-2 hover:text-mediumspringgreen-100 transition-all duration-300 ease-in-out"
            >
              <svg
                className="w-4 h-4 relative z-[1]"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2857 16H1.71429C0.767857 16 0 15.2321 0 14.2857V1.71429C0 0.767857 0.767857 0 1.71429 0H14.2857C15.2321 0 16 0.767857 16 1.71429V14.2857C16 15.2321 15.2321 16 14.2857 16ZM8.50357 5.21071L3.65714 10.0571L3.43214 12.0964C3.40357 12.3679 3.63214 12.6 3.90714 12.5714L5.94643 12.3464L10.7929 7.5C10.875 7.41786 10.875 7.28214 10.7929 7.19643L8.81071 5.21429C8.72143 5.12857 8.58572 5.12857 8.50357 5.21071ZM12.3214 4.75357L11.2464 3.67857C10.9107 3.34286 10.3679 3.34286 10.0357 3.67857L9.21071 4.50357C9.12857 4.58571 9.12857 4.72143 9.21071 4.80714L11.1929 6.78929C11.275 6.87143 11.4107 6.87143 11.4964 6.78929L12.3214 5.96429C12.6536 5.63214 12.6536 5.08929 12.3214 4.75357Z"
                  fill="currentColor"
                />
              </svg>

              <b className="relative inline-block min-w-[30px] z-[1]">Blog</b>
            </Link>
            <Link
              href="/faq"
              className="group flex flex-row items-center justify-start gap-x-2 hover:text-mediumspringgreen-100 transition-all duration-300 ease-in-out"
            >
              <svg
                className="w-[19px] h-[17px] relative z-[1]"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 0C4.25348 0 0 3.53357 0 7.89286C0 9.77348 0.794512 11.4978 2.11523 12.854C1.64988 14.7631 0.100195 16.4688 0.0816406 16.4877C0.0417691 16.5308 0.015106 16.5849 0.00494422 16.6432C-0.00521759 16.7016 0.00156691 16.7618 0.0244599 16.8163C0.0473528 16.8707 0.0853515 16.9172 0.133763 16.9498C0.182175 16.9825 0.23888 16.9999 0.296875 17C2.75574 17 4.60156 15.7952 5.51445 15.0503C6.78885 15.5387 8.13903 15.7879 9.5 15.7857C14.7469 15.7857 19 12.2521 19 7.89286C19 3.53357 14.7469 0 9.5 0ZM13.0625 8.80357C13.0625 8.88408 13.0312 8.9613 12.9755 9.01823C12.9199 9.07516 12.8444 9.10714 12.7656 9.10714H10.6875V11.2321C10.6875 11.3127 10.6562 11.3899 10.6005 11.4468C10.5449 11.5037 10.4694 11.5357 10.3906 11.5357H8.60938C8.53064 11.5357 8.45513 11.5037 8.39945 11.4468C8.34378 11.3899 8.3125 11.3127 8.3125 11.2321V9.10714H6.23438C6.15564 9.10714 6.08013 9.07516 6.02445 9.01823C5.96878 8.9613 5.9375 8.88408 5.9375 8.80357V6.98214C5.9375 6.90163 5.96878 6.82442 6.02445 6.76749C6.08013 6.71055 6.15564 6.67857 6.23438 6.67857H8.3125V4.55357C8.3125 4.47306 8.34378 4.39584 8.39945 4.33891C8.45513 4.28198 8.53064 4.25 8.60938 4.25H10.3906C10.4694 4.25 10.5449 4.28198 10.6005 4.33891C10.6562 4.39584 10.6875 4.47306 10.6875 4.55357V6.67857H12.7656C12.8444 6.67857 12.9199 6.71055 12.9755 6.76749C13.0312 6.82442 13.0625 6.90163 13.0625 6.98214V8.80357Z"
                  fill="currentColor"
                />
              </svg>

              <b className="relative inline-block min-w-[24px] z-[1]">Faq</b>
            </Link>

            <div className="flex flex-row items-center gap-4 py-10">
              <img
                className="size-6 relative z-[3]"
                loading="lazy"
                alt=""
                src="/group-1608.svg"
              />
              <button className="cursor-pointer p-0.5 bg-[transparent] rounded-3xs flex flex-row items-center justify-start z-[3]  bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg">
                <div className="p-1.5 bg-[#17082f] px-10 rounded-lg bg-[linear-gradient(180deg,_#111145_0%,_#350669_100%)]">
                  <div className="relative font-oswald text-transparent !bg-clip-text [background:linear-gradient(180deg,_#8936a9_25.55%,_#1fdfa2)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center whitespace-nowrap z-[1] font-semibold">
                    Connect Wallet
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
