import React from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddToys = () => {
    return (
        <Container className='mx-auto mt-5'>
            <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            
            <Form.Control type="name" name='name' placeholder="Product Name" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridName">
            
            <Form.Control type="name" name='name' placeholder="Seller Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            
            <Form.Control type="email" name='email' placeholder="Email" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            
            <Form.Select defaultValue="Choose...">
              <option>Select Your Product category</option>
              <option>baby dolls</option>
              <option>barbie</option>
              <option>American girl</option>
            </Form.Select>
          </Form.Group>
        </Row>
  
        
  
        
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPrice">
            
          <Form.Control type="price" name='price' placeholder="Price" />
          </Form.Group>
  
          
  
          <Form.Group as={Col} controlId="formGridZip">
            
          <Form.Control type="text" name='rating' placeholder="Rating minimum 0 -max value 5" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridQuantity">
            
          <Form.Control type="text" name='quantity' placeholder="Quantity" />
          </Form.Group>
  
          
  
          <Form.Group as={Col} controlId="formGridZip">
            
          <Form.Control type="text" name='img' placeholder="imgURL"/>
          </Form.Group>
          
        </Row>
        <FloatingLabel controlId="floatingTextarea2" label="DesCription">
        <Form.Control
          as="textarea"
          placeholder=""
          style={{ height: '100px' }}
        />
      </FloatingLabel>
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
  
        <div className="d-grid gap-2">
      <Button className=' mb-5' type="submit" variant="primary" size="lg">
        Add New Products
      </Button>
      
    </div>
            
         
      </Form>
        </Container>
    );
};

export default AddToys;