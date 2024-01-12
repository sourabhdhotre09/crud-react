import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    
    const param = useParams();

    const [values, setvalues] = useState({
        id: param.id,
        name: '',
        email: '',
        age:''
    })

    console.log(param);


    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud/${param.id}`)
        .then((res) => {
            console.log(res.data);
            setvalues({...values, name:res.data.name, email:res.data.email, age:res.data.age})
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    



    function handleUpdate(e){
        e.preventDefault();
        alert("New Data Updated..!! 😎")
        axios.put(`https://65964c386bb4ec36ca024a58.mockapi.io/crud-app/crud/${param.id}`,
            {
                name:values.name,
                email:values.email,
                age:values.age,
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
                        <h3>Update:</h3>
                        <form action="">
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text"
                                    value={values.name}
                                    onChange={(e)=> setvalues({ ...values, name: e.target.value })}
                                    className='form-control'
                                    placeholder='Enter Name Here' />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email"
                                    className='form-control'
                                    value={values.email}
                                    onChange={(e)=> setvalues({...values, email:e.target.value})}
                                    placeholder='Enter Email Here' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number"
                                    value={values.age}
                                    onChange={(e)=> setvalues({...values, age:e.target.value})}
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