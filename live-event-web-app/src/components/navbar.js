import React from "react";
import '../App.scss'
import Navbar from 'react-bootstrap/Navbar';
import CartAccess from "./cart";

const MenuNavigation = () => {
  return (
    <div>
      <Navbar className='text-center'>
        <Navbar.Brand href="http://localhost:3000/" >accueil</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/programmation" >lineup</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/billeterie" >billeterie</Navbar.Brand>
        <Navbar.Brand href="http://localhost:3000/map" >map</Navbar.Brand>
        <CartAccess />
      </Navbar>
    </div>
  );
};

export default MenuNavigation;
