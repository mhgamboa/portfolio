"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ children, className = "", once = true }: AnimatedTextProps) {
  // Convert children to string and split into words
  const text = String(children);
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
