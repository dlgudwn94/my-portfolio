import { useEffect, useState } from "react";

function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveSpotlight = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveSpotlight);
    return () => window.removeEventListener("mousemove", moveSpotlight);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition duration-300"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(50, 255, 255, 0.05), transparent 400px)`,
      }}
    />
  );
}
export default Spotlight;
