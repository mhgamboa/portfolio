import classNames from "classnames";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  const sectionStyles = classNames({ "mx-auto max-w-screen-lg": false });
  const childStyles = classNames({ "mx-auto max-w-screen-lg": false });

  return (
    <>
      <Header />
      <Hero />
      {/*
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}
