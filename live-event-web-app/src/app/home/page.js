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
          <Col className='d-flex flex-column align-items-center text-center position-relative pt-3 mt-xl-5' style={{borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: "0A0901"}}>
          <div className='d-flex intro-homepage' 
                    style={{
                        border: 3, 
                        borderColor: "black", 
                        borderStyle: 'solid', 
                        borderRadius: 50, 
                        maxWidth: "fit-content",
                        position: 'absolute',
                        top: '-30px',
                        backgroundColor: '#FFFDF7'
                        }}>
                        <h1 className='text-center my-0 px-4'>PROGRAMMATION </h1>
                    </div>
                    <div style={{marginTop: '100px'}}>
                      <h2>Ils sont <span style={{fontFamily: 'Poppins', fontWeight: 700}}>TOUS</span> là.</h2>
                      <h3 style={{marginTop: '60px', fontFamily: 'Poppins', fontWeight: 300}}>Les plus grands noms de la scène musicale FR !</h3>
                    </div>
                    <Filtre />
                </Col>
          </Row>
          <Row>
            <Col>
            <ListeConcerts />
            </Col>
          </Row>
          <Row style={{marginTop: '100px'}}>
          <Col className='col-12 d-flex flex-column align-items-center text-center position-relative pt-3 mt-xl-5' style={{borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: "0A0901"}}>
                    <div className='d-flex intro-homepage' 
                    style={{
                        border: 3, 
                        borderColor: "black", 
                        borderStyle: 'solid', 
                        borderRadius: 50, 
                        maxWidth: "fit-content",
                        position: 'absolute',
                        top: '-25px',
                        backgroundColor: '#FFFDF7'
                        }}>
                        <h1 className='text-center my-0 px-4'>BILLETERIE </h1>
                    </div>
                    <div style={{marginTop: '100px'}}>
                      <h2>Mini budget <span style={{fontFamily: 'Poppins', fontWeight: 700}}>MAXI</span> plaisir</h2>
                    </div>
                    <TicketCatalog />
                </Col>
          </Row>
          <Footer />
        </Container>
  
};

export default HomePage;

