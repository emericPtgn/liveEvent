// TicketPage.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopBar } from '../../components/topbar.js';
import { Footer } from '../../components/footer';
import HeaderPage from '../billeterie/headerPage.js';
import TicketsCatalog from '../billeterie/ticketCatalog.js';

const TicketPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <TopBar />
          <HeaderPage />
          <TicketsCatalog />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage