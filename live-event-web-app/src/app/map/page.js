// `app/map/page.js` is the UI for the `/dashboard` URL
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuNavigation from '../../components/navbar.js';
import Intro from '../../components/geolocalisation.js';

const MapPage = () => {


  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuNavigation />
          <Intro />
        </Col>
      </Row>
    </Container>
  );
};

export default MapPage;
