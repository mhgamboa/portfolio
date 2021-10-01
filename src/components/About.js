import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import portrait from "../img/portrait.jpg";

function About() {
  AOS.init({ duration: 900 });

  return (
    <section className="blue-gradient font-medium p-4 flex flex-wrap justify-center">
      <h1
        className="h1 text-center my-12 w-full"
        data-aos="fade-down"
        data-aos-once="true"
      >
        About Me
      </h1>
      <img src={portrait} alt="Myself" className="max-w-xs" />
      <div className="max-w-xs">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempora, voluptates ipsa illum maiores blanditiis culpa eligendi
          dignissimos delectus consequuntur explicabo iure ipsum maxime soluta
          accusamus quis fugit praesentium officiis!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempora, voluptates ipsa illum maiores blanditiis culpa eligendi
          dignissimos delectus consequuntur explicabo iure ipsum maxime soluta
          accusamus quis fugit praesentium officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempora, voluptates ipsa illum maiores blanditiis culpa eligendi
          dignissimos delectus consequuntur explicabo iure ipsum maxime soluta
          accusamus quis fugit praesentium officiis!
        </p>
      </div>
    </section>
  );
}

export default About;
