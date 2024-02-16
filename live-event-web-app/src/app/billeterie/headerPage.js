import { Container, Col, Row } from "react-bootstrap"

const HeaderPage = () => {
    return (
        <>
            <Container fluid className="py-5" style={{borderBottomStyle: 'solid', borderBottomWidth: 1}}>
                <Row >
                    <Col className="d-flex justify-content-center align-items-center">
                        <h1>Une offre <span className="emphase-title">flexible</span> qui soulage ton budget</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeaderPage