import { Container, Row, Col } from "react-bootstrap"
import bannerProgrammation from '../../images/artistesbanner-programmation.svg'

const ExtraitProgrammation = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='col-12 d-flex flex-column align-items-center text-center position-relative pt-3 mt-xl-5' style={{borderTopStyle: "solid", borderTopWidth: 1, borderTopColor: "0A0901"}}>
                    <div className='d-flex intro-homepage' 
                    style={{
                        border: 3, 
                        borderColor: "black", 
                        borderStyle: 'solid', 
                        borderRadius: 50, 
                        maxWidth: "fit-content",
                        position: 'absolute',
                        top: '-22px',
                        backgroundColor: '#FFFDF7'
                        }}>
                        <h1 className='text-center my-0 px-4'>LINEUP 2024 </h1>
                    </div>
                    <img src={bannerProgrammation} alt='programmationBanner' className='w-50'/>
                    <button className='btn-primary'>LA PROGRAMMATION</button>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>

    )
}

export default ExtraitProgrammation