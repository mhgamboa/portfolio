import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProjectCard from "./ProjectCard";
import projectsData from "./ProjectData";

function Projects() {
  AOS.init({ duration: 900 });

  return (
    <section className="dark:bg-gray-900 flex flex-col items-center dark:text-white">
      <h1 className="h1 pb-10 mt-6" data-aos="fade-down">
        Projects
      </h1>
      <div className="projects-container md:grid-cols-3 xl:grid-cols-4 grid gap-8 p-8">
        {projectsData.map((object) => {
          return (
            <ProjectCard
              name={object.name}
              description1={object.description1}
              url={object.url}
              githubLink={object.githubLink}
              key={object.name}
              imageLink={object.imageLink}
              technologies={object.technologies}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
