import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  } as T;
}

function SidebarNav() {
  const [activeId, setActiveId] = useState<string>("");
  const debouncedSetActiveId = useRef(debounce(setActiveId, 100)).current;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatioEntry = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!maxRatioEntry || entry.intersectionRatio > maxRatioEntry.intersectionRatio) {
              maxRatioEntry = entry;
            }
          }
        });
        if (maxRatioEntry) {
          debouncedSetActiveId(maxRatioEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [debouncedSetActiveId]);

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

export default SidebarNav;
