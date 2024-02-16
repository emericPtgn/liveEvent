import { createContext, useReducer, useContext } from "react";
import moment from "moment";
import 'moment/locale/fr'
import Cookies from "js-cookie";

const Context = createContext();
const { Provider, Consumer } = Context;


// Vérifier si les cookies existent et les initialiser avec une valeur par défaut si nécessaire
const initialCartContent = JSON.parse(Cookies.get('cartContent') || '[]');
const initialCartTotal = parseInt(Cookies.get('cartTotal') || '0');


const initialState = {
  programmation: [],
  allProgrammation: [],
  filtres: [
    {'Libellé': 'All', 'activ': false}, 
    {'Libellé': '13-07', 'activ': false}, 
    {'Libellé': '14-07', 'activ': false},
  ],
  tickets: [],
  cartContent: initialCartContent,
  cartTotal: initialCartTotal,
  markers: [],
  allMarkers: [],
  mapFilters: [],
  activMapFilters: [],
  dataLoaded: false,
};


function reducer(state, action) {
  switch (action.type) {

  case "loadProgrammationFromApi": {
      
      const programmation = action.payload.concerts.map((concert) => concert.acf);
      const rawDate = programmation.map((item) => item.date);
      moment.locale('fr');
      const formattedDate = rawDate.map((date) => moment(date, 'YYYYMMDD').format('dddd DD-MM'));
      const joursMajuscule = formattedDate.map((jour) => jour.charAt(0).toUpperCase() + jour.slice(1));
      const rawHour = programmation.map((item) => item.heure_concert);
      const formattedHour = rawHour.map((heure_concert) => moment(heure_concert, 'HH:mm:ss').format('HH:mm'));
    
      const formattedProgrammation = programmation.map((item, index) => {

        return {
          ...item,
          date: joursMajuscule[index], 
          heure_concert: formattedHour[index],
          ariste_nom : '' ,
        };
      });

      const addPictToProgrammation = formattedProgrammation.map((concert) => 
      concert.artiste_nom === 'MAÎTRE PIMS' ? {...concert, pict: require('./images/maitre-pims.png')} : 
      concert.artiste_nom === 'MICHEL SARTROUILLE' ? {...concert, pict: require('./images/michel-sartrouille.png')} : 
      concert.artiste_nom === 'ZOZ' ? {...concert, pict: require('./images/zoz.png')} : 
      concert.artiste_nom === 'PRUNO LEPÈRE' ? {...concert, pict: require('./images/pruno-lepere.png')} : 
      concert.artiste_nom === 'CHARLO ZNAVOUR' ? {...concert, pict: require('./images/charlo-znavour.png')} : 
      concert.artiste_nom === 'CLAUDIA SHIFFON' ? {...concert, pict: require('./images/claudia-shiffon.png')} : 
      concert.artiste_nom === 'JAZZAPHON' ? {...concert, pict: require('./images/rapetou.png')} : 
      concert.artiste_nom === 'RAPETOU GANG' ? {...concert, pict: require('./images/alien.png')} : 
      null)

      return {
        ...state,
        programmation: addPictToProgrammation,
        allProgrammation: addPictToProgrammation,
        dataLoaded: true,
    };
  }

  case 'loadMapFromApi': {
    const markersFromApi = action.payload.markers.map(marker => ({
      activ: marker.acf.activ,
      libelle: marker.acf.libelle,
      type: marker.acf.type,
      lat: marker.acf.google_map_marker.lat,
      lng: marker.acf.google_map_marker.lng
      }
    )
    );

    const addPinsToMarkers = markersFromApi.map((marker) => 
    marker.type === 'scene' ? {...marker, pinIcon: '🎸'} : 
    marker.type === 'food' ? {...marker, pinIcon: '🍔'} : 
    marker.type === 'boisson' ? {...marker, pinIcon : '🍺'} :
    marker.type === 'activity' ? {...marker, pinIcon : '🛝'} : 
    null)
    
    const rawFilters = [...new Set(markersFromApi.map(prop => prop.type))];
    const properFilters = rawFilters.map((filter, index)=>({id: index, type: filter, activ: true}))

    return {
      ...state,
      mapFilters : properFilters,
      activMapFilters : properFilters,
      markers: addPinsToMarkers,

    };
  }

  case 'loadTicketsFromApi': {
    const rawTickets = action.payload.tickets;
    const extractAcfFromRawTickets = rawTickets.map((ticket) => ticket.acf);
    const rawTicketsWithId = extractAcfFromRawTickets.map((object, index) => ({ ...object, id: index }));
  
    const properTickets = rawTicketsWithId.map((ticket) => {
      return {
        ...ticket,
        date_start: moment(ticket.date_start, 'YYYYMMDD').format('DD-MM'),
        date_end: moment(ticket.date_end, 'YYYYMMDD').format('DD-MM'),
        ticket_price: ticket.ticket_price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
      };
    });
  
  
    return {
      ...state,
      tickets: properTickets
    };
  }

  case 'addToCart': {
    const ticketId = action.payload.ticketId;
    const ticketPrice = action.payload.ticketPrice;
  
    const numericString = ticketPrice.replace(/[^0-9,]/g, '');
    const numericValue = parseFloat(numericString.replace(',', '.'));
  
    const isTicket = state.cartContent.find(item => item.id === ticketId);
  
    if (!isTicket) {
      const newItem = { id: ticketId, qte: 1, price: numericValue, total: numericValue };
      const updatedCartContent = [...state.cartContent, newItem];
      const updatedCartTotal = state.cartTotal + newItem.total;

      Cookies.set('cartContent', JSON.stringify(updatedCartContent));
      Cookies.set('cartTotal', updatedCartTotal);

      console.log(updatedCartContent, updatedCartTotal)

      return {
        ...state,
        cartContent: updatedCartContent,
        cartTotal: updatedCartTotal
      };


    } else {
    
      const updatedCartContent = state.cartContent.map(item => item.id === ticketId ?
          { ...item, qte: item.qte + 1, total: (item.total + numericValue) } : item);
      const updatedCartTotal = state.cartTotal + numericValue;

      Cookies.set('cartContent', JSON.stringify(updatedCartContent))
      Cookies.set('cartTotal', updatedCartTotal)

      console.log(updatedCartContent, updatedCartTotal)

      return {
        ...state,
        cartContent: updatedCartContent,
        cartTotal: updatedCartTotal
      };
    }
  }
  
  case 'updateCartFromQteSelector': {
    const ticketId = action.payload.id
    const newQte = parseInt(action.payload.qte)
    const ticketPrice = action.payload.price
    const updateTicketTotal = newQte * ticketPrice;
    const isItem = state.cartContent.find(item => item.id === ticketId);
    let updatedCartTotal = 0

    if (isItem) {
        // Déduire le montant de la quantité précédente multipliée par le prix
        const updateCartTotal = state.cartTotal - (isItem.qte * ticketPrice);

        const updatedCartContent = state.cartContent.map(item =>
            item.id === ticketId ?
            {...item, qte: newQte, total: updateTicketTotal} :
            item
        );

        updatedCartTotal = updateCartTotal + updateTicketTotal
        Cookies.set('cartContent', JSON.stringify(updatedCartContent))
        Cookies.set('cartTotal', updatedCartTotal)

        console.log(updatedCartContent, updatedCartTotal)

        return {
            ...state,
            cartContent: updatedCartContent,
            cartTotal: updateCartTotal + updateTicketTotal
        }
    } else {
        return null;
    }
}

case 'handleDeletedItemFromCart': {
  const updatedCartContent = state.cartContent.filter(product => product.id !== action.payload.id)
  Cookies.set('cartContent', JSON.stringify(updatedCartContent))

  return {
    ...state,
    cartContent : updatedCartContent
  }
}
  
  case 'updateProgrammationFromFilter': {
    const selectedFiltre = action.payload.choosenDate;
    const updatedProgrammation = (selectedFiltre === "All") ? 
      state.allProgrammation : 
      state.programmation.filter(item => {
        const selectedFilterFormatted = moment(selectedFiltre, 'DD-MM').format('dddd DD-MM');
        const concertDateFormatted = moment(item.date, 'dddd DD-MM').format('dddd DD-MM');

        return selectedFilterFormatted === concertDateFormatted;
      });
  
    return {
      ...state,
      programmation: updatedProgrammation,
    };
  }
  
  case 'resetProgrammationFilter' : {
    return {
      ...state, 
      programmation: state.allProgrammation,

    }
  }

  case 'UPDATE_Markers': {
    const { filterId, activ, filterType } = action.payload;
  
    const updatedFilters = state.mapFilters.map((filter) =>
      filter.id === filterId ? { ...filter, activ } : filter
    );
  
    const updatedMapFilters = updatedFilters.filter((filter) => filter.activ).map((filter) => filter.type);
  
    const updatedMarkers = state.markers.map((marker) =>
      marker.type === filterType ? { ...marker, activ: activ } : marker
    );
    
    console.log(activ)
    return {
      ...state,
      mapFilters: updatedFilters,
      activMapFilters: updatedMapFilters,
      markers: updatedMarkers,
    };
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
