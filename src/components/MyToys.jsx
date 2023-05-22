import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Container, Table } from 'react-bootstrap';

const MyToys = () => {
    const [mytoys,setMytoys] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
        .then(res => res.json())
        .then(data => setMytoys(data))
    },[user?.email])
    console.log(mytoys)
    return (
        
           <Container className='mx-auto mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name-category-Pic</th>
                        <th>Seller Details</th>
                        <th>Price & Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
              
            </Table>
            </Container>
        
    );
};

export default MyToys;