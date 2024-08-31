import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/fr';
import { useAppContext } from "../../context2";
import { Container } from "react-bootstrap";

export default function TicketCatalog() {
  const { state, dispatch } = useAppContext();
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (index) => { setOpenAccordion((prev) => (prev === index ? null : index)); };
  const handleOnAddToCart = (ticketId, ticketPrice) => { dispatch({ type: 'addToCart', payload: { 'ticketId': ticketId, 'ticketPrice': ticketPrice } }) }

  return (
    <Container className='container-catalog'>
      <ul className="ticket-list"> {state.tickets.map((ticket, index) => (
          <Ticket key={ticket.id} onClick={handleOnAddToCart} handleAccordionToggle={handleAccordionToggle} openAccordion={openAccordion} index={index} ticket={ticket} />
        ))}
      </ul>
    </Container>
  );
}

const Ticket = ({ handleAccordionToggle, onClick, openAccordion, index, ticket }) => {
  const { state } = useAppContext()
  const isAccordionOpen = openAccordion === index;
  let displayLiveEvent = false;

  return (
    <li className={`list-group-item list-item`}>
      <div className='ticket'>
        <img src={require('../../images/icons/vip.png')} alt="icone ticket" className="ticket-icon" />
        <div className="ticket-price-date-container">
          <span>{ticket.ticket_name} - Tarif : {ticket.ticket_price}</span>
          <span>Utilisation du {ticket.date_start} au {ticket.date_end} (exclu)</span>
        </div>
        <div className="ticket-programmation-container">
          {state.programmation.map((concert) => {
            concert.date = moment(concert.date, "dddd DD-MM").format("DD-MM");
            if (ticket.date_start === '13-07' && ticket.date_end === '15-07') {
              displayLiveEvent = true;
              return null
            }
            return (concert.date === ticket.date_start) &&
              <span className="ticket-artist" key={concert.id} > {concert.artiste_nom} </span>
          })}
          {displayLiveEvent && <span className="ticket-artist">100% de la programmation LiveEvent !</span>}
        </div>
        <div className='ticket-button-container'>
          <button onClick={() => onClick(ticket.id, ticket.ticket_price)} className="btn-primary" type="button">Ajouter au panier</button>
        </div>
      </div>
      <Accordion key={ticket.id} isOpen={isAccordionOpen} handleAccordionToggle={() => handleAccordionToggle(index)} ticket={ticket} />
    </li>
  )
}

const Accordion = ({ isOpen, handleAccordionToggle, ticket }) => {
  const { state } = useAppContext()
  return (
    <div key={ticket.id} className={`accordion ${isOpen ? 'show' : ''}`}>
      <div className="accordion-item">
        <p className="accordion-header">
          <button className="accordion-button" type="button" onClick={handleAccordionToggle}>Voir la programmation</button>
        </p>
        <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
          <div className="accordion-body">
            {state.programmation.map((concert) => {
              concert.date = moment(concert.date, "dddd DD-MM").format("DD-MM");
              return (concert.date === ticket.date_start || (ticket.date_start === '13-07' && ticket.date_end === '15-07')) &&
                <span key={concert.id}>{concert.artiste_nom}</span>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
