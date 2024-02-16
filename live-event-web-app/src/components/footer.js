import { Container, Col, Row } from "react-bootstrap"
import fbLogo from '.././images/icons/facebook.png'
import twLogo from '.././images/icons/twitter.png'
import inLogo from '.././images/icons/camera.png'

export const Footer = () => {
    return (
        <>
        <Container id="footer-container">
                <div className="mt-5 py-5" style={{borderTopStyle: 'solid', borderTopColor: 'black', borderTopWidth: '1'}}>
                    <Row className="mb-5">
                        <Col md={4}/>
                        <Col>
                            <div className="d-flex justify-content-around">
                                <img style={{width: 20, height: 20}} src={fbLogo} alt="icon-social-facebook"/>
                                <img style={{width: 20, height: 20}} src={twLogo} alt="icon-social-twitter"/>
                                <img style={{width: 20, height: 20}} src={inLogo} alt="icon-social-instagram"/>
                            </div>
                        </Col>
                        <Col md={4} />
                    </Row>
                    <Row>
                        <Col md={3}/>
                        <Col>
                            <div className="d-flex justify-content-around">
                                <span>CONTACT</span>
                                <span>DEVIENS BÉNÉVOLE</span>
                                <span>FAQ</span>
                                <span className="d-flex justify-content-center">ESPACE PRESSE</span>
                            </div>
                        </Col>
                        <Col md={3} />
                    </Row>
                </div>
        </Container>
        </>
    )
}