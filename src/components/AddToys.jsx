import React, { useContext, useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AuthContext } from './AuthProvider';
const AddToys = () => {
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState({})
  const {user} = useContext(AuthContext)
  // useEffect(() => {
  //   fetch('http://localhost:5000/addtoys')
  //     .then(res => res.json())
  //     .then(data => setUsers(data))
  // }, [])
  const onChangeHandler = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...updated }
    newValue[field] = value;
    setUpdated(newValue)
}
const handleAddToys = e =>{
  e.preventDefault()
  const form = e.target;
  const email = form.email.value;
  const category= form.category.value;
  const name = form.name.value;
  const sellername = form.sellername.value;
  const price = form.price.value;
  const rating = form.rating.value;
  const quantity=form.quantity.value;
  const description=form.description.value;
  const img = form.img.value;

  const addToys = {
       name,
      sellername,
      email,
      img,
      category,
      rating,
      quantity,
      description,
      price,
  }
console.log(addToys)
fetch('http://localhost:5000/addtoys', {
method : 'POST',
headers : {
  'Content-Type': 'application/json'
},
body: JSON.stringify(addToys)
})
.then(res => res.json())
.then(data => {
console.log(data);
const newUsers = [...users , data];
setUsers(newUsers);
// form.reset();
})
}

  return (
    <Container className='mx-auto mt-5'>
      <Form onSubmit={handleAddToys}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">

            <Form.Control onChange={onChangeHandler} type="name" name='name' placeholder="Product Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">

            <Form.Control onChange={onChangeHandler} type="name" name='sellername' placeholder="Seller Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">

            <Form.Control onChange={onChangeHandler} type="email" name='email' placeholder="Email" />
          </Form.Group>

          <Form.Group  as={Col} controlId="formGridState">

            <Form.Select onChange={onChangeHandler} name='category' defaultValue="Choose...">
              <option>Select Your Product category</option>
              <option>baby dolls</option>
              <option>barbie</option>
              <option>American girl</option>
            </Form.Select>
          </Form.Group>
        </Row>





        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPrice">

            <Form.Control onChange={onChangeHandler} type="price" name='price' placeholder="Price" />
          </Form.Group>



          <Form.Group as={Col} controlId="formGridZip">

            <Form.Control onChange={onChangeHandler} type="text" name='rating' placeholder="Rating minimum 0 -max value 5" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridQuantity">

            <Form.Control onChange={onChangeHandler} type="text" name='quantity' placeholder="Quantity" />
          </Form.Group>



          <Form.Group as={Col} controlId="formGridZip">

            <Form.Control onChange={onChangeHandler} type="text" name='img' placeholder="imgURL" />
          </Form.Group>

        </Row>
        <FloatingLabel controlId="floatingTextarea2" label="DesCription">
          <Form.Control
          onChange={onChangeHandler}
          name='description'
            as="textarea"
            placeholder=""
            style={{ height: '100px' }}
          />
        </FloatingLabel>

       

        <div className="d-grid gap-2">
          <Button className=' mb-5 mt-3' type="submit" variant="primary" size="lg">
            Add New Products
          </Button>

        </div>


      </Form>
    </Container>
  );
};

export default AddToys;