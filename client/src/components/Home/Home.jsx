import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRegister, getRegister } from "../../redux/actions/actions";
import { NavBar } from "../NavBar/NavBar";

import Swal from "sweetalert2";
import { Button, Table } from "react-bootstrap";

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
      confirmButtonColor: "#f0ad4e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success").then(
          () => {
            location.reload();
          }
        );
      }
    });
  };

  return (
    <div className="text-center">
      <NavBar />
      <h1 class="mt-5">Welcome to management of finances app 💰</h1>
      <div  class="container mt-4">
      <Button  as={Link} variant="success" to={`/add`} className='mt-3'  size="lg">
          Add Register 
        </Button>
        <Table className="mt-4" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Register</th>
              <th>Description</th>
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
                <td>{e.type === "sum" ? "Deposited" : "Withdraw"}</td>
                <td>{e.total}</td>
                <td>
                  <Button as={Link} variant="secondary" to={`/edit/${e.id}`}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handleDelete(e.id)} variant="warning">
                    {" "}
                    ✖{" "}
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <Table>
          <td>
            {sum - rest < 0 ? (
              <td class="p-2 mr-2 bg-danger text-white">
                Total = $ {sum - rest}
              </td>
            ) : (
              <td class="p-2 mb-2 bg-success text-white">
                Total = $ {sum - rest}
              </td>
            )}
          </td>

          <td>
            {totalSum - totalRest < 0 ? (
              <td class="p-2 mb-2 bg-danger text-white">
                Total Historical Balance = $ {totalSum - totalRest}{" "}
              </td>
            ) : (
              <td class="p-2 mb-2 bg-success text-white">
                Total Historical Balance = $ {totalSum - totalRest}{" "}
              </td>
            )}{" "}
          </td>
        </Table>
      </div>
    </div>
  );
};
