import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectData";

function Projects() {
  AOS.init({ duration: 900 });

  const card = "";

  return (
    <section className="dark:bg-gray-900 flex flex-col items-center dark:text-white">
      <h1 className="h1 pb-10 mt-6" data-aos="fade-down">
        Projects
      </h1>
      <div className="projects-container grid gap-1">
        {projectsData.map((object) => {
          return (
            <ProjectCard
              name={object.name}
              description1={object.description1}
              url={object.url}
              githubLink={object.githubLink}
              key={object.name}
              imageLink={object.imageLink}
              className={card}
            />
          );
        })}
        {/* <ProjectCard /> */}
      </div>
    </section>
  );
}

export default Projects;
