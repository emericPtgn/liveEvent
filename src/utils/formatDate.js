import moment from "moment";
import 'moment/locale/fr';

export default function formatDate(rawDate) {
    // Définit la locale française
    moment.locale('fr');

    // Utilise le parsing automatique de moment sans spécifier de format d'entrée
    const momentDate = moment(rawDate);

    // Vérifie si la date est valide
    if (!momentDate.isValid()) {
        console.error('Invalid date format:', rawDate);
        return { month: 'Invalid date', day: 'Invalid date', time: 'Invalid date' };
    }

    // Obtient le mois en toutes lettres (première lettre en majuscule)
    const formattedMonth = momentDate.format('MMMM');
    const digitMonth = momentDate.format('MM');
    const capitalizedMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.slice(1);

    // Obtient le jour du mois
    const day = momentDate.format('DD');

    // Obtient l'heure au format HH:mm
    const time = momentDate.format('HH:mm');
    const date = `${day}-${digitMonth}`

    return { date, month: capitalizedMonth, day, time };
}
