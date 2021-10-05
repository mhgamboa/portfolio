import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import certificationsData from "./certificationData";
import CertificationCard from "./CertificationCard";

function Certifications({ isDark }) {
  AOS.init({ duration: 900 });

  return (
    <section
      className={`certifications font-medium pt-16 pb-20 py-10 flex flex-wrap min-h-full w-full justify-around dark:text-white ${
        isDark ? "dark-blue" : "main-gradient"
      }`}
    >
      <h1
        className="h1 text-center mt-2 md:mt-12 mb-12 w-full"
        data-aos="fade-down"
      >
        Certifications
      </h1>

      <div className="projects-container sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid gap-5 p-5">
        {certificationsData.map((object) => {
          return (
            <CertificationCard
              name={object.name}
              url={object.url}
              key={object.name}
              imageLink={object.imageLink}
              isDark={isDark}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
