"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white dark:bg-blue-500 opacity-10 blur-3xl"
          initial={{
            scale: 0.5,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: mousePosition.x + (Math.random() - 0.5) * 200,
            y: mousePosition.y + (Math.random() - 0.5) * 200,
            scale: 0.8 + Math.random() * 0.5,
            opacity: 0.05 + Math.random() * 0.1,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
          }}
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
          }}
        />
      ))}
    </div>
  );
}
