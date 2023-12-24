import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="column">
      <img
        src="/public/img/IMG_0747.JPG"
        alt="Profile photo"
        width="250px"
        height="500px"
      />
      <h1>Louis Nguyen</h1>
      <p>Software Engineer</p>
      <p>I build exceptional and accessible digital experiences for the web.</p>

      <nav className="App-nav">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#experience">EDUCATION</a>
        <a href="#projects">PROJECTS</a>
      </nav>
      
      <ul>
        <li id="nav-item-project">
          <a
            href="https://github.com/Louie2074"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li id="nav-item-contact">
          <a
            href="https://www.instagram.com/louisn83/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

        <li class="nav-item">
          <a
            href="https://www.linkedin.com/in/nguyen2001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
