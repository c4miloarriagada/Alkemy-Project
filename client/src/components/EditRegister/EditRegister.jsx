import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editRegister, putRegister } from "../../redux/actions/actions";
import { NavBar } from "../NavBar/NavBar";

import { Form, Container, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import "./EditRegister.css";

export const EditRegister = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: register?.name,
    description: register?.description,
    type: register?.type,
    total: register?.total,
    date: register?.date
  });

  useEffect(() => {
    dispatch(editRegister(id));
  }, [dispatch]);

  useEffect(() => {
    setInput({
      name: register?.name,
      description: register?.description,
      type: register?.type,
      total: register?.total,
    });
  }, [register]);

  const handleOnchange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (input.total < 0) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Amount 💸 must be a positive number",
        text: "Something went wrong!",
      });
    } else {
      e.preventDefault();
      dispatch(putRegister(id, input));
      Swal.fire({
        title: "Register was update successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      }).then(() => {
        navigate("/home");
      });
    }
  };

  return (
    <div className="background ">
      <NavBar />
      <h1 className="mt-5 h1 text-center">Edit Register 📝</h1>
      <Container>
      <Container className="mt-5" style={{ width: '20rem' }}>
        <Card bg='dark'>
          <Card.Body>
            {" "}
            <Form onSubmit={handleSubmit}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-white">Name </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={register.name}
                    name="name"
                    value={input.name}
                    onChange={handleOnchange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-white">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    style={{ resize: "none" }}
                    placeholder={register.description}
                    rows={2}
                    value={input.description}
                    onChange={handleOnchange}
                  />
                </Form.Group>
                <Form.Control
                type="date"
                name="date"
                placeholder={register.date}
                value={input.date}
                onChange={handleOnchange}    
                
                
              />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="text-white"> Amount </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={`$${register.total}`}
                    min="0"
                    name="total"
                    value={input.total}
                    onChange={handleOnchange}
                  />
                </Form.Group>
              </Form>
              <Form.Select
                name="type"
                onChange={(e) => handleOnchange(e)}
                aria-label="Default select example"
              >
                <option>Type</option>
                <option value={"sum"}>Deposited 💰</option>
                <option value={"rest"}>Withdraw 💸</option>
              </Form.Select>
              <br />
              <Button className="float-right" variant="success" type="submit">
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
