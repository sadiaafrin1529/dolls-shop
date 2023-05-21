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
                <Col className=''>
                    <h1 className='mt-5 text-center'>Gallery</h1>
                    <p>A doll is a model typically of a human or humanoid character, often used as a toy for children.Dolls at Argos. Explore baby dolls, princess toys & much more. </p>
                    </Col>

                    
                    <Col className='  mb-3 '>
                        <Card className='border border-danger' style={{ width: '280px', height: '280px' }}>
                            <Card.Img style={{ width: '250px', height: '250px' }} src={doll2} />
                        </Card>


                        <Card className='mx-5 border border-danger' style={{ width: '280px', height: '280px' }}>
                            <Card.Img style={{ width: '250px', height: '250px' }} src={doll} />
                        </Card>



                        <Card className='border border-danger' style={{ width: '280px', height: '280px' }}>
                            <Card.Img style={{ width: '250px', height: '200px' }} src={doll1} />

                        </Card>
                    </Col>
                    
                    
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;