export default function addConcertToMarker(concertsEnCours, markers, filterConcertsEnCours = false) {
    let programmation = {};

    // Organiser les concerts par scène et date
    concertsEnCours.forEach(concert => {
        const { scene, date } = concert;
        if (!programmation[scene]) {
            programmation[scene] = {};
        }
        if (!programmation[scene][date]) {
            programmation[scene][date] = [];
        }
        programmation[scene][date].push(concert);
    });

    // Filtrer les marqueurs
    return markers
        .map(marker => {
            if (marker.type === 'scene') {
                const { nom } = marker;
                const programmationForScene = programmation[nom] || {};

                // Si on filtre par concerts en cours, ne garder que les scènes avec des concerts en cours
                if (filterConcertsEnCours) {
                    const hasConcertsEnCours = Object.keys(programmationForScene).length > 0;
                    if (!hasConcertsEnCours) {
                        return null; // Retirer le marker s'il n'y a pas de concerts en cours
                    }
                }

                return {
                    ...marker,
                    programmation: programmationForScene
                };
            }
            return marker;
        })
        .filter(marker => marker !== null); // Retirer les marqueurs nuls (sans concerts en cours)
}
