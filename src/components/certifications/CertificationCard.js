import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ name, url, imageLink, isDark }) {
  AOS.init({ duration: 900 });

  return (
    <div
      className={`flex flex-col justify-between pb-5 rounded-md overflow-hidden bg-white dark:bg-black ${
        isDark ? "white-shadow" : "shadow-md"
      }`}
      data-aos="fade-down"
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img
          src={imageLink}
          alt={`${name} project`}
          className="w-full mb-3 h-36 object-cover"
        />
      </a>

      <h2 className="h2 text-center mb-8">{name}</h2>

      <div className="w-full flex justify-around">
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="border border-black p-3 dark:border-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl"
        >
          See Certification
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
