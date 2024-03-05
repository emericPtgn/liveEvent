import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TopBar } from '../../components/topbar';
import { Banner } from './Banner';
import ListeConcerts from '../../components/listConcerts';
import Filtre from '../../components/selectFilter';
import TicketCatalog from '../billeterie/ticketCatalog';
import { Footer } from '../../components/footer';
import '../../App.scss';

const HomePage = () => {
  return <Container fluid className='home-page-bg-color'>
          <TopBar />
          <Banner />
          <Row>
            <Col className='homepage-body-container'>
              <div className='homepage-body-container-header'>
                <h1>PROGRAMMATION </h1>
              </div>
              <h2>Ils sont <span>TOUS</span> là.</h2>
              <h3>Les plus grands noms de la scène musicale FR !</h3>
              <Filtre />
              <ListeConcerts />
            </Col>
          </Row>
          <Row>
            <Col className='homepage-body-container'>
              <div className='homepage-body-container-header'>
                <h1>BILLETERIE </h1>
              </div>
              <h2>Mini budget <span>MAXI</span> plaisir</h2>
              <TicketCatalog />
            </Col>
          </Row>
          <Footer />
        </Container>
};

export default HomePage;

