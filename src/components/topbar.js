import React from 'react';
import { Container, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import logo from '.././images/logo.svg';
import MenuNavigation from './navbar';
import { useAppContext } from '../context2'; ;

export const TopBar = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between d-md-none bt-border" >
        <NavBar />
      </Row>
      <Row className="d-none d-md-flex align-items-center bt-border pb-4">
        <Col md={4}>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        </Col>
        <Col md={8} className="justify-content-center">
          <MenuNavigation />
        </Col>
      </Row>
    </Container>
  );
};

const NavBar = () => {
  const { dispatch } = useAppContext();

  const handleCartClick = () => {
    dispatch({ type: 'showCart', payload: { show: true } });
  };
  return (
    <Navbar bg="none" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto" style={{ textAlign: 'center' }}>
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/programmation">Programmation</Nav.Link>
            <Nav.Link as={Link} to="/billeterie">Billeterie</Nav.Link>
            <Nav.Link as={Link} to="/map">Carte</Nav.Link>
            <Nav.Link as={Link} to="" onClick={handleCartClick}>Panier</Nav.Link>
            <NavDropdown title="Informations générales" id="navbarDropdown">
              <NavDropdown.Item as={Link} to='/venir-au-festival' >Venir au festival</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/deviens-benevole' >Deviens bénévole</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default NavBar;
