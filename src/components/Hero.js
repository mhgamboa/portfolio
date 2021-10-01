import React from "react";
import DarkModeButton from "./DarkModeButton";
import AOS from "aos";
import "aos/dist/aos.css";

function hero({ toggleDarkMode, isDark }) {
  AOS.init({ duration: 900 });

  let actionButton = `p-3 w-1/2 md:w-1/3 lg:w-1/4 rounded mt-10 blue-gradient`;
  let name = `text-transparent bg-clip-text blue-gradient`;
  // border-green-500
  return (
    <section className="h-screen w-full flex flex-col items-center dark:bg-gray-900 justify-center lg:items-start lg:pl-28">
      <DarkModeButton toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <div
        className="flex flex-col"
        data-aos="fade-right"
        data-aos-mirror="false"
      >
        <h1 className="h1 text-center lg:text-left font-medium dark:text-white mb-3">
          Hi, my name is <span className={name}>Marcus</span>
        </h1>
        <h2 className="h2 text-center lg:text-left dark:text-white mt-1">
          I'm a front end developer
        </h2>
      </div>
      <button
        className={actionButton}
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <span className="text-white text-xl md:text-3xl lg:text-3xl font-bold">
          Get to Know Me
        </span>
      </button>
    </section>
  );
}

export default hero;
