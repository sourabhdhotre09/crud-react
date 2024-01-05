import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';


const ShowData = ({sendDataToParent}) => {
    const [data, setData] = useState([])
    const [deleteId, setDeleteId] =useState('');
    const [showModal, setShowModal] = useState(false);

    const toggleShow = (e) => {
        setDeleteId(e);
        setShowModal(!showModal)
    };


    function getData() {
        axios.get('https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud/')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    const handleDelete = (e) => {
        // setID(e);
        // console.log(id);
        axios.delete(`https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud/${e}`)
            .then(() => {
                getData();
            })
        
        toggleShow();
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>CRUD Data:</h3>
                    <div className="table-responsive">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((eachData,index) =>
                                    <tr>
                                        <td>{eachData.id}</td>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>{eachData.age}</td>
                                        <td>
                                            <Link to={`/update/${eachData.id}`} onClick={()=>sendDataToParent(eachData.id)} className='btn btn-secondary m-1'>Update</Link>
                                            <button onClick={()=>toggleShow(eachData.id)} className='btn btn-danger m-1'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    </div>
                    <ToastContainer position='top-center'>
                        <Toast show={showModal} onClose={()=>toggleShow()}>
                            <Toast.Header>
                                <strong className="me-auto">Are you Sure?</strong>
                            </Toast.Header>
                            <Toast.Body className='text-end'>
                                <button className='btn btn-secondary' onClick={()=>toggleShow()}>No I'm not Sure &#128533;</button>
                                <button onClick={() => handleDelete(deleteId)} className='btn btn-danger mx-2'>Delete &#129324;</button>
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </div>
        </div>
    )
}

export default ShowData