import Filtre from '../../components/selectFilter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopBar } from '../../components/topbar.js';
import HeaderPage from './headerPage.js';
import ListeConcerts from '../../components/listConcerts.js';
import { Footer } from '../../components/footer';
import { Helmet } from 'react-helmet';

const Page = () => {
  return (
    <>
    <Helmet>
    <title>Programmation du festival Live Event</title>
    <meta name="description" content="Découvrez la programmation complète du festival Live Event et retrouvez vos artistes préférés sur scène !" />
    <meta name="keywords" content="festival, musique, programmation, artistes, scène" />
    </Helmet>
    <Container fluid className='home-page-bg-color'>
      <Row>
        <Col>
          <TopBar />
          <HeaderPage />
          <Filtre />
          <ListeConcerts />
          <Footer />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Page;