import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import banner1 from '../assets/imgs/banner1.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
           <Container>
      <Carousel>
        <Carousel.Item>
          <div className="position-relative">
            <div className="gradient-overlay"></div>
            <img src={banner1} alt="Slider 1" className="d-block w-100" />
            <Carousel.Caption className="text-end">
              <h3>Slide 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative">
            <div className="gradient-overlay"></div>
            <img src={banner1} alt="Slider 2" className="d-block w-100" />
            <Carousel.Caption className="text-end">
              <h3>Slide 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative">
            <div className="gradient-overlay"></div>
            <img src={banner1} alt="Slider 3" className="d-block w-100" />
            <Carousel.Caption className="text-end">
              <h3>Slide 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
        </div>
    );
};

export default Banner;