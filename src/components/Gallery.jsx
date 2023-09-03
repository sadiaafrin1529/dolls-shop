import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import food1 from '../assets/imgs/doll1.jpg';
import food2 from '../assets/imgs/doll5.jpg';
import food3 from '../assets/imgs/doll3.jpg';
import food4 from '../assets/imgs/doll4.jpg';
import food5 from '../assets/imgs/doll2.jpg';
import food6 from '../assets/imgs/doll6.jpg';


const images = [
  food1,
  food2,
  food3,
  food5,
  food6,
  food4,
  
  
];

const Gallery = () => {
  return (
    <Container className='mx-auto'>
      <Row className='mt-5 mb-5'>
        <h1 style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive",fontWeight:"bold" }} className='mx-auto text-center'>
          Gallery
        </h1>
        <p style={{ fontFamily:" monospace",color:"mediumaquamarine",fontSize:'20px' }} className='text-center'>
        Check Gallery
        </p>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, index) => (
              <div className='column' key={index}>
                <img style={{ maxWidth: '100%', height: 'auto' }} src={image} alt={`Food ${index + 1}`} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Row>
    </Container>
  );
};

export default Gallery;
