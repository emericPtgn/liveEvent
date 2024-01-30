import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

const MenuNavigation = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
        <div>
        <Navbar className="bg-body-tertiary justify-content-end">
            <Container className='justify-content-end'>
              <Navbar.Brand href="http://localhost:3000/">Accueil</Navbar.Brand>
              <Navbar.Brand href="http://localhost:3000/programmation">Programmation</Navbar.Brand>
              <Navbar.Brand href="http://localhost:3000/billeterie">Billeterie</Navbar.Brand>
              <Navbar.Brand href="http://localhost:3000/map">Map interractive</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuNavigation;