import React from 'react';
import { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { useAppContext } from '../context2';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function CartAccess () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <img src={require('../images/icons/volleyball.png')} onClick={handleShow} alt='cart-icon'/>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Panier</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Cart/>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

function Cart() {
    const {state} = useAppContext()
    return (
        <Container className='d-flex flex-column gap-2' >
        <Row className='d-flex gap-4' style={{padding: 30}}>
            {state.cartContent.map((product, index) => 
            <CartLine key={index} product={product}/>
            )}
        </Row>
        <Row style={{paddingLeft: 30}}>
            <p>Total à régler : {state.cartTotal}€</p>
        </Row>
        </Container>
    );
}

function CartLine({product}) {
    const {state, dispatch} = useAppContext()
    const ticketToCartLine = state.tickets.find((ticket) => ticket.id === product.id ? ticket : null)
    const ticketName = ticketToCartLine.ticket_name
    const ticketPrice = ticketToCartLine.ticket_price
    const ticketPriceNumeric = parseFloat(ticketPrice.replace(',', '.'));
    const total = isNaN(ticketPriceNumeric) ? 'N/A' : product.qte * ticketPriceNumeric;
    const handleOnChangeQte = (ticketQte) => {
        dispatch({type:'updateCartFromQteSelector', payload: {qte: ticketQte, id: product.id, price: ticketPriceNumeric}})}

    return (
        <div className='d-flex flex-column' style={{backgroundColor: '#F8F8F8'}}>
            <span>Ticket - {ticketName}</span>
            <span>Prix - {ticketPrice}</span>
            <div>
                <Form.Select style={{fontSize: '14px'}} value={product.qte} placeholder="Quantité : 1" onChange={(e) => handleOnChangeQte(e.target.value)}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <option value={i} key={i}>Quantité : {i}</option>
                ))}
                </Form.Select>
            </div>
            <p>Total ticket : {total}€</p>
        </div>
    )
}
