import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as ReactIcon } from "../../img/icons/react.svg";
import { ReactComponent as JSIcon } from "../../img/icons/javascript.svg";
import { ReactComponent as HTMLIcon } from "../../img/icons/html5.svg";
import { ReactComponent as CSSIcon } from "../../img/icons/css.svg";
import { ReactComponent as TailwindIcon } from "../../img/icons/tailwindcss.svg";
import { ReactComponent as D3Icon } from "../../img/icons/d3.svg";

function ProjectCard({
  name,
  description,
  url,
  githubLink,
  technologies,
  imageLink,
  isDark,
}) {
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
      {/* Render Icons for technologies */}
      <div className="flex justify-around mb-5">
        {technologies.includes("html") && (
          <HTMLIcon className="h-10" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("css") && (
          <CSSIcon className="h-10" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("javascript") && (
          <JSIcon className="h-10" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("react") && (
          <ReactIcon className="h-10" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("tailwindcss") && (
          <TailwindIcon className="h-10" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("d3") && (
          <D3Icon className="h-10" fill={isDark ? "white" : ""} />
        )}
      </div>
      <p className="text-center mb-5 mx-5 text-lg">{description}</p>
      <div className="w-full flex justify-around">
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="border border-black p-3 dark:border-white"
        >
          See Live
        </a>
        <a
          href={githubLink}
          rel="noreferrer"
          target="_blank"
          className="border border-black p-3 dark:border-white"
        >
          See Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
