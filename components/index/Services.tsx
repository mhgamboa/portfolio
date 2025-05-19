"use client";
import React from "react";

const services = [
  {
    title: "💼 Hire Me",
    description:
      "Freelancing, W2, favors or however you want to pay me. Let's chat and see if I can help.",
    className: "bg-red-400 dark:bg-red-600",
    colSpan: "",
  },
  {
    title: "💬 Get Feedback on Your Project",
    description:
      "Need advice on your startup? Let's chat! (~20 min) I'll share my thoughts on your project and maybe even give you some pointers?",
    className: "bg-teal-400 dark:bg-teal-600",
    colSpan: "",
  },
  {
    title: "🚀 Let's Work Together",
    description:
      "With experience building production-ready apps, I can help build your next project with Next.js. Let's see if we're a good fit!",
    className: "bg-purple-400 dark:bg-purple-600",
    colSpan: "md:col-span-2",
  },
];

export const Services = () => {
  // Scroll to contact form
  const handleScrollToContact = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-xl font-black mb-6 flex items-center">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, idx) => (
          <button
            key={idx}
            type="button"
            onClick={handleScrollToContact}
            className={`border-4 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-left w-full ${service.className} ${service.colSpan} hover:translate-y-0.5 hover:translate-x-0.5 transition-transform`}
          >
            <h3 className="font-bold mb-2">{service.title}</h3>
            <p className="text-sm mb-0">{service.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
