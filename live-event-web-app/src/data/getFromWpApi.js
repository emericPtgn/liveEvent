import { useEffect, useState } from "react";
import { useAppContext } from "../context.js";

export default function useFetchShowDataFromWpApi() {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useAppContext();

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
      const allArtists = [];
      console.log(concertList)
  
      for (let i = 0; i < concertList.length; i++) {
        let concert = concertList[i].acf;
        if (concert) {
          const artistList = concert.artiste_nom;
          if (Array.isArray(artistList)) {
            allArtists.push(...artistList);
          } else if (typeof artistList === 'string') {
            allArtists.push(artistList);
          }
        }
      }
  
      dispatch({ 
        type: 'FETCH_PROGRAMMATION_SUCCESS', 
        payload: allArtists
      });
    }
  }, [datas, dispatch]);
  
  
}
