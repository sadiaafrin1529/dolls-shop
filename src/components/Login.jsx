import React, { useContext, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import loginn from '../assets/imgs/login.png'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const Login = () => {
  const { login,error,user ,GoogleSignIn} = useContext(AuthContext)
  const [updated, setUpdated] = useState({})
  const hanldeChanged = e => {
    const field = e.target.name;
    const value = e.target.value;
    const loginvalue = { ...updated };
    loginvalue[field] = value;
    setUpdated(loginvalue);
  }
  const handleForm = e => {
    e.preventDefault()
    login(updated.email, updated.password)

  }
console.log(user)
  return (
    <div>
      <Container >
        <Row>
          <Col md={6} className='mx-auto mt-5'>
            <img src={loginn} className="img-fluid" />
          </Col>
          <Col md={6}>
            <h1 className="text-center mt-5">Login</h1>
            <Form onSubmit={handleForm} className="mt-5">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={hanldeChanged} type="email" name='email' placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={hanldeChanged}  type="password" name='password' placeholder="Password" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button className=' mt-2' type="submit" variant="primary" size="lg">
                  Login
                </Button>


              </div>
            </Form>
              <h6>Please Create acount<Link to="/reg">Register</Link></h6>
             
              <Button onClick={()=>GoogleSignIn()} className="outline-primary rounded-circle ">G</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;