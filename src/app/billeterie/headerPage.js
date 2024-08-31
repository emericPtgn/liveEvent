import { Container } from "react-bootstrap"

const HeaderPage = () => {
    return (
        <>
        <Container fluid className='container-catalog-header d-flex flex-column gap-5' >
        <h1 className="title"><span>Un évènement</span> sur-mesure </h1>
        <p className="sous-titre">Sois présent pour le show de ton artiste préféré ou participe à chaque journée en séléctionnant le passe qui te plaît !</p>
        </Container>
        </>
    )
}

export default HeaderPage