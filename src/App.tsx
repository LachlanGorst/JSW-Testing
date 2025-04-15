import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import "./App.css";
import FloatingNavbar from "./components/FloatingNavbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Update the root element with the correct theme class.
  // documentElement = root node
  // triggers on darkMode being set
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="app-container">
      <FloatingNavbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main className="main">
        <Hero />
        <Features />
        <Testimonials />
        <Team />
      </main>
    </div>
  );
};

export default App;
