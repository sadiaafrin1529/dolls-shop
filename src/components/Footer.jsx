import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/imgs/logo1.png'
const Footer = () => {
    return (
        <footer className="bg-secondary text-light py-4">
      <Container fluid>
        <Row>
        <Col md={3}>
           <Image src={logo} alt="Login Image" className="img-fluid" style={{ width: '100px', height: '100px' }} />

           <i class="fa-brands fa-facebook mx-2 text-info fs-1 "></i>
           <i class="fa-brands fa-twitter mx-2  text-info fs-1"></i>

                                
          </Col>
          <Col md={6}>
            <h5>About Our Shops</h5>
            <p>Welcome to our Dolls Shop.  Whether you're searching for beautiful baby dolls, fashionable Barbies, or beloved American Girl dolls, we have something special to ignite the imagination of children of all ages. Explore our store and let the magic of dolls create cherished memories and inspire imaginative play.</p>
          </Col>
          
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><i class="fa-solid fa-envelope"></i> Email: example@example.com</li>
              <li><i class="fa-solid fa-phone"></i> Phone: 123-456-7890</li>
              <li><i class="fa-solid fa-location-dot"></i> Address: 123 Street, City, Country</li>
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