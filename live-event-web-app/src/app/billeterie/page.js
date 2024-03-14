// TicketPage.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopBar } from '../../components/topbar.js';
import { Footer } from '../../components/footer';
import HeaderPage from '../billeterie/headerPage.js';
import TicketsCatalog from '../billeterie/ticketCatalog.js';
import { Helmet } from 'react-helmet';

const TicketPage = () => {
  return (
    <>
    <Helmet>
    <title>Billetterie du festival Live Event</title>
    <meta name="description" content="Réservez vos billets pour le festival Live Event dès maintenant et profitez de l'événement musical de l'année !" />
    <meta name="keywords" content="festival, musique, billetterie, réservation, tarifs" />
    </Helmet>
    <Container fluid style={{backgroundColor: '#FFFDF7'}}>
      <Row>
        <Col>
          <TopBar />
          <HeaderPage />
          <TicketsCatalog />
          <Footer />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default TicketPage