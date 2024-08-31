import getConcertsEnCours from "../components/getConcertsEnCours";
import addConcertToMarker from "./addConcertToMarker";

export default function updateMarkersFromFilters(allMarkers2, updatedFilters, concertsEnCours) {
    let markersTypesToRemove = [];

    // Collecter tous les types à supprimer en fonction des filtres inactifs
    updatedFilters.forEach(element => {
        if (!element.activ) {
            markersTypesToRemove.push(element.type);
        }
    });

    // Filtrer les marqueurs
    let updatedMarkers = allMarkers2.filter(marker => 
        !markersTypesToRemove.includes(marker.type)
    );

    // Vérifier si le filtre "concerts (en cours)" est actif
    const isConcertEnCoursActive = updatedFilters.some(filter => filter.type === 'concerts (en cours)' && filter.activ);

    if (isConcertEnCoursActive) {
        // Filtrer les marqueurs pour n'afficher que ceux avec des concerts en cours
        updatedMarkers = addConcertToMarker(concertsEnCours, updatedMarkers, true);
    }

    return updatedMarkers;
}
