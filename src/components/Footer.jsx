import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
      <Container fluid>
        <Row>
          <Col md={6}>
            <h5>About</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lorem in mauris tempus ultricies in sed ligula.</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">© {new Date().getFullYear()} My Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
};

export default Footer;