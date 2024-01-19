// `app/programmation/page.js` is the UI for the `/dashboard` URL
import Programmation from './Programmation.js'
import Select from './Filter.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuNavigation from '../../components/navbar.js';
import FetchMapItemsFromApi from '../../models/wpapi.js'

const Page = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MenuNavigation />
          <br />
          <h2>Découvrez la programmation 2024</h2>
          {/* <Image src="/images/homepage-main-image.jpg" fluid /> */}
          <Select />
          <Programmation />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;