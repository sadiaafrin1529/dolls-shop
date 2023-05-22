import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const loader = useLoaderData();
    console.log(loader)
    const myData = loader.map(load => load)
    const { _id, img, name, sellername, email, price, quantity, rating, description, category } = myData || {};
    // console.log(myData)
    return (
        <div>
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
                {
                    loader.map((lod,i) => <tbody>
                        <tr>
                            <td>{i+ 1}</td>
                            <td><h4>{lod.name}</h4>
                            {lod.category}</td>
                            <td><h5>{lod.sellername}</h5>
                            {lod.email}</td>
                            <td><h6>${lod.price}</h6>
                            {lod.quantity}</td>
                            <td><Button><Link style={{ color: 'white', textDecoration: 'none', fontWeight: '600' }} to={`/singleData/${lod._id}`}> Details</Link></Button></td>
                        </tr>
                    </tbody>)
                }
            </Table>
            </Container>
        </div>
    );
};

export default AllToys;