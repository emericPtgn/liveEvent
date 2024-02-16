import React from 'react';
import Container from 'react-bootstrap/Container';
import { TopBar } from '../../components/topbar';
import { Banner } from './Banner';
import ExtraitProgrammation from './extraitProgrammation';
import { Footer } from '../../components/footer';
import '../../App.scss';

const HomePage = () => {
  return <Container fluid className='home-page-bg-color'>
          <TopBar />
          <Banner />
          <ExtraitProgrammation />
          <Footer />
        </Container>
  
};

export default HomePage;

