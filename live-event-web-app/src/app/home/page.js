// HomePage.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import MenuNavigation from '../../components/navbar';



const HomePage = () => {
  return (
    <Container fluid>
      <Row className="justify-content-end">
        <Col>
          <MenuNavigation />
          <h2>Welcome to the Home Page</h2>
          {/* <Image src="/images/homepage-main-image.jpg" fluid /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
