import 'bootstrap/dist/css/bootstrap.min.css';
import { escapeHTML } from "astro/runtime/server/escape.js";
import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../styles/App.css';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo.src} alt="Logo" className='logo-berrocal'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/alfredo-berrocal-64079a308/'target="_blank" rel="noopener noreferrer"><img src={navIcon1.src} alt=''></img></a>
                    <a href='https://github.com/Berrocal0406'target="_blank" rel="noopener noreferrer"><img src={navIcon2.src} alt=''></img></a>
                    <a href='https://www.instagram.com/alfredobch.04/'target="_blank" rel="noopener noreferrer"><img src={navIcon3.src} alt=''></img></a>
                </div>
                <button className='vvd' onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}><span>Let's Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
