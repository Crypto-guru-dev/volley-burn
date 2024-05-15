import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StepSectionType = {
  subtract?: string;
  specifyTheRequirements?: string;
  defineTheChainSpecificati?: string;
  decideHowToImplementTheTo?: string;
};

const StepSection: FunctionComponent<StepSectionType> = ({
  subtract,
  specifyTheRequirements,
  defineTheChainSpecificati,
  decideHowToImplementTheTo,
}) => {
  return (
    <div className="w-[484.6px] flex flex-row items-start justify-start gap-[19.3px] min-w-[484.59999999999854px] max-w-full text-center text-13xl text-white font-oswald mq450:flex-wrap mq750:min-w-full mq1050:flex-1">
      <div className="h-[109px] w-[105.3px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738] z-[16]"
          alt=""
          src={subtract}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[234px] shrink-0 [debug_commit:1de1738] max-w-full">
        <h1 className="m-0 w-[338px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[16] mq450:text-lgi mq1050:text-7xl">
          {specifyTheRequirements}
        </h1>
        <div className="self-stretch relative text-base font-orienta text-justify z-[16]">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">{defineTheChainSpecificati}</li>
            <li>{decideHowToImplementTheTo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
