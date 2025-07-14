import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";

export type Project = (typeof projects)[number];

interface ProjectCardProps extends Project {}

function ProjectCard({ title, description, tech, github, live, image }: ProjectCardProps) {
  const outerLink = live || github || "#";

  const handleCardClick = () => {
    if (outerLink !== "#") window.open(outerLink, "_blank");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") handleCardClick();
  };

  return (
    <div className="group relative flex transition-all duration-300 hover:bg-[#1e293b] hover:shadow-lg hover:scale-[1.01] rounded-md p-4 gap-6 cursor-pointer" role="link" tabIndex={0} onClick={handleCardClick} onKeyDown={handleKeyDown}>
      {image && (
        <div className="w-38 h-24 flex-shrink-0 overflow-hidden rounded-md">
          <img src={image} alt={`${title} 미리보기 이미지`} className="w-full h-full object-contain" />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <div className="absolute top-4 right-4 flex gap-3" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${title} Github 저장소 열기`} onClick={(e) => e.stopPropagation()}>
              <FiGithub className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`${title} 라이브 사이트 열기`} onClick={(e) => e.stopPropagation()}>
              <FiExternalLink className="w-5 h-5 text-gray-00 hover:text-white" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-300 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 whitespace-pre-line">{description}</p>

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
