import "./App.css";
import Hero from "./components/Hero";
import React, { useState } from "react";

function App() {
  const [isDark, toggleDarkMode] = useState(false);

  return (
    <main className={`bg-gray-50 flex ${isDark ? "dark" : ""}`}>
      <Hero toggleDarkMode={toggleDarkMode} isDark={isDark} />
    </main>
  );
}

export default App;
