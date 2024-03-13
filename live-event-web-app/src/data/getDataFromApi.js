import { useEffect } from "react";
import { useAppContext } from "../context2.js";

async function fetchDataForProgrammation (dispatch) {
  try {
    const url = "https://testdwm.fr/wp-json/wp/v2/posts?categories=3&_fields=acf";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erreur fetch concerts");
    }
    const result = await response.json();
    dispatch({ type: "loadProgrammationFromApi", payload: { concerts: result } });
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des données :",
      error.message
    );
  } finally {
    console.log("PROMISE SOLVED (concerts)");
  }
};

async function fetchDataForMap(dispatch){
    try {
      const url = 'https://testdwm.fr/wp-json/wp/v2/marker?_fields=acf';
      const response = await fetch(url);
      if (!response.ok){
        throw new Error("Erreur fetch shops")
      }
      const result = await response.json();
      console.log(result)
      dispatch({type: 'loadMapFromApi', payload: {markers : result}})
    } catch (error) {
      console.log('erreur lors de la récupération des données ' + error)
      
    } finally {
      console.log("PROMISE SOLVED (shops)")
    }
}

async function fetchDataForTickets(dispatch){
  try { 
    const url = 'https://testdwm.fr/wp-json/wp/v2/billet?_fields=acf'
    const response = await fetch(url);
    if (!response.ok){
      throw new Error('Erreur fetch ticket')
    }
    const result = await response.json();
    dispatch({type:'loadTicketsFromApi', payload: {tickets : result}})
    
  } catch (error) {
    console.log('erreur lors de la récupération des données ' + error)
  } finally {
    console.log('PROMISE SOLVED (tickets)')
  }
}

async function fetchDataForFAQ(dispatch){
  try {
    const url = 'https://testdwm.fr/wp-json/wp/v2/faq?_fields=acf'
    const response = await fetch(url);
    if (!response.ok){
      throw new Error('Erreur fetch ticket')
    }
    const result = await response.json();
    dispatch({type: 'loadFAQfromApi', payload :  {faq : result}})
    
  } catch (error) {
    console.log('erreur lors de la récupération des données ' + error)
  }
  finally {
    console.log('PROMISE SOLVED (FAQ)')
  }
}

export default function DataLoader() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const loadData = async () => {
      await fetchDataForProgrammation(dispatch);
      await fetchDataForMap(dispatch);
      await fetchDataForTickets(dispatch);
      await fetchDataForFAQ(dispatch);
    };

    loadData();
  }, [dispatch]);

  return null;
}
