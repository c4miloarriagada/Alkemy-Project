import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth-services';

import { Container, Form, Button, Badge } from "react-bootstrap";



export const Register = () => {

  const navigate = useNavigate()
  const [ register, setRegister ] = useState({
    name: '',
    email: '',
    password: ''
  });

    console.log(register)
  const handleRegister = async(register)=>{
      console.log(register.name)
      e.preventDefault();
      try {
          await authService.register(register).then(
            (response)=>{
                console.log(response.data)

                  navigate('/home')
                  
              }
          )
      } catch (error) {
          console.log(error)
      }
  }

  const handleOnchange = (e) => {
    setRegister({
      ...register,
      [e.target.name] : e.target.value
    })
  };



  return (
       <div>

        <h1>Register</h1>
        <Container>
        <Form onSubmit={handleRegister}> 
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name='name' value={register.name} onChange={handleOnchange} />
        
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control  type="text" placeholder="email@email.com" name='email' value={register.email} onChange={handleOnchange}/>
        
          </Form.Group>
          
        </Form> 
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  name='password' placeholder='•••••••••' value={register.password} onChange={handleOnchange}/>
        
          </Form.Group>
        
        <Button variant="success" type="submit">
          Success
        </Button>
        </Form>
      </Container>
      </div>
      );
}
