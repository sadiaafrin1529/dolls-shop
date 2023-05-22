import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Col>
          <div className='text-center'><Button onClick={()=>setActiveTab('barbie')} className='btn btn-secondary'>barbie</Button >
          <Button onClick={()=>setActiveTab('baby dolls')} className='btn btn-secondary'>baby dolls</Button >
          <Button onClick={()=>setActiveTab('American girl')}  className='btn btn-secondary'>American girl</Button ></div>
        </Col>
      </Row>
      <Row>
        {
          alldata?.map(acTab =>acTab.category === activeTab && <Col
            key={acTab._id}
            md={4}
            sm={6}
          >
            <Card className='mt-5 mb-5'>
              <Card.Img style={{ width: '300px', height: '300px' }} className='img-fluid' variant="top" src={acTab.img} />
              <Card.Body className='rounded '>
                <Card.Title><i class="fa-solid fa-star text-warning "></i>{acTab.rating}</Card.Title>
                <Card.Text>
                <i class="fa-solid fa-file-signature"></i> {acTab.name}
                </Card.Text>
                <Card.Text>
                <i class="fa-sharp fa-solid fa-tag"></i> {acTab.price}
                </Card.Text>
                <Button className='btn btn-secondary'><Link style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to={`/singleData/${acTab._id}`}>View details</Link></Button>
              </Card.Body>
            </Card>
          </Col>

          )
        }

      </Row>
    </Container>
  );
};

export default Category;