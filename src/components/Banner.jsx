import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import banner1 from '../assets/imgs/banner1.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
           <Container fluid>
      <Carousel>
        <Carousel.Item>
          <div className="position-relative">
            <div className="gradient-overlay"></div>
            <img src={banner1} alt="Slider 1" className="d-block w-100" />
           
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative">
            <div className="gradient-overlay"></div>
            <img src={banner1} alt="Slider 2" className="d-block w-100" />
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative">
            <div className="gradient-overlay"></div>
            <img src={banner1} alt="Slider 3" className="d-block w-100" />
            
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
        </div>
    );
};

export default Banner;