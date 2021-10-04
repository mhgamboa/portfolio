import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as ReactIcon } from "../../img/react.svg";
import { ReactComponent as JSIcon } from "../../img/javascript.svg";
import { ReactComponent as HTMLIcon } from "../../img/html5.svg";
import { ReactComponent as CSSIcon } from "../../img/css.svg";
import { ReactComponent as TailwindIcon } from "../../img/tailwindcss.svg";
import { ReactComponent as D3Icon } from "../../img/d3.svg";

function ProjectCard({
  name,
  description1,
  url,
  githubLink,
  technologies,
  imageLink,
  isDark,
}) {
  AOS.init({ duration: 900 });

  return (
    <div
      className="flex flex-col border-2 rounded-md border-black dark:border-white pb-5 dark:text-white"
      data-aos="fade-down"
    >
      <a href={url} target="_blank">
        <img src={imageLink} alt="project" className="w-full mb-3" />
      </a>

      <h2 className="h2 text-center mb-8">{name}</h2>
      {/* Render Icons for technologies */}
      <div className="flex justify-around mb-5">
        {technologies.includes("html") && (
          <HTMLIcon className="h-10" fill={isDark && "white"} />
        )}
        {technologies.includes("css") && (
          <CSSIcon className="h-10" fill={isDark && "white"} />
        )}
        {technologies.includes("javascript") && (
          <JSIcon className="h-10" fill={isDark && "white"} />
        )}
        {technologies.includes("react") && (
          <ReactIcon className="h-10" fill={isDark && "white"} />
        )}
        {technologies.includes("tailwind") && (
          <TailwindIcon className="h-10" fill={isDark && "white"} />
        )}
        {technologies.includes("d3") && (
          <D3Icon className="h-10" fill={isDark && "white"} />
        )}
      </div>
      <p className="text-center mb-5 mx-5 text-lg">{description1}</p>
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
