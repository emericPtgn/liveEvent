// TicketPage.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuNavigation from '../../components/navbar.js' ;
import ListeConcerts from '../../components/listConcerts.js';
import Filtre from '../../components/selectFilter.js';

const TicketPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuNavigation />
          <Filtre />
          <ListeConcerts />

        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
