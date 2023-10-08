import React, { ReactElement } from "react";
import "./MenuBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MenuBar() : ReactElement {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Rating App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center">
                    <NavLink className="navbar-item" to="/home">Home 🏠</NavLink>
                    <NavLink className="navbar-item" to="/ratings">My Ratings 🎖</NavLink>
                    <NavLink className="navbar-item" to="/contact">Contact ✉️</NavLink>
                    <NavLink className="navbar-item" to="/about">About 🔮</NavLink>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default MenuBar;