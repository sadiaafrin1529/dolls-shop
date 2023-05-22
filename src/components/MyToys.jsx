import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { Container, Table } from 'react-bootstrap';
import MyToy from './MyToy';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const [mytoys, setMytoys] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [user?.email, mytoys])

    const handleDelete =(_id)=>{
        const deletedData = confirm('Are You Sure You wantes Delete!!')
        if(deletedData ){
            fetch(`http://localhost:5000/addtoys/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    alert('Delete Successfull')
                })
        }
    }
    return (

        <Container className='mx-auto mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>seller Name</th>
                        <th>Avaliable Qunatity</th>
                        <th>price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    mytoys.map(mytoy => <tbody>
                        <tr>
                            <td>
                                {mytoy.name}
                            </td>
                            <td>
                                {mytoy.category}
                            </td>
                            <td>
                                {mytoy.sellername}
                            </td>
                            <td>
                                {mytoy.quantity}
                            </td>
                            <td>
                                {mytoy.price}
                            </td>
                            <td>
                                 <i onClick={()=>handleDelete(mytoy._id)} class="fa-solid fa-trash mx-2"></i>
                                <Link to={`/edit/${mytoy._id}`} ><i class="fa-solid fa-pen-to-square mx-2"></i></Link>
                            </td>
                        </tr>
                    </tbody>)
                }




            </Table>
        </Container>

    );
};

export default MyToys;