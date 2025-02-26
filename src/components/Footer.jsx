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
              <a href="#"><img src={navIcon1.src} alt="Icon" /></a>
              <a href="#"><img src={navIcon2.src} alt="Icon" /></a>
              <a href="#"><img src={navIcon3.src} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}
