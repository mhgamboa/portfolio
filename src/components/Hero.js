import React from "react";
import DarkModeButton from "./DarkModeButton";

function hero({ toggleDarkMode, isDark }) {
  let actionButton = `p-3 w-1/2 md:w-1/3 rounded-sm mt-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600`;
  let name = `text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700`;
  // border-green-500
  return (
    <section className="h-screen w-screen flex flex-col items-center dark:bg-gray-900 justify-center lg:items-start lg:pl-28">
      <DarkModeButton toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-center lg:text-left font-medium dark:text-white mb-3">
          Hi, my name is <span className={name}>Marcus</span>
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left dark:text-white mt-1">
          I'm a front end developer
        </h2>
      </div>
      <button className={actionButton}>
        <span className="text-white text-xl md:text-3xl lg:text-3xl font-bold">
          Get to Know Me
        </span>
      </button>
    </section>
  );
}

export default hero;
