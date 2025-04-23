import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/md_logo_name.webp';
import logo2 from '../assets/img/md_logo_circle.webp';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const handleOpenCV = () => {
    window.open('/moussa_diop_cv.pdf', '_blank');
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <div className="logo_supp">
            <img src={logo2} alt="Logo" className="logo_turn"/>
            <img src={logo} alt="Logo" className="logo_static"/>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/moussa-diop-7b2099167/"><img src={navIcon1} alt="linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/alxmsa"><img src={navIcon2} alt="facebook" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mssa.dp/"><img src={navIcon3} alt="instagram" /></a>
              </div>
              <button className="vvd button_resume" onClick={handleOpenCV}>Resume ↓</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}