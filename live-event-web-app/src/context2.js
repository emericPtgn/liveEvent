import { createContext, useReducer, useContext } from "react";
import moment from "moment";
import 'moment/locale/fr'

const Context = createContext();
const { Provider, Consumer } = Context;

const initialState = {
  programmation: [],
  shops: [],
  all: [],
  filtres: ["All", "13-07", "14-07"],
  filtre: [],
  dataLoaded: false,
};

function reducer(state, action) {
  switch (action.type) {

    case "loadDataFromApi": {
      
      let programmation = action.payload.concerts.map((concert) => concert.acf);
      let rawDate = programmation.map((item) => item.date);
      moment.locale('fr');
      let formattedDate = rawDate.map((date) => moment(date, 'YYYYMMDD').format('dddd DD MMMM'));
      const joursMajuscule = formattedDate.map((jour) => jour.charAt(0).toUpperCase() + jour.slice(1));
      let rawHour = programmation.map((item) => item.heure_concert);
      let formattedHour = rawHour.map((heure_concert) => moment(heure_concert, 'HH:mm:ss').format('HH:mm'));
    
      const updatedProgrammation = programmation.map((item, index) => {
        return {
          ...item,
          date: joursMajuscule[index], // Use joursMajuscule instead of formattedDate
          heure_concert: formattedHour[index],
        };
      });
    
      return {
        ...state,
        programmation: updatedProgrammation,
        all: updatedProgrammation,
        dataLoaded: true,
    };
  }
  case 'testShop': {
    let shopsInfos = action.payload.shops.map( (shop)=> shop.acf)
    console.log(shopsInfos)
    
    return {
      ...state,
      shops: shopsInfos
    }
  }
  case 'selectFiltre': {
    const selectedFiltre = action.payload.filtre;
  
    const updatedProgrammation = (selectedFiltre === "All") ? state.all : state.programmation.filter(item => {
    const selectedFilterFormatted = moment(selectedFiltre, 'DD-MM').format('dddd DD MMMM');
    const concertDateFormatted = moment(item.date, 'dddd DD MMMM').format('dddd DD MMMM');
  
      return selectedFilterFormatted === concertDateFormatted;
    });
  
    return {
      ...state,
      filtre: selectedFiltre,
      programmation: updatedProgrammation,
    };
  }
  case 'resetFiltre' : {
    return {
      ...state, 
      filtre: 'All',
      programmation: state.all,

    }
  }

    default:
      throw new Error();
  }
}



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const AppConsumer = ({ children }) => {
  return <Consumer>{(value) => children(value)}</Consumer>;
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppProvider;
