import { useEffect, useState } from "react";
import logo from "../assets/jsworkslogo.png";
// Import Material UI icons for toggling dark mode
import MoonIcon from "@mui/icons-material/Brightness2";
import SunIcon from "@mui/icons-material/Brightness7";
import "./FloatingNavbar.css";

interface FloatingNavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const FloatingNavbar = ({ darkMode, toggleTheme }: FloatingNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  //set scrolled to be true if user has scrolled more than 50px from initial point
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //note: dynamically setting classname to have scrolled class if scrolled = true
  return (
    <nav className={`floating-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Job Search Works Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="theme-toggle">
        <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
