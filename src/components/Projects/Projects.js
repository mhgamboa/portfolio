import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectData";

function Projects({ isDark }) {
  AOS.init({ duration: 900 });

  return (
    <section className="dark:bg-gray-900 flex flex-col items-center dark:text-white font-medium mb-10">
      <h1 className="h1 pb-10 mt-6" data-aos="fade-down">
        Projects
      </h1>
      <div className="projects-container sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid gap-8 p-5">
        {projectsData.map((object) => {
          return (
            <ProjectCard
              name={object.name}
              description={object.description}
              url={object.url}
              githubLink={object.githubLink}
              key={object.name}
              imageLink={object.imageLink}
              technologies={object.technologies}
              isDark={isDark}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
