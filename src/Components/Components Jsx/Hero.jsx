import "../Componenets Css/Hero.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  
  // Scroll to the footer section
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the project section
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        {/* Hero Content */}
        <div className="hero-content">
          <h3>Welcome to My Portfolio</h3>
          <h2>I am Muhammad Umar</h2>
          <h1>Game Developer</h1>
          <p>
            I am a passionate Game Developer specializing in Unity and C# programming. 
            With experience in both 2D and 3D games, 
            I develop high-quality games for mobile and PC platforms. 
            Currently, I work as a Game Developer at Section Soft and offer my services as a freelancer, 
            helping clients bring their game ideas to life. 
            I am also working on a personal 3D action-adventure game project.
          </p>
          {/* Work Experience Section */}
          <div className="work-experience">
            <h3>Work Experience:</h3>
            <ul>
              <li>Game Developer at Section Soft (Present)</li>
              <li>Freelance Game Developer: delivering custom game solutions</li>
              <li>Experienced in 2D/3D game development using Unity and C#</li>
              <li>Personal project: 3D action-adventure game for PC and mobile</li>
            </ul>
          </div>
          {/* Buttons Section */}
          <div className="hero-buttons">
            <button onClick={scrollToProjects}>View My Work</button>
            <button onClick={scrollToFooter}>Contact Me</button>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://www.linkedin.com/in/muhammad-umar-saddiq-967052233/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:umarsaddiq1212@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="about-image">
          <img src="images/m.png" alt="About Me" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
