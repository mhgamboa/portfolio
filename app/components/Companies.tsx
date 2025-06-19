"use client";
import { useInView } from "@/hooks/use-in-view";
import { motion } from "framer-motion";
import React from "react";

const companies = ["Vercel", "Shopify", "Stripe", "Netlify", "Supabase"];

export const Companies = () => {
  const companiesSection = useInView({ threshold: 0.2 });

  return (
    <motion.div
      className="mb-16"
      ref={companiesSection.ref as any}
      initial={{ opacity: 0, y: 50 }}
      animate={companiesSection.isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <h2 className="text-xl font-black mb-6 text-center">Worked with Companies like</h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#2a2a2a] p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={companiesSection.isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              scale: 1.1,
              rotate: [-1, 1, -1, 0],
              transition: { duration: 0.3 },
            }}
          >
            <div className="h-8 flex items-center justify-center font-bold text-sm text-black dark:text-white">
              {company}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
