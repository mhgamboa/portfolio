import React from "react";

export const Bio = () => {
  return (
    <div className="mb-12">
      <p className="text-lg mb-6">
        I'm a solopreneur and Next.js enthusiast with a degree in Entrepreneurship from BYU. I'm
        passionate about building modern web applications, e-commerce solutions, and developer tools
        while sharing my knowledge through tutorials and project walkthroughs.
      </p>

      <h2 className="text-xl font-black mb-4">What I Do:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Build and launch Next.js applications for clients and my own products</li>
        <li>Create content about web development and Next.js best practices</li>
        <li>Run NextCommerce, a specialized e-commerce development studio</li>
        <li>Consulting for startups and established businesses</li>
      </ul>
    </div>
  );
};
