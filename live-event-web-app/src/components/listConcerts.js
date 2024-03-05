import React from "react";
import { useAppContext } from "../context2.js";
import { Container, Row, Col, Spinner } from 'react-bootstrap';

export default function ListeConcerts() {
  const { state } = useAppContext();

  if (!state.dataLoaded) {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Spinner animation="border" role="status" className="m-5">
              <span className="visually-hidden">Chargement en cours...</span>
            </Spinner>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <ul className="list-group container-programmation">
            {state.programmation.map((concert, i) => (
              <li key={i} className="list-group-item custom-list-item">
                <img className="list-group-item-icon" alt="icone-ticket" src={require('../images/icons/vip.png')} />
                <div className='list-group-item-layout'>

                  <div className='container-artiste-nom'>
                    <div className="bg-artiste-nom">{concert.artiste_nom}</div>
                  </div>

                  <div className='list-group-item-photo'>
                    <img src={concert.pict} alt={concert.artiste_nom} />
                  </div>

                  <div className='list-group-item-footer'>
                    <div className="concert-date-heure">{concert.date}</div>
                    <div className="concert-date-heure">{concert.heure_concert}</div>
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
