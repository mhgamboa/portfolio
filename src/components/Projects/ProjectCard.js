import React from "react";

function ProjectCard({
  name,
  description1,
  url,
  githubLink,
  technologies,
  imageLink,
}) {
  console.log(imageLink);
  return (
    <div className="border rounded p-5 dark:text-white">
      <h2>{name}</h2>
      <p>{description1}</p>
      <p>{url}</p>
      <p>{githubLink}</p>
      <p>{technologies}</p>
      <img src={imageLink} alt="project" />
    </div>
  );
}

export default ProjectCard;
