import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import authService from '../../services/auth-services';



export const Register = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  


  const handleRegister = async(e)=>{
      e.preventDefault();
      try {
          await authService.register(name, password,email).then(
              (response)=>{
                  navigate('/')
                  
              }
          )
      } catch (error) {
          console.log(error)
      }
  }




  return (
       <div className="container">

        <h1>Register</h1>
        <form   onSubmit={handleRegister}>
          <input
            className="form-control "
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            
          />
          <label className="form-label"> Name </label>
        <input
         className="form-control"
            type="text"
            value={password}
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="form-label"> Password </label>
          <input
          className="form-control"
            type="text"
            value={email}
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="form-label"> Email </label>
          <button  class="btn btn-primary btn-block mb-4">Register</button>
        </form>
      </div>
      );
}
