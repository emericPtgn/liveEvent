import { Container, Col, Row } from "react-bootstrap"
import fbLogo from '.././images/icons/facebook.png'
import twLogo from '.././images/icons/twitter.png'
import inLogo from '.././images/icons/camera.png'

export const Footer = () => {
    return (
        <>
        <Container id="footer-container">
            <Row className="mb-5">
                <Col md={4}/>
                <Col>
                    <div className="flex-around">
                        <img src={fbLogo} alt="icon-social-facebook"/>
                        <img src={twLogo} alt="icon-social-twitter"/>
                        <img src={inLogo} alt="icon-social-instagram"/>
                    </div>
                </Col>
                <Col md={4} />
            </Row>
            <Row>
                <Col md={3}/>
                <Col>
                    <div className="flex-around">
                        <span>CONTACT</span>
                        <span>DEVIENS BÉNÉVOLE</span>
                        <span>FAQ</span>
                        <span>ESPACE PRESSE</span>
                    </div>
                </Col>
                <Col md={3} />
            </Row>
        </Container>
        </>
    )
}