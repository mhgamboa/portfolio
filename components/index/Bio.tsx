"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Bio = () => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <p className="text-lg mb-6">
        I'm a solopreneur and Next.js enthusiast with a degree in Entrepreneurship from BYU. I'm
        passionate about building modern web applications for startups!
      </p>

      <h2 className="text-xl font-black mb-4">What I Do:</h2>
      <motion.ul
        className="list-disc pl-6 space-y-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={item}>Plan, build and launch Next.js applications</motion.li>
        <motion.li variants={item}>
          Utilize AI to implement beautiful client facing products
        </motion.li>
        <motion.li variants={item}>
          Developing websites for small businesses & individuals
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};
