import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo1.png'

const NavBar = () => {
    return (
        <div className='mx-auto'>
            <Container fluid  >
                <Row>
                    <Col>
                        <Navbar bg="secondary" expand="md" variant="dark">
                            <Container>
                            <Col md={6}>
          <Image src={logo} alt="Login Image" className="img-fluid" style={{ width: '100px', height: '100px' }} />
        </Col>
                                <Navbar.Brand className='text-5xl'  href="#" style={{ marginRight: '20px', fontWeight:'20px' }}><h5>Dolls Shop</h5></Navbar.Brand>
                                
                                <Navbar.Toggle aria-controls="navbar-nav" />
                                <Navbar.Collapse id="navbar-nav">
                                    <Nav className="me-auto">


                                    </Nav>
                                    <Nav>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/'>Home</Link>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to=''>All Toys</Link>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='addtoys'>Add Toys</Link>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='blogs' >Blogs</Link>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='login' >Login</Link>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavBar;