import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TopBar } from '../../components/topbar';
import { Banner } from './Banner';
import ListeConcerts from '../../components/listConcerts';
import Filtre from '../../components/selectFilter';
import TicketCatalog from '../billeterie/ticketCatalog';
import Faq from '../../components/faq';
import FestiMap from '../../utils/mapComponent.js';
import { Footer } from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import '../../App.scss';

const HomePage = () => {
  const navigate = useNavigate()
  return <Container fluid className='home-page-bg-color homepage-structure'>
          <TopBar />
          <Banner />
          <Row>
            <div className='homepage-body-container'>
              <div className='homepage-body-container-header'>
                <h2 className='stylish'>PROGRAMMATION </h2>
              </div>
              <h3>Ils sont <span>TOUS</span> là.</h3>
              <Filtre />
              <ListeConcerts />
            </div>
          </Row>
          <Row>
            <Col>
            <div className='homepage-body-container'>
              <div className='homepage-body-container-header'>
                <h2 className='stylish'>BILLETERIE </h2>
              </div>
              <h3>Mini budget <span>MAXI</span> plaisir</h3>
              <TicketCatalog />
            </div>
            </Col>
          </Row>
          <Row>
          <Col md={5}>
              <div className='homepage-body-container'>
                <div className='homepage-body-container-header'>
                  <h2 className='stylish'>DÉCOUVRE LA <span>Festimap'</span></h2>
                </div>
              </div>
            <div className='festimap-homepage-description-col my-5'>
              <div>
                <p>Les infos dont tu as besoin, en temps réel </p>
                <ul>
                  <li>Horaire des concerts</li>
                  <li>Menu des foodtrucks</li>
                  <li>GPS</li>
                </ul>
                <button onClick={() => navigate('/map')} className="btn-primary">Accéder à la MAP</button>
              </div>
            </div>
            </Col>
            <Col md={7}>
              <div className='festimap-homepage-container my-5'>
                <FestiMap />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='homepage-body-container'>
                <div className='homepage-body-container-header'>
                  <h2 className='stylish'>FAQ</h2>
                </div>
                <Faq />
              </div>
            </Col>
          </Row>
          <Footer />
        </Container>
};

export default HomePage;

