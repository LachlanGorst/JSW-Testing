import logo from "../assets/jsworkslogo.png";
import "./Header.css";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ darkMode, toggleTheme }: HeaderProps) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Job Search Works Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#top">Home</a>
          </li>
          <li className="nav-item">
            <a href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
