import { useEffect } from "react";
import { useAppContext } from "../context2.js";

async function fetchDataForConcerts (dispatch) {
  try {
    const url = "https://testdwm.fr/wp-json/wp/v2/posts?categories=3&_fields=acf";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erreur fetch concerts");
    }
    const result = await response.json();
    dispatch({ type: "loadDataFromApi", payload: { concerts: result } });
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des données :",
      error.message
    );
  } finally {
    console.log("PROMISE SOLVED (concerts)");
  }
};

async function fetchDataForShops(dispatch){
    try {
      const url = 'https://testdwm.fr/wp-json/wp/v2/posts?categories=23&_fields=acf'
      const response = await fetch(url);
      if (!response.ok){
        throw new Error("Erreur fetch shops")
      }
      const result = await response.json();
      dispatch({type: 'testShop', payload: {shops : result}})
    } catch (error) {
      console.log('erreur lors de la récupération des données ' + error)
      
    } finally {
      console.log("PROMISE SOLVED (shops)")
    }
}


export default function DataLoader() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    fetchDataForConcerts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchDataForShops(dispatch);
  }, [dispatch]);

  // Vous pouvez également renvoyer des éléments JSX pour afficher un message de chargement, si nécessaire
  return null;
}
