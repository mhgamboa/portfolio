import "./App.css";
import React, { useState } from "react";
// Components
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/certifications/Certifications";

function App() {
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <main
      className={`flex flex-col overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } ${isDark ? "dark" : ""}`}
    >
      <Hero toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Certifications isDark={isDark} />
    </main>
  );
}

export default App;
