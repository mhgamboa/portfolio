import React from "react";
import DarkModeButton from "./DarkModeButton";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as ReactIcon } from "../img/react.svg";
import { ReactComponent as JSIcon } from "../img/javascript.svg";
import { ReactComponent as HTMLIcon } from "../img/html5.svg";
import { ReactComponent as CSSIcon } from "../img/css.svg";
import { ReactComponent as TailwindIcon } from "../img/tailwindcss.svg";
import { ReactComponent as D3Icon } from "../img/d3.svg";

function hero({ toggleDarkMode, isDark }) {
  AOS.init({ duration: 900 });

  return (
    <section className="h-screen w-full flex flex-col items-center dark:bg-gray-900 justify-center lg:items-start lg:pl-28">
      <DarkModeButton toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <div
        className="flex flex-col"
        data-aos="fade-right"
        data-aos-mirror="false"
      >
        <h1 className="h1 text-center lg:text-left font-medium dark:text-white mb-3">
          Hi, my name is{" "}
          <span className="text-transparent bg-clip-text main-gradient">
            Marcus
          </span>
        </h1>
        <h2 className="h2 text-center lg:text-left dark:text-white mt-1">
          I'm a front end developer
        </h2>
      </div>
      <button
        className="p-3 w-1/2 md:w-1/3 lg:w-1/4 rounded mt-10 main-gradient mb-5"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <span className="text-white text-xl md:text-3xl lg:text-3xl font-bold">
          Get to Know Me
        </span>
      </button>
      <div
        className="flex justify-around mb-5 w-1/2 md:w-1/3 lg:w-1/4"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <HTMLIcon className="h-10" fill={isDark && "white"} />
        <CSSIcon className="h-10" fill={isDark && "white"} />
        <JSIcon className="h-10" fill={isDark && "white"} />
        <ReactIcon className="h-10" fill={isDark && "white"} />
        <TailwindIcon className="h-10" fill={isDark && "white"} />
        <D3Icon className="h-10" fill={isDark && "white"} />
      </div>
    </section>
  );
}

export default hero;
