"use client";
// This wrapper is used to preserve SEO for the page
import React from "react";
import { motion } from "framer-motion";
import { AnimationProps, Transition, VariantLabels } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  initial?: AnimationProps["initial"] | VariantLabels;
  animate?: AnimationProps["animate"] | VariantLabels;
  transition?: Transition;
  variants?: AnimationProps["variants"];
}

export default function MotionUl({
  children,
  className,
  initial,
  animate,
  transition,
  variants,
}: Props) {
  return (
    <motion.ul
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.ul>
  );
}
