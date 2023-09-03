import React from 'react';
import Slider from 'react-slick';
import bb from "../assets/imgs/bb.png"
import bb1 from "../assets/imgs/bb1.png"
import bb2 from "../assets/imgs/bb2.png"
import bb3 from "../assets/imgs/bb4.png"
import bb4 from "../assets/imgs/bb3.png"
import bb5 from "../assets/imgs/bb5.png"
import bb6 from "../assets/imgs/bb6.png"
import { Container, Row } from 'react-bootstrap';
const PupolarToys = () => {
    var settings = {
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container >
            <Row className='mt-5 mb-5'>
            <h1 style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold" }} className='mx-auto text-center'>
          Popular Toys
        </h1>
        <p style={{ fontFamily: " monospace", color: "mediumaquamarine", fontSize: '20px' }} className='text-center'>
          See all Popular toys in oue shop
        </p>
                <Slider {...settings} className='slider-container'>
                    <div className='slide-item'>
                        <img className='img-fluid' src={bb} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={bb1} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img style={{width:"150px"}} className='img-fluid' src={bb2} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img  style={{width:"150px",height:"150px"}} className='img-fluid' src={bb5} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img   className='img-fluid' src={bb4} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img   className='img-fluid' src={bb3} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img   className='img-fluid' src={bb6} alt="" />
                    </div>
                    {/* <div className='slide-item'>
                        <img className='img-fluid' src={bb5} alt="" />
                    </div> */}
                    {/* 
                    <div className='slide-item'>
                        <img className='img-fluid' src={like2} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like3} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like4} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like5} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like6} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like3} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like8} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like9} alt="" />
                    </div> */}
                </Slider>
            </Row>
        </Container>
    );
};

export default PupolarToys;