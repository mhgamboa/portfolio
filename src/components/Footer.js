import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as LinkedinIcon } from "../img/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../img/icons/github.svg";
import { ReactComponent as CodePenIcon } from "../img/icons/codepen.svg";

function Footer({ isDark }) {
  AOS.init({ duration: 900 });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white flex flex-col items-center p-10">
      <div className="flex justify-around mb-10 w-full sm:w-3/4 lg:w-1/2">
        <a
          href="https://www.linkedin.com/in/marcus-gamboa/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon
            className="h-10 lg:h-12 xl:h-14 2xl:h-20"
            fill="white"
            target="_blank"
          />
        </a>
        <a href="https://github.com/mhgamboa" target="_blank" rel="noreferrer">
          <GithubIcon className="h-10 lg:h-12 xl:h-14 2xl:h-20" fill="white" />
        </a>
        <a
          href="https://codepen.io/marcus-gamboa/"
          target="_blank"
          rel="noreferrer"
        >
          <CodePenIcon className="h-10 lg:h-12 xl:h-14 2xl:h-20" fill="white" />
        </a>
      </div>
      <div className="text-lg lg:text-xl">
        &copy; Marcus Gamboa {currentYear}
      </div>
    </footer>
  );
}

export default Footer;
