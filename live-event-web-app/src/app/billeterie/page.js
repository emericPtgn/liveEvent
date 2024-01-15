// TicketPage.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuNavigation from '../../components/navbar.js' ;

const TicketPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuNavigation />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
