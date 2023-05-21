import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import login from '../assets/imgs/login.png'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <Container >
      <Row>
        <Col md={6} className='mx-auto mt-5'>
          <img src={login} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1 className="text-center mt-5">Login</h1>
          <Form className="mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="d-grid gap-2">
      <Button className=' mt-2' type="submit" variant="primary" size="lg">
        Login
      </Button>
      
      
    </div>
    <h6>Please Create acount<Link to="/reg">Register</Link></h6>
          </Form>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Login;