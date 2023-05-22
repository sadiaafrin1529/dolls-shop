import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container,  Row, Col } from 'react-bootstrap';
const SingleDetails = () => {
  const loader = useLoaderData()
  
    const {_id,img,name,sellername,email,price,quantity,rating,description,category}= loader;
    
    return (
        <div>
            <Container >
        <Row>
          <Col md={6} className='mx-auto mt-5'>
            <img src={img} className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>Product Name : {name}</h2>
            <h5>Seller Name: {sellername}</h5>
            <h5>Email: {email}</h5>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>{rating}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
              
             
              
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default SingleDetails;