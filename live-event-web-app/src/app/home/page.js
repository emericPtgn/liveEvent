// HomePage.js
import React from 'react';
import '../../App.scss'
import { useAppContext } from '../../context2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import MenuNavigation from '../../components/navbar';
import Marker from '../../utils/markers.js';


const HomePage = () => {
  const { state } = useAppContext()
  return (
    <Container fluid>
      <Row className="justify-content-end">
        <Col>
          <MenuNavigation />
          <div className='my-indigo-element'>
            <h2 className=''>Welcome to the Home Page</h2>
            <button className='my-test-bg-color'>test bootstrap sass</button>
          </div>
          {/* <Image src="/images/homepage-main-image.jpg" fluid /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
