import { useEffect, useState } from "react";
import clsx from "clsx";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function SidebarNav() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Entries:", entries);
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;
        const sortedEntries = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveId(sortedEntries[0].target.id);
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="섹션 내비게이션" className="hidden lg:flex flex-col text-sm text-gray-400 px-6">
      <ul className="space-y-6">
        {sections.map(({ id, label }) => {
          const isActive = activeId === id;

          return (
            <li key={id}>
              <a href={`#${id}`} aria-current={isActive ? "true" : undefined} className={clsx("flex items-center gap-2 cursor-pointer transition-colors duration-300", isActive ? "text-gray-200 font-semibold" : "hover:text-teal-400")}>
                <span className={clsx("h-1 rounded-full transition-all duration-300 ease-in-out block", isActive ? "w-8 bg-white" : "w-4 bg-gray-500")} />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
