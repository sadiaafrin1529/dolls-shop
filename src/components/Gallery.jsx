import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import doll from '../assets/imgs/agirl.jpg';
import doll1 from '../assets/imgs/barbie.jpg';
import doll2 from '../assets/imgs/bbdoll.jpg';

const Gallery = () => {
    return (
        <div className='mx-auto mt-5 mb-5 '>
            <Container>
                <Row>

                    <Col >
                        <Card className='border border-bottom-0 border-danger' style={{ width: '280px', height: '280px' }}>
                            <Card.Img src={doll2} />
                        </Card>


                        <Card className='mx-5 border border-danger' style={{ width: '280px', height: '280px' }}>
                            <Card.Img src={doll} />
                        </Card>



                        <Card className='border border-danger' style={{ width: '280px', height: '280px' }}>
                            <Card.Img src={doll1} />

                        </Card>
                    </Col>
                    <Col>
                    <h1 className='mt-5'>Gallery</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;