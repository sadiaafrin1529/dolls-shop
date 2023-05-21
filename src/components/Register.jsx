import React, { useContext, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import login from '../assets/imgs/login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const Register = () => {
  const {registration,error}= useContext(AuthContext)
  const [updated ,setUpdated]= useState({})
  const onChangeHandler=e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newValue = {...updated}
    newValue[field]=value;
    setUpdated(newValue);
  }

  const formHandler = e =>{
    e.preventDefault()
    registration(updated.email,updated.password,updated.name,updated.photo)
  }
    return (
        <div>
           <div>
            <Container >
      <Row>
        <Col md={6} className='mx-auto mt-5'>
          <img src={login} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1 className="text-center mt-5">Registration</h1>
          <Form onSubmit={formHandler} className="mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={onChangeHandler} type="name" name='name' placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={onChangeHandler} type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={onChangeHandler} type="password" name='password' placeholder="Password" />
            </Form.Group>

            <div className="d-grid gap-2">
      <Button className=' mt-2' type="submit" variant="primary" size="lg">
        Submit
      </Button>
      
      
    </div>
    <h6 className='mb-5 mt-2'>Already have an acount?  <Link to="/login">Login</Link></h6>
          </Form>
        </Col>
      </Row>
    </Container>
        </div> 
        </div>
    );
};

export default Register;