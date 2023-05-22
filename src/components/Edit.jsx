import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const loader = useLoaderData()
    const { _id, img, name, sellername, email, price, quantity, rating, description, category } = loader;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://dolls-toy-server-three.vercel.app/addtoys/${_id}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })

};

 



    

    return (

        <Container>
            <Row>
                <Col md={6} className='mx-auto'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={name} className='form-control mt-2 p-2' {...register("name", { required: true, })} />
                        <input defaultValue={sellername} className='form-control mt-2 p-2' {...register("sellername", { required: true, })} />
                        <input defaultValue={email} className='form-control mt-2 p-2' {...register("email", { required: true, })} />
                        <input defaultValue={img} className='form-control mt-2 p-2' {...register("img", { required: true, })} />
                        <select defaultValue={category} placeholder='na' {...register("category", { required: true })} className='mt-3 p-2  form-control'>
                            <option defaultValue="">Select Your Category</option>
                            <option defaultValue="">barbie</option>
                            <option defaultValue="Exotic Sports Cars">baby dolls</option>
                            <option defaultValue="Supercars">American girl</option>
                        </select>
                        <input defaultValue={rating} className='form-control mt-2 p-2' {...register("rating", { required: true, })} />
                        <input defaultValue={quantity} className='form-control mt-2 p-2' {...register("quantity", { required: true, })} />
                        <input defaultValue={price} className='form-control mt-2 p-2' {...register("price", { required: true, })} />
                        <textarea defaultValue={description} rows={4} className='form-control mt-2 p-2' {...register("description", { required: true, })} />

                        <div className='text-center'><button style={{ background: 'black', color: 'white', fontWeight: '700' }} className='btn mt-3 w-50' type='submit'>Update Product</button></div>
                    </form>

                </Col>
            </Row>
        </Container>

    );
};

export default Edit;