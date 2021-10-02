import "./App.css";
import React, { useState } from "react";
// Components
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects/Projects";

function App() {
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <main className={`bg-gray-50 flex flex-col ${isDark ? "dark" : ""}`}>
      <Hero toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <About isDark={isDark} />
      <Projects />
    </main>
  );
}

export default App;
