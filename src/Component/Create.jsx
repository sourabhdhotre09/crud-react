import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')


    const navigate = useNavigate();

    const header = {"Access-Control-Allow-Origin":"*"}
    
    function handleSubmit(e){
        e.preventDefault();
        alert("New Data Created..!! 😎")
        axios.post('https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud',
            {
                name: name,
                email:email,
                age:age,
                header,
            }
        )
        .then(()=>{
            navigate('/show-data');
        })
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h3>Create:</h3>
                        <form action="">
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text"
                                    onChange={(e)=> setName(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Name Here' />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text"
                                    className='form-control'
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder='Enter Email Here' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number"
                                    onChange={(e)=>setAge(e.target.value)}
                                    className='form-control'
                                    placeholder='Enter Age Here' />
                            </div>
                            <input type="submit" onClick={handleSubmit} value="Create" className='form-control btn btn-primary'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create