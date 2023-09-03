import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

import { Col, Container, Row } from 'react-bootstrap';
import bb from "../assets/imgs/bb.png"
import bb1 from "../assets/imgs/bb1.png"
import bb2 from "../assets/imgs/bb2.png"
import bb3 from "../assets/imgs/bb4.png"
import { Link } from 'react-router-dom';
const ShortGalary = () => {
    const [markData,setMarkData]=useState([])

    useEffect(()=>{
        fetch('https://dolls-toy-server-three.vercel.app/addtoys')
        .then(res => res.json())
        .then(data => setMarkData(data))
    },[])
    return (
        <Container className='mt-5 mb-5'>
        <Row>
        <h1 style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive", fontWeight: "bold" }} className='mx-auto text-center'>
        Available Toys
        </h1>
        <p style={{ fontFamily: " monospace", color: "mediumaquamarine", fontSize: '20px' }} className='text-center'>
          See all our available toys right now
        </p>
            <Col>
            <Marquee>
                {
                    markData.map(mark =><div>
                        <Link style={{textDecoration:'none',color:'black'}} to={`/addtoys/${mark._id}`}>
                            <img  src={mark.img} style={{width:'200px',height:"200px"}} alt="" />
                            <h3 style={{ fontFamily: " monospace", color: "black", fontSize: '15px' }}>{mark.name}</h3>
                        </Link>
                    </div>)
                }
                </Marquee>
            </Col>
        </Row>
    </Container>
    );
};

export default ShortGalary;