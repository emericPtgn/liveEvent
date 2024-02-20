// Import Bootstrap styles and variables
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useAppContext } from "../context2.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ListeConcerts() {

  const { state } = useAppContext();
  if (!state.dataLoaded) {
    // Affichez un message de chargement ici si nécessaire
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="spinner-border m-5 role='status' justify-content-center">
              <span className="visually-hidden">Chargement en cours...</span>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ul className="list-group d-flex flex-column align-items-center gap-5 my-2">
              {state.programmation.map((concert, i) => (
                <li key={i} className="list-group-item list-group-item-with-shadow position-relative" style={{ width: '330px', height: '400px', backgroundColor: 'rgba(132, 247, 126, 0.15)', borderTopStyle:'solid', borderColor: 'black', borderWidth: 1 }}>
                  <div>
                    <img alt="icone-ticket" src={require('../images/icons/vip.png')}
                    style={{width: '45px',position: 'absolute', top: -25, right: -12}} />
                  </div>
                  <div className="d-flex flex-column justify-content-around p-2 row-gap-3" style={{ width: '100%', height: '100%' }}>
                    <div className="d-flex justify-content-center align-items-center py-2" style={{ width: '100%'}}>
                      <div style={{ width: 'fit-content', borderStyle: 'solid', borderWidth: 1, borderColor: 'black', backgroundColor: '#FFF' }} className="px-3 position-relative" >
                        <div className="m-0 text-center test" style={{backgroundColor: 'rgba(240, 202, 15, 1)'}}>
                          <div>{concert.artiste_nom}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center" style={{ width: '280px', height: '250px', borderStyle: 'solid', borderColor: 'black', borderWidth: 1, backgroundColor: '#FFFDF7' }}>
                      <img src={concert.pict} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={'photo-' + concert.artiste_nom} />
                    </div>
                    <div className="d-flex justify-content-between">
                      <div style={{ borderStyle: 'solid', width: '45%', borderColor: 'black', borderWidth: 1, backgroundColor: '#FFF' }} className="d-flex align-items-center justify-content-center py-1">
                        <span className="concert-date-heure">{concert.date}</span>
                      </div>
                      <div style={{ borderStyle: 'solid', width: '45%', borderColor: 'black', borderWidth: 1, backgroundColor: '#FFF' }} className="d-flex align-items-center justify-content-center py-1">
                        <span className="concert-date-heure">{concert.heure_concert}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
