// `app/map/page.js` is the UI for the `/dashboard` URL
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapFestival from '../../components/map.js';
import { TopBar } from '../../components/topbar.js';
import '../../App.scss';

const MapPage = () => {


  return (
    <Container fluid style={{backgroundColor: '#FFFDF7'}}>
      <Row>
        <Col>
          <TopBar />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
        <MapFestival />
        </Col>
      </Row>
    </Container>
  );
};

export default MapPage;
