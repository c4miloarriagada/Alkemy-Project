import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

import { Container, Form, Button, Badge } from "react-bootstrap";
import Swal from "sweetalert2";
import { postRegister } from "../../redux/actions/actions";

export const AddRegister = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ error, setError ] = useState({})
  const [ input, setInput ] = useState({
    name: "",
    type: "",
    description: "",
    total: "",
    id: user.user.id
  });


  const handleOnchange = (e) => {
    setInput((state) => {
        const newState ={
            ...state,
            [e.target.name]: e.target.value
            
        }
        setError(validate(newState))
        return  newState;
    })
  };

  const handleSubmit = (e) =>{
    if (!input.name) {
     e.preventDefault()
     Swal.fire({
       icon: 'error',
       title: 'All fields are required',
       text: 'Please complete the form!',
   
     });
     } else {
       e.preventDefault();
       dispatch(postRegister(input));
       Swal.fire({
         title: 'Register was created successfully',
         showClass: {
           popup: 'animate__animated animate__fadeInDown'
         },
         hideClass: {
           popup: 'animate__animated animate__fadeOutUp'
         }
       }).then(()=>{
         navigate('/home')
       })
     }
     
   }

   const validate = ( input ) => {
    let error = {};
    if(!input.name || input.name.length < 3){
        error.name = 'Name is required'
    }
    if(!input.type){
        error.type = 'Type is required'
    }
    if(!input.description || input.description.length < 5){
        error.description = 'Description is required'
    }
    if(!input.total || input.total < 0){
        error.total = 'Amount is required'
    }

    return error

   }


  return (
    <div>
      <NavBar />
      <h1 className="mt-5 text-center">Add Register 💵</h1>
      <Container>
        <Form onSubmit={handleSubmit}> 
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name of register" name='name' value={input.name} onChange={handleOnchange} />
            {error.name && <Badge  bg="danger" t className="text-white ">{error.name}</Badge>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} name='description' value={input.description} onChange={handleOnchange} />
            {error.description && <Badge  bg="danger" t className="text-white ">{error.description}</Badge>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Amount 💸</Form.Label>
            <Form.Control min="0" type="number" placeholder="$" name='total' value={input.total} onChange={handleOnchange}/>
            {error.total && <Badge  bg="danger" t className="text-white ">{error.total}</Badge>}
          </Form.Group>
        </Form>

        <Form.Select
          name="type"
          onChange={(e) => handleOnchange(e)}
          aria-label="Default select example"
        >
          <option>Type</option>
          <option value={"sum"}>Deposited</option>
          <option value={"rest"}>Withdraw</option>
        </Form.Select>
        <br/>
        {error.type && <Badge  bg="danger" t className="text-white ">{error.type}</Badge>}
        <br />
        <Button disabled={Object.keys(error).length} variant="success" type="submit">
          Success
        </Button>
        </Form>
      </Container>
    </div>
  );
};
