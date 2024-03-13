import { Container } from "react-bootstrap"

const HeaderPage = () => {
    return (
        <>
        <Container fluid className='container-catalog-header d-flex flex-column gap-5' >
        <h1 className="title"><span>Ton plan </span> interactif</h1>
        <p className="sous-titre">Repère toi facilement dans le festival pour être au bon endroit au bon moment</p>
        </Container>
        </>
    )
}

export default HeaderPage