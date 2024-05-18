import { FunctionComponent } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const HeroBgComponent: FunctionComponent = () => {
  return (
    <motion.img
      initial={{ opacity: 0.5, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        ease: "easeInOut",
      }}
      src="/images/hero-total-bg.svg"
      alt=""
      className="absolute inset-0 min-w-full min-h-screen object-cover object-center "
    />
    // <div className="w-full h-screen absolute inset-0">
    //   <img
    //     className="absolute top-[361.8px] left-[1005px] w-[119.5px] h-[123px] z-[10]"
    //     alt=""
    //     src="/-900230424.svg"
    //   />
    //   <img
    //     className="absolute top-[240.8px] left-[802px] w-[33.9px] h-[34.9px] z-[8]"
    //     alt=""
    //     src="/-900224208.svg"
    //   />
    //   <img
    //     className="absolute top-[581.8px] left-[519px] w-[45.6px] h-[47px] z-[6]"
    //     alt=""
    //     src="/-900214488.svg"
    //   />
    //   <img
    //     className="absolute top-[605.4px] left-[1040.1px] w-[61.9px] h-[63.6px] z-[9]"
    //     alt=""
    //     src="/-964285256.svg"
    //   />
    //   <div className="absolute top-[360.8px] left-[468px] w-[50.1px] h-[51.4px]">
    //     <img
    //       className="absolute top-[23.5px] left-[2.8px] w-[11.4px] h-[11.7px] object-contain z-[8]"
    //       alt=""
    //       src="/-999845984@2x.png"
    //     />
    //     <img
    //       className="absolute top-[0px] left-[0px] w-full h-full object-contain"
    //       alt=""
    //       src="/-840030944-1@2x.png"
    //     />
    //   </div>
    //   <img
    //     className="absolute top-[251.9px] left-[1288.4px] w-[39.8px] h-[40.9px] z-[8]"
    //     alt=""
    //     src="/-840027200.svg"
    //   />
    //   <img
    //     className="absolute top-[477.6px] left-[436.9px] w-[12.9px] h-[13.4px] z-[8]"
    //     alt=""
    //     src="/-840022736.svg"
    //   />
    //   <div className="absolute top-[348.7px] left-[0px] w-[417px] h-[567.2px]">
    //     <img
    //       className="hidden lg:flex absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
    //       alt=""
    //       src="/group-2@2x.png"
    //     />
    //   </div>

    //   <img
    //     className="absolute top-[560px] left-[650px] w-[150px] h-[120px] z-[6]"
    //     loading="lazy"
    //     alt=""
    //     src="/group-16.svg"
    //   />
    //   <img
    //     className="gradient-img w-full  h-screen absolute object-cover border-8 -z-[1] scale-x-150"
    //     alt=""
    //     src="/mask-group.svg"
    //   />
    //   <img
    //     className="w-full object-cover overlay-img  h-full absolute mix-blend-darken z-[0]"
    //     alt=""
    //     src="/-657895920.svg"
    //   />
    //   {/*
    //   <img
    //     className="mountain-img w-full h-screen absolute !m-[0] top-[110px] right-0 z-[2] border"
    //     alt=""
    //     src="/-657897120.svg"
    //   /> */}
    //   <img
    //     src="/images/hero-bg.svg"
    //     alt=""
    //     className="h-screen w-screen size-full object-cover"
    //   />

    //   {/* <div className="bottom-border absolute top-[862.8px] left-[184px] rounded-61xl w-[1071px] h-[1062px] z-[15] flex items-center justify-center">
    //     <img
    //       className="w-full h-full z-[15] object-contain absolute left-[0px] top-[6px] [transform:scale(1.018)]"
    //       alt=""
    //       src="/-817510408-5.svg"
    //     />
    //   </div> */}
    //   {/* <div className="absolute top-[848.8px] left-[214px] rounded-61xl w-[1013px] h-[1076px] z-[16] flex items-center justify-center">
    //     <img
    //       className="w-full h-full z-[16] object-contain absolute left-[0px] top-[6px] [transform:scale(1.019)]"
    //       alt=""
    //       src="/-817510408-6.svg"
    //     />
    //   </div> */}
    // </div>
  );
};

export default HeroBgComponent;
