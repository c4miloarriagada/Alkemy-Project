import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRegister, getRegister } from "../../redux/actions/actions";
import { NavBar } from "../NavBar/NavBar";

import Swal from "sweetalert2";
import { Button, Table, Alert, Container, Badge } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  const registers = useSelector((state) => state.finances);
  const user = JSON.parse(localStorage.getItem("user"));
  const totalSum = registers
    ?.filter((e) => e.type === "sum")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);
  const totalRest = registers
    ?.filter((e) => e.type === "rest")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);
  const sum = registers
    ?.slice(0, 10)
    .filter((e) => e.type === "sum")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);
  const rest = registers
    ?.slice(0, 10)
    .filter((e) => e.type === "rest")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);

  useEffect(() => {
    dispatch(getRegister(user.user.id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRegister(id));
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5cb85c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "Your register has been deleted.",
          "success"
        ).then(() => {
          location.reload();
        });
      }
    });
  };

  console.log(registers)


  return (
    <div className="text-center">
      <NavBar />
      <h1 className="mt-3 h1 display-4">Management Finance Application 💰</h1>

      <Button
        as={Link}
        variant="success"
        to={`/add`}
        className="mt-4"
        size="lg"
      >
        Add Register
      </Button>

      {!registers.length ? (
        <Container style={{ height: 715 }}>
          <Alert className="mt-5" variant="info">
            Hi! <b>{user.user.name}</b> please add some register 💸
          </Alert>
        </Container>
      ) : (
        <Container className="Container" style={{ height: 832 }}>
          <Table
            className="mt-4"
            responsive
            striped
            bordered
            hover
            size="sm"
            variant="dark"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Register</th>
                <th>Description</th>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {registers?.slice(0, 10).map((e, index) => (
              <tbody key={e.id}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{e.name}</td>
                  <td>{e.description}</td>
                  <td>{e.date}</td>
                  <td>
                    {e.type === "sum" ? (
                      <h5>
                        <Badge bg="success" text="dark">
                          {" "}
                          Deposit{" "}
                        </Badge>
                      </h5>
                    ) : (
                      <h5>
                        <Badge bg="danger" text="dark">
                          {" "}
                          Withdraw{" "}
                        </Badge>
                      </h5>
                    )}
                  </td>
                  <td>$ {e.total}</td>
                  <td>
                    <Button as={Link} variant="secondary" to={`/edit/${e.id}`}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => handleDelete(e.id)}
                      variant="warning"
                    >
                      {" "}
                      ✖{" "}
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <Table size="md">
            <td>
              {totalSum - totalRest < 0 ? (
                <td class="p-2  bg-danger text-white float-right ">
                  Historical Balance = ${totalSum - totalRest}{" "}
                </td>
              ) : (
                <td class="p-2 bg-success text-white float-right ">
                  Historical Balance = ${totalSum - totalRest}{" "}
                </td>
              )}{" "}
            </td>
            <br />
            <td>
              {sum - rest < 0 ? (
                <td class="p-2  bg-danger text-white float-right">
                  Total Table = $ {sum - rest}
                </td>
              ) : (
                <td class="p-2  bg-success text-white float-right ">
                  Total Table = ${sum - rest}
                </td>
              )}
            </td>
          </Table>
        </Container>
      )}
    </div>
  );
};
