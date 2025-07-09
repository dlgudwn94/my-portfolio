import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="grid grid-cols-1 gap-y-2 md:gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
