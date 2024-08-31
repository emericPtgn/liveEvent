import { Container } from "react-bootstrap"

const HeaderPage = () => {
    return (
        <>
        <Container fluid className='container-catalog-header d-flex flex-column gap-5' >
        <h1 className="title"><span>Un lineup</span> incroyable</h1>
        <p className="sous-titre">Live Event réuni pour toi les plus grands noms de la scène musicale FR</p>
        </Container>
        </>
    )
}

export default HeaderPage