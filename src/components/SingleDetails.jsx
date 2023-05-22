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
          <Col md={6} className='mt-5'>
            <h2 className='fw-bold'>Product Name : {name}</h2>
            <h5>Seller Name: {sellername}</h5>
            <h5>Email: {email}</h5>
            <p className='fw-bold'><i class="fa-solid fa-tag"></i>Price: {price}</p>
            <p className='fw-bold'><i class="fa-solid fa-qrcode"></i>Quantity: {quantity}</p>
            <p className='fw-bold'><i class="fa-solid fa-star text-warning"></i>{rating}</p>
            <p className='fw-bold'> <i class="fa-brands fa-slack"></i>Category: {category}</p>
            <p>Description: {description}</p>
              
             
              
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default SingleDetails;