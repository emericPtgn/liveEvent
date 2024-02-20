import React from "react";
import '../App.scss'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';  // Importer Link depuis react-router-dom
import CartAccess from "./cart";

const MenuNavigation = () => {
  return (
    <div className="position-relative">
      <Navbar className='d-flex justify-content-end me-5'>
        <Navbar.Brand as={Link} to="/">accueil</Navbar.Brand>
        <Navbar.Brand as={Link} to="/programmation">lineup</Navbar.Brand>
        <Navbar.Brand as={Link} to="/billeterie">billeterie</Navbar.Brand>
        <Navbar.Brand as={Link} to="/map">map</Navbar.Brand>
      </Navbar>
      <div style={{position: 'absolute', top: -10, right: -10}}>
          <CartAccess />
      </div>
    </div>
  );
};

export default MenuNavigation;
