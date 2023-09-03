import React, { useContext } from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo1.png'
import { AuthContext } from './AuthProvider';
import '../components/Navbar.css'
const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const photo = user?.photoURL
    return (
        <div className='mx-auto'>
            <Container fluid className=' ' style={{ boxShadow: " 10px 5px 5px Thistle", backgroundColor: "saddlebrown" }}>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home" >
                                    <div className='fs-2 fw-bold' style={{ color: "white", fontFamily: "URW Chancery L, cursive" }}>
                                        Dolls<span style={{color:"chocolate"}}>Shop</span> 
                                    </div>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbar-nav" />
                                <Navbar.Collapse id="navbar-nav">
                                    <Nav className="me-auto">


                                    </Nav>
                                    <div >
                                        <Nav style={{ fontFamily: "Times Times New Roman  Georgia serif"}}>
                                            <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/'>Home</Link>

                                            <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/alltoys'>All Toys</Link>

                                            <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='blogs' >Blogs</Link>

                                            <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='blogs' >

                                                {user?.email ? <>
                                                    <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='addtoys'>Add Toys</Link>
                                                    <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='/mytoys'>My Toys</Link>

                                                    <Link to='/' onClick={() => logout()} class="btn btn-secondary" type="submit">LogOut</Link>


                                                </> :
                                                    <Link className='mx-2' style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to='login'>Login</Link>
                                                }
                                            </Link>

                                            <Link to=''>{user && <div className='size_of_img' >
                                                <img src={photo} title={user?.displayName} id="t-4" style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                                            </div>}</Link>

                                        </Nav>
                                    </div>
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

