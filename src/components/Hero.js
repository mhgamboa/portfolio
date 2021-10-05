import React from "react";
import DarkModeButton from "./DarkModeButton";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as LinkedinIcon } from "../img/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../img/icons/github.svg";
import { ReactComponent as CodePenIcon } from "../img/icons/codepen.svg";

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
      <a
        href="#about-me"
        className="p-3 w-1/2 md:w-1/3 lg:w-1/4 rounded mt-10 main-gradient mb-5 text-center"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <span className="text-white text-xl md:text-3xl lg:text-3xl font-bold">
          Get to Know Me
        </span>
      </a>
      <div
        className="flex justify-around mb-5 w-1/2 md:w-1/3 lg:w-1/4"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <a href="https://www.linkedin.com/in/marcus-gamboa/">
          <LinkedinIcon className="h-10" fill={isDark ? "white" : ""} />
        </a>
        <a href="https://github.com/mhgamboa">
          <GithubIcon className="h-10" fill={isDark ? "white" : ""} />
        </a>
        <a href="https://codepen.io/marcus-gamboa/">
          <CodePenIcon className="h-10" fill={isDark ? "white" : ""} />
        </a>
      </div>
    </section>
  );
}

export default hero;
