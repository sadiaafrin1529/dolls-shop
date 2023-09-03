import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../components/Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='footer mt-5 border border-top-1'>
            <Row>
                <Col md={4} className='mx-auto text-center'>
                    <div>
                    <div className='fs-2 fw-bold' style={{ color: "white", fontFamily: "URW Chancery L, cursive" }}>
                                        Dolls<span style={{color:"chocolate"}}>Shop</span> 
                                    </div>
                        <h6  style={{color:'#54092A',fontFamily:"serif"}}>Welcome to our Dolls Shop.  Whether you're searching for beautiful baby dolls, fashionable Barbies, or beloved American Girl dolls, we have something special to ignite the imagination of children of all ages. Explore our store and let the magic of dolls create cherished memories and inspire imaginative play.</h6>
                    </div>
                </Col>
                <Col style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold",color:"white" }} md={4} className='mx-auto text-center'>
                    <h1 className='text-cenetr ' style={{color:'#54092A'}}>
                        Links
                    </h1>
                    <ul>
                        <li style={{listStyle:'none'}}><Link to='/' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Home</Link></li>
                        <li style={{listStyle:'none'}}><Link to='/blogs' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Blogs</Link></li>
                        <li style={{listStyle:'none'}}><Link to='/login' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Login</Link></li>
                        <li style={{listStyle:'none'}}><Link to='/reg' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>Registration </Link></li>
                    </ul>
                </Col>

                <Col style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold",color:"white" }} md={4}>
                    <div class="input-group mb-3">
                        <input className='footerBotton form-control' type="text" class="form-control" placeholder="Input Your Email" style={{background:'transparent'}}/>
                        <button style={{background:'#54092A',color:'white',fontWeight:'700'}} class="btn" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    <h4 className='text-center text-white'>Contact Us</h4>
                    <p className='text-center text-white'><b>Email</b> : sadiafrin1529@mail.com</p>
                    <p className='text-center text-white'><b>Email</b> : sadiaafrin0@hotmail.com</p>
                    <p className='text-center text-white'><b> Number</b> ++88012156789</p>
                </Col>
                <hr />
        <Row style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold",color:"white" }}>
          <Col>
            <p className="text-center">© {new Date().getFullYear()} My Website. All rights reserved.</p>
          </Col>
        </Row>
            </Row>
        </Container>
    );
};

export default Footer;