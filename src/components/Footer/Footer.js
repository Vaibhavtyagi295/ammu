import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, amet erat vulputate pellentesque.</p>
          </Col>
          <Col xs={12} md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-dark me-3"><FaTwitter /></a>
              <a href="#" className="text-dark me-3"><FaFacebookF /></a>
              <a href="#" className="text-dark"><FaInstagram /></a>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Email: info@example.com</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Phone: +1 1234567890</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
