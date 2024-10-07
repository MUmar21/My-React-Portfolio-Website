import "../Componenets Css/Navbar.css";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <header className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} spy={true} activeClass="active" offset={-150}>
              Home
            </Link>
          </li>
          <li>
            <Link to="skills-section" smooth={true} duration={500} spy={true} activeClass="active" offset={-150}>
              Services
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active" offset={-150}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="tools" smooth={true} duration={500} spy={true} activeClass="active" offset={-150}>
              Skills
            </Link>
          </li> 
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
