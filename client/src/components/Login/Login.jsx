import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import authService from '../../services/auth-services';

import { Container, Form, Button } from "react-bootstrap";

import Swal from "sweetalert2";



export const Login=()=>{

    const navigate = useNavigate()
    const [ input, setInput ] = useState({
      email : '',
      password : ''
    }) 
    const { email , password } = input;


    const handleLogin= async(e)=>{
        e.preventDefault();
        try{
            await authService.signup(email, password).then(
                ()=>{
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successful login ',
                    showConfirmButton: false,
                    timer: 1500
                  })
                    navigate('/home');
                   
                },
                (error)=>{  
                 if(!!error.response.data.errors){
                   Swal.fire({
                    icon: 'error',
                    title: `${error.response.data.errors[0].msg}`,
                    text: 'Please check your e-mail'
                  }); 

                 }else{
                  Swal.fire({
                    icon: 'error',
                    title: `Password Invalid`,
                    text: 'Please check your password'
                  }); 
                 }
                         
                }
            )
            
        }catch(err){
            console.log(err);
        }
    
    }
   
    
  const handleOnchange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  };


    return (
      <div>
        <h1 className="text-center">
          Login
        </h1>
        <Container>
        <Form onSubmit= { handleLogin }>  
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control  type="text" placeholder="email@email.com" name='email' autoComplete="off" value={input.email} onChange={handleOnchange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"  name='password' placeholder='•••••••••' autoComplete="off" value={input.password} onChange={handleOnchange}/>
        
          </Form.Group>
        
        <Button variant="success" type="submit">
          Success
        </Button>
        </Form>
        </Container>
      </div>
      );
}