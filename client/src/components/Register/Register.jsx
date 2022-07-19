import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth-services";

import { Container, Form, Button, Card } from "react-bootstrap";

import Swal from "sweetalert2";

export const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = register;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(name, email, password)
      .then((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registered successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/home");
      });
    } catch (error) {
      Array.isArray(error.response.data.errors)
        ? Swal.fire({
            icon: "error",
            title: `${error.response.data.errors[0].msg}`,
         
          })
        : Swal.fire({
            icon: "error",
            title: `${error.response.data}`,
            text: "Please check your e-mail",
          });
    }
  };

  const handleOnchange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="background">
      <h1 className="text-center display-4 h1Landing">Register</h1>
      <Container className="mt-5 d-flex justify-content-md-center " style={{ width: '20rem' }}>
      <Container className="mt-5">
        <Card className="mt-5" bg='dark'>
          <Card.Body>
          <Form onSubmit={handleRegister}>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={register.name}
                autoComplete="off"
                onChange={handleOnchange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="email@email.com"
                name="email"
                value={register.email}
                autoComplete="off"
                onChange={handleOnchange}
              />
            </Form.Group>
          </Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="•••••••••"
              value={register.password}
              autoComplete="off"
              onChange={handleOnchange}
            />
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
};
