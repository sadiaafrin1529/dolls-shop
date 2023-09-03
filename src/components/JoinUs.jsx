import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const JoinUs = () => {
    return (
        <div>
             <Container fluid data-aos="fade-up"data-aos-anchor-placement="top-bottom">
        <Row className='mt-5 mb-5'>
        <h1 style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold" }} className='mx-auto text-center'>
        Join us for more product details !
        </h1>
        <p style={{ fontFamily: " monospace", color: "mediumaquamarine", fontSize: '20px' }} className='text-center'>
         Please send your product review
        </p>
        {/* <p style={{ fontFamily: " monospace", color: "mediumaquamarine", fontSize: '20px' }} className='text-center'>
          See all Popular toys in oue shop
        </p> */}
            <Col md={6} className='mx-auto'>
            <form style={{fontFamily:"serif"}}  data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                
               
            <div class="form-group" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                    <b for="message " style={{color:'white',fontWeight:'600'}}>Message:</b>
                    <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
              
                <div className='text-center mt-4' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                <button data-aos="fade-up"data-aos-anchor-placement="top-bottom" type="submit" class="btn w-50" style={{background:'#54092A',color:'white',fontWeight:'700'}}>Send Review</button>
                </div>
            </form>
            </Col>
        </Row>
    </Container>
        </div>
    );
};

export default JoinUs;