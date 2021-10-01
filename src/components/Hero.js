import React from "react";
import DarkModeButton from "./DarkModeButton";

function hero({ toggleDarkMode, isDark }) {
  let actionButton = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-auto rounded`;
  // let darkModeButton = `object-right-top`;
  return (
    <section className="h-screen w-screen flex items-center dark:bg-gray-900">
      <DarkModeButton toggleDarkMode={toggleDarkMode} isDark={isDark} />

      {/* <button
        className="absolute right-4 top-4 dark:text-white"
        onClick={() => toggleDarkMode((isDark) => !isDark)}
      >
        toggle
      </button> */}
      <div className="flex flex-col">
        <h1 className="text-4xl text-center font-medium dark:text-white">
          Hi, my name is <span>Marcus</span>. I'm a front end developer.
        </h1>
        <button className={actionButton}>Get to Know Me</button>
      </div>
    </section>
  );
}

export default hero;
