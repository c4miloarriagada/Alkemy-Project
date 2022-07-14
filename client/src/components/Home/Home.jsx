import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../../redux/actions/actions";
import { NavBar } from "../NavBar/NavBar";

export const Home = () => {
  const dispatch = useDispatch();
  const registers = useSelector((state) => state.finances);
  const user = JSON.parse(localStorage.getItem("user"));
  const sum = registers.finances?.filter(e=>e.type === 'sum').map(e => e.total).reduce((acc, el) => acc + el , 0);
  const rest = registers.finances?.filter(e=>e.type === 'rest').map(e => e.total).reduce((acc, el) => acc + el , 0);


  console.log(registers)


  useEffect(() => {
    dispatch(getRegister(user.user.id));
  }, [dispatch]);



  return (
    <div>
      <NavBar/>
      <h1 class='text-center mt-5'>Welcome to management of finances app 💰
      </h1>
      <div class='container'>

      <table className="table table-sm table-striped table-dark mt-5" >
     <thead>
    <tr>
      <th scope="col-sm">#</th>
      <th scope="col">Register</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
      <th scope="col">$</th>
  
    </tr>
  </thead>
  {registers.finances?.map((e, index )=> 
       <tbody>
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{e.name}</td>
      <td>{e.description}</td>
      <td>{(e.type === 'sum') ? 'Deposited' : 'Withdraw'}</td>
      <td>{e.total}</td>
    </tr>
  </tbody>
    ) }
    <th class='table-dark'>{(sum - rest < 0) ?<th class="p-3 mb-2 bg-danger text-white">Total = {sum - rest}</th> : <th class="p-3 mb-2 bg-success text-white">Total = {sum - rest}</th> } </th>
    </table>
      </div> 
    </div>
  );
};
