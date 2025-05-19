import React from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

// Sample data
type Project = {
  title: string;
  description: string;
  tags: string[];
  websiteUrl: string;
  githubUrl?: string | null;
};

const projects: Project[] = [
  {
    title: "Forge of Fables",
    description: "A D&D app that supercharges your campaigns with AI.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    websiteUrl: "https://forgeoffables.com",
    githubUrl: null,
  },
  {
    title: "Game Scoring app",
    description: 'A simple app for the board game "Lost Cities"',
    tags: ["Next.js", "MDX", "Vercel"],
    websiteUrl: "https://lcbg.vercel.app/",
    githubUrl: null,
  },
];

export const Projects = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-black mb-6">Recent Projects</h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-4 border-black bg-white dark:bg-[#2a2a2a] p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative"
          >
            {/* Project links */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Link
                href={project.websiteUrl}
                target="_blank"
                className="bg-[#69a1f0] p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 transition-transform"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink size={16} className="text-black" />
              </Link>

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="bg-gray-200 dark:bg-white p-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 transition-transform"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={16} className="text-[#333] dark:text-black" />
                </Link>
              )}
            </div>

            <h3 className="font-bold text-lg text-black dark:text-white">{project.title}</h3>
            <p className="text-sm text-black dark:text-white mt-3">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
