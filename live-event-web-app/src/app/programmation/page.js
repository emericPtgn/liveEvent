import Filtre from '../../components/selectFilter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopBar } from '../../components/topbar.js';
import HeaderPage from './headerPage.js';
import ListeConcerts from '../../components/listConcerts.js';
import { Footer } from '../../components/footer';

const Page = () => {
  return (
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
  );
};

export default Page;