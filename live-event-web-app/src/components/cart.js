import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useAppContext } from '../context2';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cookies from 'js-cookie';


export default function CartAccess() {
    const { state, dispatch } = useAppContext();
  
    const handleClose = () => {
      dispatch({ type: 'closeCart', payload: { show: false } });
    };
  
    const handleShow = () => {
      dispatch({ type: 'showCart', payload: { show: true } });
    };
  
    return (
      <>
        <img
          style={{ width: '20px' }}
          src={require('../images/icons/shopping-cart.png')}
          onClick={handleShow}
          alt='cart-icon'
        />
        <Offcanvas show={state.cartToggle} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Panier</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  

function Cart() {
    const { state } = useAppContext();
    const [nbArticles, setNbArticles] = useState(0);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        let totalArticles = 0;

        for (let i = 0; i < state.cartContent.length; i++) {
            totalArticles += state.cartContent[i].qte;
        }

        setNbArticles(totalArticles);
    }, [state.cartContent]);

    const isPlural = nbArticles > 1 ? `${nbArticles} articles` : `${nbArticles} article`;


    useEffect(() => {
      let totalCart = 0

      for (let i = 0; i < state.cartContent.length ; i++) {
        totalCart += state.cartContent[i].total;
      }
    
      setTotalCart(totalCart)
      state.cartTotal = totalCart
      Cookies.set('cartTotal', totalCart)
      
    }, [state.cartContent, state])
    



    return (
        <Container className='d-flex flex-column gap-4'>
            <Row className='d-flex gap-4' style={{ padding: 30 }}>
                {state.cartContent.map(product => <CartLine key={product.id} product={product} />)}
            </Row>
            <Row style={{ paddingLeft: 30, paddingTop: 30, paddingBottom: 30, borderTopStyle:'solid', borderTopWidth: 1, borderTopColor: 'black', borderBottomStyle:'solid', borderBottomWidth: 1, borderBottomColor: 'black' }}>
                <p className='m-0'>Sous-total ({isPlural})  : {totalCart.toFixed(2)}€</p>
            </Row>
            <Row>
                <Col className='col-2' />
                <Col className='d-flex justify-content-center'>
                    <Button>PASSER LA COMMANDE</Button>
                </Col>
                <Col className='col-2' />
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
    const handleOnChangeQte = (ticketQte) => {
        dispatch({type:'updateCartFromQteSelector', payload: {qte: ticketQte, id: product.id, price: ticketPriceNumeric}})}
    const handleOnDelete = (productId) => {
        dispatch({type: 'handleDeletedItemFromCart', payload: {id: productId}})
    }

    return (
        <div className='d-flex flex-column py-3' style={{backgroundColor: '#F8F8F8'}}>
            <div className='d-flex justify-content-between'>
                <span>Ticket - {ticketName}</span>
                <span onClick={(e) => handleOnDelete(product.id)}>🗑️</span>
            </div>
            <span>Prix - {ticketPrice}</span>
            <div>
                <Form.Select style={{fontSize: '14px'}} value={product.qte} onChange={(e) => handleOnChangeQte(e.target.value)}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <option value={i} key={i}>Quantité : {i}</option>
                ))}
                </Form.Select>
            </div>
        </div>
    )
}
