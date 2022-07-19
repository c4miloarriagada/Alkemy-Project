import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import authService from '../../services/auth-services';

import { Container, Form, Button, Card } from "react-bootstrap";

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
      <div className="background ">
        <h1 className="text-center h1Landing display-4">
          Login
        </h1>
        <Container className="mt-5 d-flex justify-content-md-center">
          <Container  className="mt-5 " style={{ width: '20rem' }}>
          <Card className="mt-5" bg='dark' >
          <Card.Body>
          <Form onSubmit= { handleLogin }>  
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2" >
            <Form.Label  className="text-white">Email</Form.Label>
            <Form.Control  type="text" placeholder="email@email.com" name='email' autoComplete="off" value={input.email} onChange={handleOnchange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password"  name='password' placeholder='•••••••••' autoComplete="off" value={input.password} onChange={handleOnchange}/>
        
          </Form.Group>
        
        <Button variant="success" type="submit" className="float-right">
          Submit
        </Button>
        </Form>
          </Card.Body>
        </Card>
        
          </Container>
        </Container>
      </div>
      );
}