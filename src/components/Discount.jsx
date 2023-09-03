import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Discount = () => {
    return (
        <div>
            <Container style={{ marginTop: "60px" }}>
                <Row style={{backgroundColor:"lightgreen",padding:"10px"}}  className='mt-10 mb-5 border d-flex justify-content-around text-center align-middle rounded'>


                    <Col md={6}>
                        <h1 style={{ fontFamily: "Lucida Console, Courier, monospace" }} className='mx-auto '>Up to50% Off
                               
                        </h1>
                        
                    </Col>
                    <Col md={3}>
                        <div style={{ fontFamily: "Times,  Georgia, serif" }} >
                        Plus free shipping! Use code: DollsShop
                        </div>
                    </Col>
                    <Col style={{fontFamily:"serif"}} md={3}>
                    <button  type="button" class="btn btn-outline-success">Shop Now</button>
                        
                        {/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
<button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>      */}

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Discount;
