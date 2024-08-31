import formatDate from "./formatDate";

export default function toFormatConcerts (concerts){
    let formattedConcert = concerts.map((concert, index) => {return {
        artiste: concert.artistesNames,
        ...formatDate(concert.formattedDate), // Assure que formatDate renvoie le mois, jour, et heure
        scene: concert?.marker?.nom,
        key: index
    }}) 
    
    return formattedConcert;
}