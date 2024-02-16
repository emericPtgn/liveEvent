import Filtre from '../../components/selectFilter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopBar } from '../../components/topbar.js';
import ListeConcerts from '../../components/listConcerts.js';
import { Footer } from '../../components/footer';

const Page = () => {
  return (
    <Container fluid className='home-page-bg-color'>
      <Row>
        <Col>
          <TopBar />
          <br />
          <div className='intro-homepage text-center mt-4'>
          <h1>PROGRAMMATION 2024</h1>
          </div>
          {/* <Image src="/images/homepage-main-image.jpg" fluid /> */}
          <Filtre />
          <ListeConcerts />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;