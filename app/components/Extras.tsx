"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

export default function Extras() {
  const extras = useInView({ threshold: 0.2 });

  const items = [
    {
      emoji: "🎲",
      title: "I'm a closeted nerd",
      description: "I love board games and comic books",
    },
    {
      emoji: "🏀",
      title: "Southern California Sports Fan",
      description: "Go Lakers! Go Dodgers! (If that's a deal breaker, I totally get it 😬)",
    },
    {
      emoji: "💕",
      title: "Family Man",
      description: "Happily married, with one child",
    },
  ];

  return (
    <motion.div
      ref={extras.ref as any}
      className="mb-24 border-4 border-black bg-gray-200 dark:bg-gray-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
      initial={{ opacity: 0, y: -20 }}
      animate={extras.isInView ? { opacity: 1, y: 0 } : {}}
    >
      <h3 className="font-bold ">Extras!</h3>
      <p className="text-sm text-muted-foreground mb-2">
        You made it this far. Here's some more cool stuff about me:
      </p>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
          >
            <span className="text-2xl">{item.emoji}</span>
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
