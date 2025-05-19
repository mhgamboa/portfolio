import React from "react";

export const Services = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-black mb-6 flex items-center">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-4 border-black bg-red-400 dark:bg-red-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-bold mb-2">🚀 hire me for your project</h3>
          <p className="text-sm mb-0">
            With experience building production-ready apps, I can help build your next project with
            Next.js expertise.
          </p>
        </div>

        <div className="border-4 border-black bg-teal-400 dark:bg-teal-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-bold mb-2">💬 book a consultation</h3>
          <p className="text-sm mb-0">
            Need advice on your Next.js project? Book a consultation to get clarity on your next
            steps.
          </p>
        </div>

        <div className="border-4 border-black bg-purple-400 dark:bg-purple-600 p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:col-span-2">
          <h3 className="font-bold mb-2">🎥 want to collaborate on content?</h3>
          <p className="text-sm mb-0">
            My content reaches thousands of developers interested in Next.js, React, and modern web
            development. Let's create something valuable together.
          </p>
        </div>
      </div>
    </div>
  );
};
