// `app/map/page.js` is the UI for the `/dashboard` URL
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MapFestival from '../../components/map.js';
import { TopBar } from '../../components/topbar.js';
import '../../App.scss';

const MapPage = () => {
  return (
    <Container fluid className='container-carte'>
      <TopBar />
      <Row className='mt-5'>
        <MapFestival />
      </Row>
    </Container>
  );
};

export default MapPage;
