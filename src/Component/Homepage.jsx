import React from 'react'
import Gif from '../images/coding-freak.gif'

const Homepage = () => {
  return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                    <h2 className='my-4'>Welcome to our CRUD Application..!!</h2>
                    <img src={Gif} style={{width:'100%',height:370}} alt="description of gif" /> 
                </div>
            </div>
        </div>
  )
}

export default Homepage