import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  subtract?: string;
  specifyTheRequirements?: string;
  defineTheChainSpecificati?: string;
  decideHowToImplementTheTo?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propWidth2?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  subtract,
  specifyTheRequirements,
  defineTheChainSpecificati,
  decideHowToImplementTheTo,
  propWidth,
  propMinWidth,
  propWidth1,
  propDebugCommit,
  propDebugCommit1,
  propWidth2,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const subtractIconStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const specifyTheRequirementsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className="w-[484.6px] flex flex-row items-start justify-start gap-[19.3px] min-w-[484.59999999999854px] max-w-full text-center text-13xl text-white font-oswald mq450:flex-wrap mq750:min-w-full mq1050:flex-1"
      style={frameDivStyle}
    >
      <div
        className="h-[109px] w-[105.3px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border"
        style={frameDiv1Style}
      >
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738] z-[16]"
          alt=""
          src={subtract}
          style={subtractIconStyle}
        />
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[234px] shrink-0 [debug_commit:1de1738] max-w-full"
        style={frameDiv2Style}
      >
        <h1
          className="m-0 w-[338px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[16] mq450:text-lgi mq1050:text-7xl"
          style={specifyTheRequirementsStyle}
        >
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

export default FrameComponent5;
