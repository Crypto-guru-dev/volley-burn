import { motion } from "framer-motion";
import React from "react";

type Props = {};

const OurEcosystemComponent = (props: Props) => {
  const instructions = [
    {
      id: 1,
      title: "Volley Swap",
    },
    {
      id: 2,
      title: "NFT Marketplace",
    },
    {
      id: 3,
      title: "Volley Social Media",
    },
    {
      id: 4,
      title: "Volley E-Commerce",
    },
    {
      id: 5,
      title: "Volley AI",
    },
    {
      id: 6,
      title: "Stable Coin",
    },
  ];

  // create a stagger animation for the list
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        delay: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="w-full relative bg-[transparent] translate-y-20 shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)]  flex flex-row items-start justify-center whitespace-nowrap z-[15]  p-0.5 bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-[3rem]">
      <div className="w-full flex flex-row items-start justify-start py-5 px-6  text-left bg-[linear-gradient(180deg,_#2A087B_0%,_#02310C_100%)] rounded-[3rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 md:gap-10 py-5 md:py-10 ">
          <div className="self-stretch flex flex-row items-start justify-center">
            <h1 className="text-4xl relative text-inherit font-bold font-inherit z-[15] ">
              Our Ecosystem
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-center ">
              <motion.div
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
                className="w-full sm:w-11/12 md:w-5/6 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10"
              >
                {instructions.map((item) => {
                  return (
                    <motion.button
                      key={item.id}
                      variants={childVariant}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer  bg-[transparent]  shadow-[0px_6px_9.8px_rgba(0,_0,_0,_0.25)]  flex flex-row items-start justify-center whitespace-nowrap z-[15]  p-0.5 bg-gradient-to-b to-mediumspringgreen-300 from-pink-400 rounded-lg"
                    >
                      <div className="[background:linear-gradient(180deg,_#2d087b,_#310202)] size-full p-3 md:p-4 lg:p-5 rounded-lg">
                        <b className="relative md:text-lg lg:text-xl text-center inline-block font-oswald text-white  z-[16]">
                          {item.title}
                        </b>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEcosystemComponent;
