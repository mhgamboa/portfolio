import classNames from "classnames";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/resume/Resume";

export default function Home() {
  const sectionStyles = classNames({ "mx-auto max-w-screen-lg": false });
  const childStyles = classNames({ "mx-auto max-w-screen-lg": false });

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      {/*
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}
