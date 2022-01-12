import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import portrait from "../img/portrait.jpg";

function About({ isDark }) {
  AOS.init({ duration: 900 });

  return (
    <section
      id="about-me"
      className={`about-me font-medium pb-20 py-10 px-4 flex flex-wrap min-h-full w-full justify-around ${
        isDark ? "dark-blue" : "main-gradient"
      }`}
    >
      <h1 className="h1 text-center mt-2 mb-12 w-full dark:text-white" data-aos="fade-down">
        About Me
      </h1>
      <img
        src={portrait}
        alt="Myself"
        className="pb-1 self-center max-w-sm sm:max-w-none md:max-w-none object-cover rounded-lg w-full  sm:w-1/2 lg:w-1/3"
        data-aos="fade-right"
      />
      <div
        className="w-auto sm:w-1/3 dark:text-white text-lg text-center sm:text-left md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl self-center"
        data-aos="fade-left"
      >
        <p className="py-5 sm:leading-snug 2xl:leading-normal">
          Hi, My Name is Marcus Gamboa. I graduated from BYU in August 2019 with a degree in
          Entrepreneural Management.
        </p>

        <p className="py-5 2xl:py-28 sm:leading-snug 2xl:leading-normal">
          After working for a year as an underwriter I decided to leave my job to become a
          self-taught software developer.
        </p>
        <p className="py-5 sm:leading-snug 2xl:leading-normal">
          After having built some projects, I'm now hoping to get a job as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;
