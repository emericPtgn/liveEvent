import moment from "moment";
import 'moment/locale/fr'

export default function filterProgrammationByDate(concerts, filter){
   const updatedConcerts =  filter === "All" ? concerts : 
    concerts.filter(item => {
    return filter === item.date;
  });
  // console.log(updatedConcerts)
  return updatedConcerts;
}

