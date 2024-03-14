
import { Container } from "react-bootstrap"
import { TopBar } from "../../components/topbar.js";
import { Footer } from "../../components/footer.js";
import brigade from '../../images/brigade.jpg'
import psh from '../../images/psh.jpg'
import accueil from '../../images/accueil.jpg'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function DeviensBenevole () {
    const navigate = useNavigate()

    return (
        <>
        <Helmet>
        <title>Devenir bénévole au festival Live Event</title>
        <meta name="description" content="Rejoignez l'équipe de bénévoles du festival Live Event et participez à l'organisation de l'événement musical de l'année !" />
        <meta name="keywords" content="festival, musique, bénévole, événement, organisation" />
        </Helmet>
        <Container className="d-flex flex-column justify-between gap-5">
            <TopBar />
            <div className="container-nav-page-info my-5" >
                <div id="nav-page-info">
                    <button onClick={() => navigate('/venir-au-festival')}>VENIR AU FESTIVAL</button>
                    <button onClick={() => navigate('/deviens-benevole')}>DEVIENS BÉNÉVOLE</button>
                </div>
            </div>
            <div id="header">
                <h1 className="title">Rejoins un projet culturel d'ampleur !</h1>
                <p>Rejoins l'équipe en envoyant ta candidature à contact@live-event-benevole.fr</p>
            </div>
            <div className="one-col-grid">
                <div className='two-col-grid reverse'>
                    <div >
                        <h3 className="title">BRIGADE VERTE</h3>
                        <p>Tu te baladeras en équipe dans le festival pour faire de la sensibilisation auprès du public sur leurs comportements, repérer les poubelles pleines et les endroits sensibles et faire remonter l’info… Cette mission est l’une des plus sympas, tu seras en équipe et en déambulation, au plus proche de l’ambiance !</p>
                        <p>Il n’est d’ailleurs pas rare que vous soyez félicité.es pour ce que vous faites… Et pour cause !</p>
                    </div>
                    <img src={brigade} alt="jeune homme nettoie le sol du festival avec une pince à dechet"/>
                </div>
                <div className='two-col-grid' >
                    <img src={psh} alt="personne à mobilité réduite assiste au festival"/>
                    <div>
                        <h3 className="title">ACCUEIL PSH</h3>
                        <p>Tu seras au contact du public en situation de handicap, sur différentes missions allant de l’accueil à la présence sur les plateformes. En équipe et accompagné.e par moment par les membres de l’association Zicomatic, qui vise à donner accès au festival à toutes et tous, tu seras utile pour nous aider à rendre Musilac le plus accessible possible !</p>
                    </div>
                </div>
                <div className='two-col-grid reverse'>
                    <div >
                        <h3 className="title">ACCUEIL SITE</h3>
                        <p>Tu es à l’aise dans un bain de foule ? Tu n’es pas gêné.e à l’idée de parler à des inconnu.es ? Cette mission est pour toi ! Tu seras le phare dans la nuit des festivalier.es égaré.es, tu les renseigneras sur l’accès à la billetterie, le mode d’emploi du cashless, le chemin à prendre pour aller aux toilettes, bref, tu seras indispensable !</p>
                    </div>
                    <img src={accueil} alt="conseil orientation participant festival"/>
                </div>
            </div>
            <Footer />
        </Container>
        </>


    )
}