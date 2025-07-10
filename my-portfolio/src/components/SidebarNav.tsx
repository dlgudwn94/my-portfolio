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
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const visibleEntry = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        setActiveId(visibleEntry.target.id);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
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
    <nav className="hidden lg:flex flex-col space-y-6 text-sm text-gray-400 px-6">
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;

        return (
          <a key={id} href={`#${id}`} onClick={() => setActiveId(id)} className={clsx("flex items-center gap-2 cursor-pointer transition-colors duration-300", isActive ? "text-white font-semibold" : "hover:text-teal-400")}>
            <span className={clsx("h-1 rounded-full transition-all duration-300 ease-in-out block", isActive ? "w-8 bg-white" : "w-4 bg-gray-500")} />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
