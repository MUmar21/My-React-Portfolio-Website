import "../Componenets Css/Header.css";
import { Link, animateScroll as scroll } from 'react-scroll';

function Header(){
    return (
      <header className="header">
      <div className="logo-container">
        {/* Add your logo image */}
        {/* <img src="./images/m.png" alt="My Logo" className="logo" /> */}
      </div>
      <div className="email-container">
        {/* Add your email, clicking it will open Gmail */}
        <a
          href="mailto:umarsaddiq1212@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="email"
        >
          umarsaddiq1212@gmail.com
        </a>
      </div>
    </header>
    );
}

export default Header