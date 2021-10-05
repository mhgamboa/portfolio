import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import portrait from "../img/portrait.jpg";

function About({ isDark }) {
  AOS.init({ duration: 900 });

  return (
    <section
      className={`about-me font-medium pb-20 py-10 px-4 flex flex-wrap min-h-full w-full justify-around ${
        isDark ? "dark-blue" : "main-gradient"
      }`}
    >
      <h1
        className="h1 text-center mt-2 mb-12 w-full dark:text-white"
        data-aos="fade-down"
      >
        About Me
      </h1>
      <img
        src={portrait}
        alt="Myself"
        className="pb-1 self-center md:max-w-none object-cover rounded-lg sm:w-1/2 lg:w-1/4"
        data-aos="fade-right"
      />
      <div
        className="w-auto sm:w-1/3 dark:text-white text-lg text-center md:text-xl self-center"
        data-aos="fade-left"
      >
        <p className="py-5">
          Hi, My Name is Marcus Gamboa. I graduated from BYU in August 2019 with
          a degree in Entrepreneural Management.
        </p>

        <p className="py-5">
          After working for a year as an underwriter I decided to leave my job
          to become a self-taught software developer with FreecodeCamp and The
          Odin Project.
        </p>
        <p className="py-5">
          After having built some projects, I'm now hoping to get a job as a
          junior developer.
        </p>
      </div>
    </section>
  );
}

export default About;
