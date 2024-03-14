
import { Container } from "react-bootstrap"
import { TopBar } from "../../components/topbar.js";
import mapIcon from '../../images/icons/map.png'
import navette from '../../images/navette.jpg'
import quaiGare from '../../images/quai-gare.jpeg'
import covoiturage from '../../images/covoiturage.jpg'
import { useNavigate } from 'react-router-dom';
import { Footer } from "../../components/footer.js";
import { Helmet } from "react-helmet";


export default function VenirAuFestival () {
    const navigate = useNavigate()

    return (
        <>
        <Helmet>
        <title>Comment venir au festival Live Event</title>
        <meta name="description" content="Découvrez les différents moyens de transport pour vous rendre au festival Live Event et préparez votre voyage dès maintenant !" />
        <meta name="keywords" content="festival, musique, transport, voyage, accès" />
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
                <h1 className="title">VENIR AU FESTIVAL</h1>
                <p className="position-relative"><img src={mapIcon} alt="map-icon"/><a href="/map" className="link-style-1">Esplanade du lac, Boulevard Barrier - 73100, Aix-les-Bains</a></p>
                <p>Les transports représentent plus de 80% de l'impact carbone des festivals.
                    Nous faisons notre maximum pour faciliter l’utilisation des transports doux et collectifs. En choisissant un moyen de transport moins polluant que la voiture individuelle, vous participez à réduire votre empreinte carbone et celle du festival.
                    </p>
            </div>
            <div className="one-col-grid">
                <div className='two-col-grid reverse'>
                    <div >
                        <h3 className="title">NAVETTES</h3>
                        <p>Des navettes gratuites sont mises en place depuis les sorties Nord et Sud 
                            de l’autoroute A41 en provenance de Chambéry, Grenoble, Lyon, Annecy ou Genève.</p>
                    </div>
                    <img src={navette} alt="bus-icone"/>
                </div>
                <div className='two-col-grid' >
                    <img src={quaiGare} alt="bus-icone"/>
                    <div>
                        <h3 className="title">TRAIN</h3>
                        <p>Temps de trajet à titre indicatif :</p>
                        <ul>
                            <li>Chambéry : 11 minutes</li>
                            <li>Annecy : 40 minutes</li>
                            <li>Grenoble : 1 heure</li>
                            <li>Lyon : 1 heure 15 minutes</li>
                            <li>Genève : 1 heure 20 minutes</li>
                            <li>Valence : 2 heures</li>
                            <li>Paris : 3 heures 20 minutes</li>
                        </ul>
                    </div>
                </div>
                <div className='two-col-grid reverse'>
                    <div >
                        <h3 className="title">COVOITURAGE</h3>
                        <p>Pour réduire l’impact environnemental du trajet et adopter l'esprit festival dès votre voiture, trouvez vos partenaires de voyage  !+ d'informations à venir.</p>
                    </div>
                    <img src={covoiturage} alt="aire covoiturage"/>
                </div>
            </div>
            <Footer />
        </Container>
        </>


    )
}