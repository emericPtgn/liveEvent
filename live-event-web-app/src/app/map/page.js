// `app/map/page.js` is the UI for the `/dashboard` URL
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuNavigation from '../../components/navbar.js';
import GPS from '../../components/geolocalisation.js';
import MapContainer from '../../components/mapContainer.js';

const MapPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuNavigation />
          <GPS />
          <MapContainer latitude={45.194260} longitude={5.731670} />
        </Col>
      </Row>
    </Container>
  );
};

export default MapPage;