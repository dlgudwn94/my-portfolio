import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";

export type Project = (typeof projects)[number];

interface ProjectCardProps extends Project {}

function ProjectCard({ title, description, tech, github, live, image }: ProjectCardProps) {
  return (
    <div className="group relative flex transition-all duration-300 hover:bg-[#1e293b] hover:shadow-lg hover:scale-[1.01] rounded-md p-4 gap-6">
      {image && (
        <div className="w-36 h-18 flex-shrink-0 overflow-hidden rounded-md">
          <img src={image} alt={`${title} preview`} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <div className="absolute top-4 right-4 flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FiGithub className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech?.map((item) => (
            <span key={item} className="inline-block bg-slate-800 text-teal-400 text-xs px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
