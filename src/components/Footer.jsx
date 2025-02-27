import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col> 
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/alfredo-berrocal-64079a308/'target="_blank" rel="noopener noreferrer"><img src={navIcon1.src} alt="Icon" /></a>
              <a href='https://github.com/Berrocal0406'target="_blank" rel="noopener noreferrer"><img src={navIcon2.src} alt="Icon" /></a>
              <a href='https://www.instagram.com/alfredobch.04/'target="_blank" rel="noopener noreferrer"><img src={navIcon3.src} alt="Icon" /></a>
            </div>
            <p>© 2025 Berrocal. All rights reserved.  |  Built by Berrocal.</p>
        </Row>
      </Container>
    </footer>
  )
}
