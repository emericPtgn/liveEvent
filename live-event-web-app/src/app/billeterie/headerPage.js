import { Container, Col, Row } from "react-bootstrap"

const HeaderPage = () => {
    return (
        <>
            <Container fluid className="py-5" style={{borderBottomStyle: 'solid', borderBottomWidth: 1}}>
                <Row className="mt-md-5" >
                    <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="title-header">Une offre <span className="emphase-title">flexible</span></h1>
                        <h2 className="px-2" style={{marginTop: '60px', fontFamily: 'Poppins', fontWeight: 300}}>
                    Le show de ton artiste préféré grâce au billet unique, ou 2 jours de folie en réservant ton pass week-end ! 
                    </h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeaderPage