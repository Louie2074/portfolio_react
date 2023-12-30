import '../styles/Header.css';
import SocialMediaLink from './Sub_Components/SocialMediaLink';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
  const socialMediaLinks = [
    {
      id: 'nav-item-project',
      href: 'https://github.com/Louie2074',
      icon: faGithub,
      name: 'GitHub',
    },
    {
      id: 'nav-item-contact',
      href: 'https://www.instagram.com/louisn83/',
      icon: faInstagram,
      name: 'Instagram',
    },
    {
      id: 'nav-item-linkedin',
      href: 'https://www.linkedin.com/in/nguyen2001/',
      icon: faLinkedin,
      name: 'LinkedIn',
    },
  ];

  return (
    <div className="left-column">
      <img
        src="/img/IMG_0747.JPG"
        alt="Profile photo"
        className="profile-photo"
      />

      <h1>Louis Nguyen</h1>
      <h2>Full Stack Software Engineer</h2>
      <p>I build exceptional and accessible digital experiences for the web.</p>

      <nav className="nav">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#experience">EDUCATION</a>
        <a href="#projects">PROJECTS</a>
      </nav>

      <ul className="social-media">
        {socialMediaLinks.map((link) => (
          <SocialMediaLink key={link.id} href={link.href} icon={link.icon} />
        ))}
      </ul>
    </div>
  );
}

export default Header;
