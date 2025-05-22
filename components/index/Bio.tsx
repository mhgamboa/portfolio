import React from "react";
import MotionDiv from "@/components/animation/wrappers/motion-div";
import MotionUl from "@/components/animation/wrappers/motion-ul";
import MotionLi from "@/components/animation/wrappers/motion-li";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Bio = () => {
  return (
    <MotionDiv
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
      <MotionUl
        className="list-disc pl-6 space-y-2"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        <MotionLi variants={item}>Plan, build and launch Next.js applications</MotionLi>
        <MotionLi variants={item}>
          Utilize AI to implement beautiful client facing products
        </MotionLi>
        <MotionLi variants={item}>Developing websites for small businesses & individuals</MotionLi>
      </MotionUl>
    </MotionDiv>
  );
};
