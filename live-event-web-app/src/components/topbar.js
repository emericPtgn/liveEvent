import React from 'react';
import { Container, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Importer Link depuis react-router-dom
import logo from '.././images/logo.svg';
import MenuNavigation from './navbar';
import { useAppContext } from '../context2'; ;

export const TopBar = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between d-md-none" style={{ borderBottomStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '0A0901' }}>
        <NavBar />
      </Row>
      <Row className="d-none d-md-flex align-items-center">
        <Col md={4}>
          <Logo />
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
    // Appeler la fonction pour afficher le panier
    dispatch({ type: 'showCart', payload: { show: true } });
  };
  return (
    <Navbar bg="none" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="#">
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
            <NavDropdown title="Infos pratiques" id="navbarDropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled href="#" tabIndex="-1" aria-disabled="true">Disabled</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Logo = () => {
  return (
    <>
      <img src={logo} alt="logo-live-event" style={{ width: 230 }} />
    </>
  );
};

export default NavBar;
