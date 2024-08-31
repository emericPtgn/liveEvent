export default function getConcertsEnCours(concerts) {

    let now = new Date();
    
    let concertsEnCours = concerts.filter((concert) => {
        // Combine the concert date and time into a single Date object
        let concertStart = new Date(now.getFullYear(), 
                                    parseInt(concert.date.split('-')[1]) - 1, // month (0-based index)
                                    parseInt(concert.date.split('-')[0]),     // day
                                    parseInt(concert.time.split(':')[0]),     // hours
                                    parseInt(concert.time.split(':')[1]));    // minutes
        
        // Calculate the end time of the concert (30 minutes after start)
        let concertEnd = new Date(concertStart.getTime() + 30 * 60000); // 30 minutes in milliseconds
        // Check if the current time is between the start and end times
        return now >= concertStart && now <= concertEnd;
    });

    return concertsEnCours;
}
