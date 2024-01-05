import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = (updateid) => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [age, setAge]= useState('');


    const navigate = useNavigate();

    axios.get(`https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud/${updateid.updateid}`)
    .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
    })
    .catch((err)=>{
        console.log(err);
    })


    function handleUpdate(e){
        // e.preventDefault();
        // alert("New Data Created..!! 😎")
        // axios.put(`https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud/${updateid.updateid}`,
        //     {
        //         name: name,
        //         email:email,
        //         age:age,
        //     }
        // )
        // .then(()=>{
        //     navigate('/show-data');
        // })
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h3>Update:</h3>
                        <form action="">
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text"
                                    value={name}
                                    onChange={(e)=> setName(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Name Here' />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email"
                                    className='form-control'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder='Enter Email Here' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number"
                                    value={age}
                                    onChange={(e)=>setAge(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Age Here' />
                            </div>
                            <input type="submit" onClick={handleUpdate} value="Update Data" className='form-control btn btn-primary'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update