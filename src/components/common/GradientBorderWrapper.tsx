import { cn } from "@/utils/utils";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  borderClassName?: string;
};

const GradientBorderWrapper = (props: Props) => {
  return (
    <>
      <div
        className={cn(
          "absolute -inset-[2px] bg-gradient-to-b from-mediumspringgreen-300 to-pink-400 rounded-lg",
          props.borderClassName
        )}
        aria-hidden="true"
      ></div>
      <div
        className="absolute inset-0 bg-zinc-900 rounded-lg"
        aria-hidden="true"
      ></div>
      {props.children}
    </>
  );
};

export default GradientBorderWrapper;
