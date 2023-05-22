import React, { useContext } from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo1.png'
import { AuthContext } from './AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const photo = user?.photoURL
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
                                <Navbar.Brand className='text-5xl' href="#" style={{ marginRight: '20px', fontWeight: '20px' }}><h5>Dolls Shop</h5></Navbar.Brand>

                                <Navbar.Toggle aria-controls="navbar-nav" />
                                <Navbar.Collapse id="navbar-nav">
                                    <Nav className="me-auto">


                                    </Nav>
                                    <Nav>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/'>Home</Link>
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/alltoys'>All Toys</Link>
                                        
                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='blogs' >Blogs</Link>

                                        <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='blogs' >
                                            
                                            {user?.email ? <>
                                                <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='addtoys'>Add Toys</Link>
                                                <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/mytoys'>My Toys</Link>
                                                
                                                <Link to='/' onClick={()=>logout()} class="btn btn-secondary" type="submit">LogOut</Link>
                                                
                                                
                                            </> :
                                            <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='login'>Login</Link>
                                         }
                                        </Link>

                                        <Link to=''>{user && <div className='size_of_img' >
                                            <img src={photo} title={user?.displayName} id="t-4" style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                                        </div>}</Link>

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

