import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  prop1?: string;
  countriesWith?: string;
  networkCoverage?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  prop1,
  countriesWith,
  networkCoverage,
  propGap,
  propMinWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)] rounded-smi [background:linear-gradient(180deg,_#13134f,_#4f018b)] flex flex-row items-start justify-start py-[17px] pr-[54px] pl-[60px] gap-[5px] z-[19] text-left text-17xl text-white font-oswald border-[0px] border-solid border-mediumspringgreen-200 mq450:pl-5 mq450:pr-5 mq450:box-border"
      style={groupDivStyle}
    >
      <img
        className="h-[88px] w-[295px] relative rounded-smi hidden"
        alt=""
        src="/-8175104081.svg"
      />
      <div
        className="relative inline-block min-w-[77px] z-[1] mq450:text-3xl mq1050:text-10xl"
        style={divStyle}
      >
        {prop1}
      </div>
      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-sm">
        <div className="relative z-[1]">
          <p className="m-0">{countriesWith}</p>
          <p className="m-0">{networkCoverage}</p>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
