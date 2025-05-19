"use client";
import { useInView } from "@/hooks/use-in-view";
import { motion } from "framer-motion";
import React from "react";

export const Services = () => {
  // Scroll to contact form
  const handleScrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const servicesSection = useInView({ threshold: 0.2 });

  return (
    <motion.div
      className="mb-16"
      ref={servicesSection.ref as any}
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      animate={servicesSection.isInView ? { opacity: 1, transform: "translateY(0)" } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-xl font-black mb-6 flex items-center">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          onClick={handleScrollToContact}
          className="border-4 cursor-pointer border-black bg-red-400 dark:bg-red-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, transform: "translateX(-20px)" }}
          animate={
            servicesSection.isInView
              ? {
                  opacity: 1,
                  transform: "translateX(0)",
                  y: 0,
                  x: 0,
                  boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
                }
              : {}
          }
          whileHover={{
            y: -5,
            x: -5,
            boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            default: { duration: 0.2, ease: "easeOut" },
            opacity: { duration: 0.5, ease: "easeOut", delay: 0.1 },
            transform: { duration: 0.5, ease: "easeOut", delay: 0.1 },
          }}
        >
          <h3 className="font-bold mb-2">💼 Hire Me</h3>
          <p className="text-sm mb-0">
            Freelancing, W2 (or favors?) or however you want to pay me. Let's chat and see if I can
            help.
          </p>
        </motion.div>

        <motion.div
          onClick={handleScrollToContact}
          className="border-4 cursor-pointer border-black bg-teal-400 dark:bg-teal-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, transform: "translateX(-20px)" }}
          animate={
            servicesSection.isInView
              ? {
                  opacity: 1,
                  transform: "translateX(0)",
                  y: 0,
                  x: 0,
                  boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
                }
              : {}
          }
          whileHover={{
            y: -5,
            x: -5,
            boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            default: { duration: 0.2, ease: "easeOut" },
            opacity: { duration: 0.5, ease: "easeOut", delay: 0.2 },
            transform: { duration: 0.5, ease: "easeOut", delay: 0.2 },
          }}
        >
          <h3 className="font-bold mb-2">💬 Get Feedback on Your Project</h3>
          <p className="text-sm mb-0">
            Need advice on your startup? Let's chat! (~20 min) I'll share my thoughts on your
            project and maybe even give you some pointers?
          </p>
        </motion.div>

        <motion.div
          className="border-4 cursor-pointer border-black bg-purple-400 dark:bg-purple-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:col-span-2"
          initial={{ opacity: 0, transform: "translateX(20px)" }}
          animate={
            servicesSection.isInView
              ? {
                  opacity: 1,
                  transform: "translateX(0)",
                  y: 0,
                  x: 0,
                  boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
                }
              : {}
          }
          whileHover={{
            y: -5,
            x: -5,
            boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            default: { duration: 0.2, ease: "easeOut" },
            opacity: { duration: 0.5, ease: "easeOut", delay: 0.3 },
            transform: { duration: 0.5, ease: "easeOut", delay: 0.3 },
          }}
          onClick={handleScrollToContact}
        >
          <h3 className="font-bold mb-2">🚀 Let's Work Together</h3>
          <p className="text-sm mb-0">
            With experience creating production-ready apps, I can help build your next project with
            Next.js. Let's see if we're a good fit!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
