import { Container, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '.././images/logo.svg';
import MenuNavigation from './navbar';

export const TopBar = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-between d-md-none" style={{ borderBottomStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '0A0901' }}>
        <NavBar />
      </Row>
      <Row className="d-flex justify-content-between d-none d-md-block">
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
  return (
    <Navbar bg="none" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto" style={{textAlign:'center'}}>
            <Nav.Link href="http://localhost:3000">Accueil</Nav.Link>
            <Nav.Link href="http://localhost:3000/programmation">Programmation</Nav.Link>
            <Nav.Link href="http://localhost:3000/billeterie">Billeterie</Nav.Link>
            <Nav.Link href="http://localhost:3000/map">Carte</Nav.Link>
            <NavDropdown title="Infos pratiques" id="navbarDropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled href="#" tabindex="-1" aria-disabled="true">Disabled</Nav.Link>
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
