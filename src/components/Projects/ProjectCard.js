import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({
  name,
  description1,
  url,
  githubLink,
  technologies,
  imageLink,
}) {
  AOS.init({ duration: 900 });

  return (
    <div
      className="flex flex-col items-center border-2 border-black dark:border-white rounded p-5 dark:text-white"
      data-aos="fade-down"
    >
      <h2 className="h2 mb-5">{name}</h2>
      <img src={imageLink} alt="project" className="w-full mb-3" />
      <p>{technologies}</p>
      <p className="text-center mb-5">{description1}</p>
      <div className="w-full flex justify-around">
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="border border-black p-3"
        >
          See Live
        </a>
        <a
          href={githubLink}
          rel="noreferrer"
          target="_blank"
          className="border border-black p-3"
        >
          See Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
