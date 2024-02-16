// `app/map/page.js` is the UI for the `/dashboard` URL
import '../../App.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuNavigation from '../../components/navbar.js';
import MapFestival from '../../components/map.js';

const MapPage = () => {


  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuNavigation />
          <MapFestival />
        </Col>
      </Row>
    </Container>
  );
};

export default MapPage;
