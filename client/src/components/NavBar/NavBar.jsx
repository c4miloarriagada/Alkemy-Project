import React from "react";
import {Navbar, Button, Nav} from 'react-bootstrap/';
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth-services";



export const NavBar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()
    
    
    const logOut = ()=>{
      authService.logout();
      navigate('/');
      window.location.reload();
    }


  return (
    <div>
      <Navbar bg="dark" expand="lg" >
        <Navbar.Brand className="text-white">{user?.user.name} Balance's</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Button as={Link} variant="dark" to={'/home'}>Home</Button>
            <Button onClick={logOut} variant="warning" size="sm" >
            Logout
          </Button>
          </Nav>
        </Navbar.Collapse>   
    </Navbar>
    </div>
  );
};
