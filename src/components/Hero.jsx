import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import resume from '../../public/Napasorn Thongsopha.pdf'

const Hero = () => {
  return (
    <AuroraBackground>
      <div
        id="hero"
        className="text-neutral-600 dark:text-white w-4/5 md:w-3/5"
      >
          <p className="text-xl tracking-wider">Hello I'm Bell</p>
          <p className="font-semibold text-3xl md:text-5xl py-5 text-purple-300">
            NAPASORN THONGSPHA
          </p>
          <p className="text-end text-ml md:text-2xl pb-5 tracking-widest"> 
            Looking for{" "}
            <span className="ml-3 text-5xl md:text-7xl text-purple-500 dark:text-purple-400 font-semibold">
              {" "}
              Junior Frontend Developer
            </span>
          </p>
          <p className="text-base text-center dark:text-gray-400">
            I'm a Medical Technologist with a strong passion to be Web
            Developer.
          </p>
          <p className="text-base text-center dark:text-gray-400">
            Practicing to create a website and Front-end skills.
          </p>
        <div className="flex gap-5 justify-center mt-10">
          <button className="border border-white/40 dark:border-black/40 py-3 px-5 rounded-xl bg-white dark:bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md hover:shadow-lg dark:hover:bg-gray-700 active:shadow-inner transition-all duration-300">
            <a href={resume} target="_blank" download>Download CV</a>
          </button>
          <button className="border border-white/40 dark:border-black/40 py-3 px-10 rounded-xl bg-white dark:bg-gray-800 bg-opacity-30 backdrop-blur-md shadow-md hover:shadow-lg dark:hover:bg-gray-700 active:shadow-inner transition-all duration-300">
             <a href="https://github.com/npsbell" target="_blank">Github</a>
          </button>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
