import React from "react";

const companies = ["Vercel", "Shopify", "Stripe", "Netlify", "Supabase"];

export const Companies = () => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-black mb-6 text-center">Worked with Companies like</h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2a2a2a] p-3 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="h-8 flex items-center justify-center font-bold text-sm text-black dark:text-white">
              {company}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
