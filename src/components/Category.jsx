import React, { useEffect, useState } from 'react';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Category = () => {
  const [activeTab, setActiveTab] = useState('barbie');
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    fetch('https://dolls-toy-server-three.vercel.app/addtoys')
      .then(res => res.json())
      .then(data => setAlldata(data))
  }, [])
  console.log(activeTab)
  return (
    <Container>
      <Row>
        <h1 style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold" }} className='mx-auto text-center'>
          Categories
        </h1>
        <p style={{ fontFamily: " monospace", color: "mediumaquamarine", fontSize: '20px' }} className='text-center'>
          See all categories
        </p>
        <Col>
          <div style={{fontFamily:"serif"}} className='text-center'>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button  onClick={()=>setActiveTab('barbie')} type="button" class="btn btn-danger">Barbies</button>
            <button onClick={()=>setActiveTab('baby dolls')} type="button" class="btn btn-warning">Baby Dolls</button>
            <button onClick={()=>setActiveTab('American girl')} type="button" class="btn btn-success">American Dolls</button>
          </div>
          </div>
          
        </Col>
      </Row>
      <Row>
        {
          alldata?.map(acTab => acTab.category === activeTab && 
            <Col style={{fontFamily:"serif"}}  lg={3} md={4} sm={6} className='mx-auto' data-aos="fade-up"data-aos-anchor-placement="top-bottom">
            <div className='border border-1 rounded-1 p-2 m-2'>
                <img style={{width:"300px",height:"300px"}} data-aos="fade-up"data-aos-anchor-placement="top-bottom" src={acTab.img} className='img-fluid' alt="" /> <hr />
                <h6 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='text-center' style={{color:'#54092A'}}>{acTab.name}</h6>
                <div data-aos="fade-up"data-aos-anchor-placement="top-bottom" style={{display:"flex",justifyContent:'space-between',padding:'0px 10px'}}>
                <Rating
                            placeholderRating={acTab.rating}
                            emptySymbol={<i className="text-warning fa-sharp fa-regular fa-star"></i>}
                            placeholderSymbol={<i className="text-warning fa-sharp fa-solid fa-star"></i>}
                            fullSymbol={<i className="text-warning fa-sharp fa-solid fa-star"></i>}
                        />
                     <h6 data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='text-center' style={{color:'#54092A'}}><FontAwesomeIcon icon={faDollar}/> {acTab.price}</h6>
                </div>
               
                <div data-aos="fade-up"data-aos-anchor-placement="top-bottom" className='text-center'><Button className='btn btn-secondary'><Link style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to={`/singleData/${acTab._id}`}>View details</Link></Button></div>
            </div>
        </Col>

          )
        }

      </Row>
    </Container>
  );
};

export default Category;