import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import error from '../assets/imgs/error.jpg'
const Error = () => {
    return (
        <div>
        <Container >
  <Row>
    <Col md={6} className='mx-auto mt-5'>
      <img src={error} className="img-fluid" />
    </Col>
    <Col md={6}>
    <div style={{height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1>Page Not Found <span style={{color:'red'}}>404</span></h1>
        </div>
     
    </Col>
  </Row>
</Container>
    </div>
    );
};

export default Error;