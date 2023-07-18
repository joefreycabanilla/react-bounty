import React, { useState, useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="bg-orange-500 w-full py-14" id="about">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed text-white-500"
            >
              What we do
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-white-300"
            >
              Bounty Media was founded in 2020 in Singapore by Australian / Swedish & American entrepreneurs Claes Loberg & Jake Denney.
              Funded by SOSV and launched in 2021 in our first market Indonesia, with No.1 local and regional publisher partners to over 300m users.
              We are now rolling out throughout APAC, LATAM & MENA together with the greatest film, tv, games, news, wallet and telco partners in each territory. <strong>Providing a new way to pay</strong>
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
