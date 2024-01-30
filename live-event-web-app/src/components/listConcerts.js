// Import Bootstrap styles and variables
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useAppContext } from "../context2.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ListeConcerts({data}) {

  const { state } = useAppContext();

  if (!state.dataLoaded) {
    // Affichez un message de chargement ici si nécessaire
    return (
    <Container fluid>
      <Row>
        <Col>
          <div className="spinner-border m-5 role='status' justify-content-center">
            <span className="visually-hidden">Chargement en cours...</span>
          </div>
        </Col>
      </Row>
    </Container>
    )
  }

  return (
    <Container >
      <Row>
        <Col>
          <div>
            <ul class="list-group">
              {state.programmation.map((concert, i) => (
                <li key={i} className="justify-content-center list-group-item p-5 m-5 list-group-item-warning">
                  <p>{concert.artiste_nom || "N/A"}</p>
                  <p>{concert.date || "N/A"}</p>
                  <p>{concert.heure_concert || "N/A"}</p>
                  <p>Scène {concert.scene_du_concert || "N/A"}</p>

                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}







/* async function FetchShowDataFromWpApi() {

  const [ datas, setDatas ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const { state, dispatch } = useAppContext()

  const dataContainer = useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://testdwm.fr/wp-json/wp/v2/posts?_fields=acf';
        const response = await fetch(url);
      
        if (!response.ok) {
          throw new Error('Erreur mon pote');
        }
        const result = await response.json();
        setDatas(result);

      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données :', error.message);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    if (datas !== null) {
      const concertList = datas;

      for (let i = 0 ; i < concertList.length ; i++ ){
        let sousObjet = concertList[i].acf;
        if(sousObjet){
          // console.log(sousObjet.artiste_nom)
          const artistList = sousObjet.artiste_nom;
          state.programmationFromApi = artistList
          console.log(state.programmationFromApi)
          dataContainer.current = artistList
        } 
      }
    }
  }, [datas, state]);

}


 */