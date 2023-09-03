import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import banner1 from '../assets/imgs/banner.jpg'
import banner2 from '../assets/imgs/banner1.jpg'
import banner3 from '../assets/imgs/banner2.jpg'
import Slider from 'react-slick';
import './Banner.css'
const Banner = () => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    Autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: false,
    slickPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div>
      <Container fluid className='banner'>
        <Row>
          <Col md={10} className='mx-auto'>
            <Slider {...settings} >

              <div className='slide-item' >
                <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                  <h1 style={{ fontFamily: "Times,  Georgia, serif", color: 'white' }} className="text-center">Barbie Dollhouses </h1>
                  <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-3' style={{ color: 'white',fontFamily: "Times Times New Roman  Georgia serif" }}>
                    Barbie Dreamhouse Doll House Playset, ​Barbie House With 75+ Accessories</h3>
                  <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-3' style={{ color: "saddlebrown",fontFamily: "Times Times New Roman  Georgia serif" }}>When young imaginations open the door to the Barbie® Dreamhouse®, they'll discover unlimited storytelling possibilities! Standing 43 inches tall and 41 inches wide, this dreamy dollhouse inspires 360-degree play with three floors and 10 indoor and outdoor living areas.</p>
                  <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='btn border-border-1 px-4' style={{ background: '#54092A', color: 'white', fontWeight: '700',fontFamily: "Times Times New Roman  Georgia serif" }}>Go Toys</button>
                </div>
              </div>

              <div className='slide-item' >
                <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                  <h1 style={{ fontFamily: "Times Times New Roman  Georgia serif", color: 'white' }} className="text-center">Folding Baby Doll Stroller Set</h1>
                  <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-3' style={{ color: 'white',fontFamily: "Times Times New Roman  Georgia serif" }}>
                  Kid Concepts 13" Soft Baby Doll 4 in 1 Set - Ages 3 Years and up</h3>
                  <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-3' style={{ color: "saddlebrown" ,fontFamily: "Times Times New Roman  Georgia serif"}}>Doll Travel Stroller with one hand push for adventure filled strolls with your baby doll. The stroller is easy to fold and has an adjustable seat belt to keep your doll safe and secure. The design of the item has a very stylish, sleek looking and will accent any style or wardrobe. 14 inch soft body baby doll easy for little mommies to carry, rock and play with comfort. Doll comes dressed in stylish matching polka dot bottom and a bright top. This product is made for children ages 3 and up.</p>
                  <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='btn border-border-1 px-4' style={{ background: '#54092A', color: 'white', fontWeight: '700',fontFamily: "Times Times New Roman  Georgia serif" }}>Go Toys</button>
                </div>
              </div>
              <div className='slide-item' >
                <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                  <h1 style={{ fontFamily: "Times Times New Roman  Georgia serif", color: 'white' ,}} className="text-center">American Girl® Disney Princess Rapunzel Collector Doll </h1>
                  <h3 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-3' style={{ color: 'white',fontFamily: "Times Times New Roman  Georgia serif" }}>
                  Pay in full or in 4 interest-free installments of $75.00 with shop</h3>
                  <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='mt-3' style={{ color: "saddlebrown",fontFamily: "Times Times New Roman  Georgia serif" }}>Rapunzel is a dreamer who is determined to experience the world beyond her tower. Celebrate this beloved Disney Princess with this captivating collector doll, adorned from crown to gown in Swarovski® crystals. This limited-edition Disney Princess doll is part of the American Girl® Collector Series. No more than 4,000 American Girl® Disney Princess Rapunzel Collector Dolls have been created worldwide.</p>
                  <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='btn border-border-1 px-4' style={{ background: '#54092A', color: 'white', fontWeight: '700',fontFamily: "Times Times New Roman  Georgia serif" }}>Go Toys</button>
                </div>
              </div>






            </Slider></Col>

        </Row>
      </Container>

    </div>
  );
};

export default Banner;