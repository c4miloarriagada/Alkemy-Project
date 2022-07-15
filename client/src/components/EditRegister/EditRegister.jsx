import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editRegister } from '../../redux/actions/actions'
import { Table, Container } from 'react-bootstrap'
import { NavBar } from '../NavBar/NavBar'

export const EditRegister = () => {
    

    const { id } = useParams();
    const dispatch = useDispatch();
    const register = useSelector((state) => state.register)
    

    console.log(register)

    useEffect(()=>{
        dispatch(editRegister(id));
    },[dispatch])
    

  return (
    <div>
        <NavBar/>
        <h1 className='text-center'>Edit Register</h1>
        <Container>
        <Table className='mt-5' striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Container>
       

    </div>
  )
}
