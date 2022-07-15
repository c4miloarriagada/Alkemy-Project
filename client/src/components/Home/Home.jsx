import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  deleteRegister, getRegister } from "../../redux/actions/actions";
import { NavBar } from "../NavBar/NavBar";



export const Home = () => {
  const dispatch = useDispatch();
  const registers = useSelector((state) => state.finances);
  const user = JSON.parse(localStorage.getItem("user"));
  const totalSum = registers
    ?.filter((e) => e.type === "sum")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);
  const totalRest = registers?.filter((e) => e.type === "rest")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);
  const sum = registers?.slice(0, 10)
    .filter((e) => e.type === "sum")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);
  const rest = registers?.slice(0, 10)
    .filter((e) => e.type === "rest")
    .map((e) => e.total)
    .reduce((acc, el) => acc + el, 0);

   
  useEffect(() => {
    dispatch(getRegister(user.user.id));
  
  }, [dispatch]);


  const handleDelete = (id) => {
    dispatch(deleteRegister(id))
    window.location.reload()
  }
   


  return (
    <div>
      <NavBar />
      <h1 class="text-center mt-5">Welcome to management of finances app 💰</h1>

      <div class="container">
        <table className="table table-sm table-striped table-dark mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Register</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Amount</th>
              <th scope='col'></th>
              <th scope='col'></th>
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
                <td><Button as={Link} variant="secondary" to={`/edit/${e.id}`}>Edit</Button></td>
                <td><Button onClick={()=> handleDelete(e.id)} variant="warning"> ✖ </Button></td>
              </tr>
            </tbody>
          ))}
          <tbody>
          <td class="table-dark">
            {sum - rest < 0 ? (
              <td class="p-3 mb-2 bg-danger text-white">
                Total = $ {sum - rest}
              </td>
            ) : (
              <td class="p-3 mb-2 bg-success text-white">
                Total = $ {sum - rest}
              </td>
            )}{" "}
          </td>
          <td class="table-dark">
            {totalSum - totalRest < 0 ? (
              <td class="p-3 mb-2 bg-danger text-white">
                Total Historical Balance = $ {totalSum - totalRest}
              </td>
            ) : (
              <td class="p-3 mb-2 bg-success text-white">
                Total Historical Balance = $ {totalSum - totalRest}
              </td>
            )}{" "}
          </td>
          </tbody>
        
        </table>
      </div>
    </div>
  );
};
