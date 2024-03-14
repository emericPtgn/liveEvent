// `app/map/page.js` is the UI for the `/dashboard` URL
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MapFestival from '../../components/map.js';
import HeaderPage from './headerPage.js';
import { TopBar } from '../../components/topbar.js';
import { Helmet } from 'react-helmet';
import '../../App.scss';

const MapPage = () => {
  return (
    <>
    <Helmet>
    <title>Carte interactive du festival Live Event</title>
    <meta name="description" content="Découvrez la carte interactive du festival Live Event et retrouvez tous les lieux d'intérêt sur le site de l'événement !" />
    <meta name="keywords" content="festival, musique, carte, interactive, lieux d'intérêt" />
    </Helmet>
    <Container fluid className='container-carte'>
      <TopBar />
      <Row>
        <HeaderPage />
        <MapFestival />
      </Row>
    </Container>
    </>
  );
};

export default MapPage;
