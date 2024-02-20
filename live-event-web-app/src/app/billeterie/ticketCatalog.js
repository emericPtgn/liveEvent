import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/fr';
import { useAppContext } from "../../context2";
import { Container, Row, Col } from "react-bootstrap";

export default function TicketCatalog() {
  const { state, dispatch } = useAppContext();
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  function handleOnAddToCart (ticketId, ticketPrice) {
    dispatch({type: 'addToCart', payload: {'ticketId' : ticketId , 'ticketPrice': ticketPrice}})
  }

  return (
    <>
      <Container fluid className="d-flex flex-column pt-5 justify-content-around" style={{ height: '800px' }}>
        <Row>
          <Col xs={0} md={2} />
          <Col xs={12} md={8}>
            <ul className="list-group d-flex align-items-center gap-5 px-0">
              {state.tickets.map((ticket, index) => (
              <Ticket key={ticket.id} onClick={handleOnAddToCart} handleAccordionToggle={handleAccordionToggle} openAccordion={openAccordion} index={index} ticket={ticket} />
              ))}
            </ul>
          </Col>
          <Col xs={0} md={2} />
        </Row>
      </Container>
    </>
  );
}


const Ticket = ({handleAccordionToggle, onClick, openAccordion, index, ticket}) => {
  const {state} = useAppContext()
  return (
    <>
    <li key={index} className={`d-md-flex align-items-center list-group-item`}  style={{ width: '100%', height: 'auto', backgroundColor: 'rgba(132, 247, 126, 0.15)', borderRadius: '1%', borderStyle: 'solid', borderWidth: 1, borderColor: 'rgba(123, 132, 132, 0.15)' }}>
                  <div className="d-flex justify-content-between align-items-center ticket position-relative">

                    <img src={require('../../images/icons/vip.png')} alt="icone ticket" style={{ width: '40px', position: 'absolute', top: '-30px', left: '20px' }} />
                    <div className="d-flex flex-column ps-4" style={{ width: '100%', height: 'auto' }}>
                      <span className="ticket-title">{ticket.ticket_name} - Tarif : {ticket.ticket_price}</span>
                      <span className="ticket-baseline">Utilisation du {ticket.date_start} au {ticket.date_end} (exclu)</span>
                    </div>

                    <div className="d-none d-md-flex flex-column col-md-4 text-center">
                      {state.programmation.map((concert) => {
                        concert.date = moment(concert.date, "dddd DD-MM").format("DD-MM");
                        if (concert.date === ticket.date_start) {
                          return (
                            <span className="ticket-artist" key={concert.id}>{concert.artiste_nom} </span>
                          );
                        } else if (ticket.date_start === '13-07' && ticket.date_end === '15-07') {
                          return <span className="ticket-artist" key={concert.id}>{concert.artiste_nom} </span>
                        }
                        return null
                      })}
                    </div>


                    <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100%' }}>
                      <div>
                        <button onClick={() => onClick(ticket.id, ticket.ticket_price)} className="btn-primary" type="button">Ajouter au panier</button>
                      </div>
                    </div>

                  </div>
                    <Accordion key={index} ticket={ticket} handleAccordionToggle={handleAccordionToggle} openAccordion={openAccordion} index={index} />
                </li>
    </>
  )
}

const Accordion = ({handleAccordionToggle, openAccordion, index, ticket}) => {
  const {state} = useAppContext()
  return (
    <>
        <div className={`d-md-none accordion ${openAccordion === index ? 'show' : ''}`} id={`accordionPanel${index}`}>
        <div className="accordion-item">

          <h2 className="accordion-header">
            <button className="accordion-button" type="button" onClick={() => handleAccordionToggle(index)}>
              Voir la programmation
            </button>
          </h2>
          
          <div className={`accordion-collapse collapse ${openAccordion === index ? 'show' : ''}`}>
            <div className="accordion-body">

            <span>{state.programmation.map((concert) => {
            concert.date = moment(concert.date, "dddd DD-MM").format("DD-MM");
            if (concert.date === ticket.date_start) {
              return (
                <span key={concert.id}>{concert.artiste_nom} </span>
              );
            } else if (ticket.date_start === '13-07' && ticket.date_end === '15-07') {
              return <span key={concert.id}>{concert.artiste_nom}</span>
            } return null
          })}</span>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}