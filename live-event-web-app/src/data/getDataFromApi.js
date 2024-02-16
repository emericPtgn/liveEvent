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


export default function DataLoader() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    fetchDataForProgrammation(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchDataForMap(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchDataForTickets(dispatch)
  }, [dispatch])
  

  // Vous pouvez également renvoyer des éléments JSX pour afficher un message de chargement, si nécessaire
  return null;
}
