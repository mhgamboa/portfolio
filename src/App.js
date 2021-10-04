import "./App.css";
import React, { useState } from "react";
// Components
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <main
      className={`${isDark ? "bg-gray-900" : "bg-gray-50"} flex flex-col ${
        isDark ? "dark" : ""
      }`}
    >
      <Hero toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
    </main>
  );
}

export default App;
