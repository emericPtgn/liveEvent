import { createContext, useReducer, useContext } from "react";
import moment from "moment";
import 'moment/locale/fr'
import Cookies from "js-cookie";
import toFormatConcerts from "./utils/toFormatConcerts";
import filterProgrammationByDate from "./utils/filterProgrammationByDate";
import addConcertToMarker from "./utils/addConcertToMarker";
import generateFilters from "./utils/generateFilters";
import updateMarkersFromFilters from "./utils/updateMarkersFromFilters";
import getConcertsEnCours from "./components/getConcertsEnCours";

const Context = createContext();
const { Provider, Consumer } = Context;


const initialCartContent = JSON.parse(Cookies.get('cartContent') || '[]');
const initialCartTotal = parseInt(Cookies.get('cartTotal') || '0');


const initialState = {
  programmation: [],
  allProgrammation: [],
  filtres: [
    {'Libellé': 'All', 'activ': false}, 
    {'Libellé': '30-09', 'activ': false}, 
    {'Libellé': '29-09', 'activ': false},
  ],
  tickets: [],
  cartContent: initialCartContent,
  cartTotal: initialCartTotal,
  markers: [],
  markers2: [],
  allMarkers: [],
  allMarkers2: [],
  mapFilters: [],
  mapFilters2: [],
  activMapFilters: [],
  activMapFilters2: [],
  dataLoaded: false,
  cartToggle: false,
  faq: [],
  concerts: [],
  concertsEnCours: []
};


function reducer(state, action) {
  switch (action.type) {

    case "loadProgrammationFromApi2": {
      let concerts = action.payload.filter(activity => activity.type === 'Concert');      
      let formattedConcerts = toFormatConcerts(concerts);
      let concertsEnCoursListe = getConcertsEnCours(formattedConcerts)

      return {
          ...state,
          concerts: formattedConcerts,
          allProgrammation : formattedConcerts,
          concertsEnCours : concertsEnCoursListe,
          dataLoaded : true
      };
  }

  case 'loadDataForMap2': {
    let markersWithConcerts = addConcertToMarker(state.concerts, action.payload.data)
    let filters = generateFilters(state.markers2)

    return {
      ...state,
      markers2 : markersWithConcerts,
      allMarkers2 : markersWithConcerts,
      mapFilters2 : filters
    };
  }
  

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
          ariste_nom : '',
          id: index
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
    const markersFromApi = action.payload.markers.map((marker, index) => ({
      activ: marker.acf.activ,
      libelle: marker.acf.libelle,
      type: marker.acf.type,
      lat: marker.acf.google_map_marker.lat,
      lng: marker.acf.google_map_marker.lng,
      description: marker.acf.description,
      more_info: marker.acf.more_info,
      id: index
    }));

  
    const concertsDataToFillMarkersWith = state.programmation.map((concert) => ({
      artiste: concert.artiste_nom,
      date: concert.date,
      heure: concert.heure_concert,
      scene: concert.scene_du_concert,
    }));
  
    const resultats = {};
    markersFromApi.forEach((marker) => {
      const libelleMarker = marker.libelle;
      resultats[libelleMarker] = [];
      const concertsCorrespondants = concertsDataToFillMarkersWith.filter((concert) => 
      concert.scene === libelleMarker);
      resultats[libelleMarker] = concertsCorrespondants;
    });

  
    function estDansIntervalle(heureConcert) {
      const maintenant = new Date();
      const debutConcert = new Date(maintenant);
      debutConcert.setHours(parseInt(heureConcert.split(':')[0], 10));
      debutConcert.setMinutes(parseInt(heureConcert.split(':')[1], 10));
      const finConcert = new Date(debutConcert);
      finConcert.setHours(finConcert.getHours() + 1);
      return maintenant >= debutConcert && maintenant <= finConcert;
    }
  
    const markersToDisplay = markersFromApi.map((marker) => {
      if (marker.type === 'scene') {
        const libelleMarker = marker.libelle;
        const concertsCorrespondants = resultats[libelleMarker];
        const concertEnCours = concertsCorrespondants.some((concert) =>
          estDansIntervalle(concert.heure)
        );
  
        return {
          ...marker,
          description: concertsCorrespondants,
          concertEnCours: concertEnCours,
          pinIcon: '🎸',
        };
        
      } else if (marker.type === 'food') {
        return { ...marker, pinIcon: '🍔' };
      } else if (marker.type === 'boisson') {
        return { ...marker, pinIcon: '🍺' };
      } else if (marker.type === 'activity') {
        return { ...marker, pinIcon: '🛝' };
      } else {
        return null;
      }
    });

 /*    markersToDisplay.forEach((marker) => {
      if (marker.type === 'scene') {
        const scenesArray = marker.description;
        const chronologicConcertsArray = scenesArray.sort((concert1, concert2) => {
          const dateConcert1 = new Date(`${concert1.date} ${concert1.heure}`);
          const dateConcert2 = new Date(`${concert2.date} ${concert2.heure}`);
          return dateConcert1 - dateConcert2;
        });
        marker.description = chronologicConcertsArray;
      }
    });

    console.log(markersToDisplay) */
    
 
    const rawFilters = [...new Set(markersFromApi.map((prop) => prop.type))];
    const setUpFilters = rawFilters.map((filter, index) => ({
      id: index,
      type: filter,
      activ: true,
    }));
    const newFilter = { id: 4, type: 'concerts (en cours)', activ: false };
    const filtersToDisplay = [...setUpFilters, newFilter];
  
    return {
      ...state,
      mapFilters: filtersToDisplay,
      activMapFilters: filtersToDisplay,
      markers: markersToDisplay,
    };
  }
  
  case 'loadTicketsFromApi': {
    const rawTickets = action.payload.tickets;
    const extractAcfFromRawTickets = rawTickets.map((ticket) => ticket.acf);
    const rawTicketsWithId = extractAcfFromRawTickets.map((object, index) => ({ ...object, id: index }));
  
    const properTickets = rawTicketsWithId.map((ticket, index) => {
      return {
        ...ticket,
        id: index,
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

  case 'loadFAQfromApi': {
    const rawFaqObject = action.payload.faq
    const cleanObject = [rawFaqObject[0].acf]
    const rawFaq = [cleanObject[0]];
    const faq = Object.values(rawFaq[0]);

    return {
      ...state,
      faq: faq
    }
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
  
  case 'updateProgrammationFromFilter2': {
    let concerts = '';
    let filter = '';
    let updatedProgrammation = filterProgrammationByDate(
      concerts = state?.concerts, 
      filter = action.payload?.selectedFilter);

    return {
      ...state,
      concerts : updatedProgrammation
    }
  }

  case 'updateProgrammationFromFilter': {
    const selectedFiltre = action.payload.selectedFilter;

    const updatedProgrammation = (selectedFiltre === "All") ? 
      state.allProgrammation : 
      state.concerts.filter(item => {
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
      concerts: state.allProgrammation,

    }
  }

  case 'UPDATE_Markers': {
    const { filterId, activ, filterType } = action.payload;
  
    const updatedFilters = state.mapFilters.map((filter) =>
      filter.id === filterId ? { ...filter, activ } : filter
    );
  
    if (filterId === 4) {
      if (activ) {
        // Filtrer les scènes pour lesquelles un concert est en cours
        const scenesAvecConcertEnCours = state.markers
          .filter((marker) => marker.type === 'scene' && marker.concertEnCours)
          .map((scene) => scene.libelle);
  
  
        const updatedMarkers = state.markers.map((marker) => {
          if (marker.type === 'scene') {
            const markerActiv = scenesAvecConcertEnCours.includes(marker.libelle);
            return { ...marker, activ: markerActiv };
          } else {
            return marker;
          }
        });
  
        return {
          ...state,
          mapFilters: updatedFilters,
          markers: updatedMarkers,
        };
      } else {
        // Si le filtre "concert en cours" est désactivé, réactivez tous les marqueurs de type "scene"
        const updatedMarkers = state.markers.map((marker) => {
          if (marker.type === 'scene') {
            return { ...marker, activ: true };
          } else {
            return marker;
          }
        });
  
        return {
          ...state,
          mapFilters: updatedFilters,
          markers: updatedMarkers,
        };
      }
    } else {
  
      const updatedMarkers = state.markers.map((marker) =>
        marker.type === filterType ? { ...marker, activ } : marker
      );
  
      return {
        ...state,
        mapFilters: updatedFilters,
        markers: updatedMarkers,
      };
    }
  }

  case 'UPDATE_Markers2': {
    console.log('state.concertsEnCours : ', state.concertsEnCours);
    
    const { id, isActiv } = action.payload;
    const updatedFilters = state.mapFilters2.map((filter) =>
      filter.id === id ? { ...filter, activ: isActiv } : filter
    );

    const updatedMarkers = updateMarkersFromFilters(state.allMarkers2, updatedFilters, state.concertsEnCours);
    
    return {
      ...state,
      mapFilters2: updatedFilters,
      markers2: updatedMarkers
    };
}


  case 'closeCart': {
    let showBool
    showBool = action.payload.show
    return {
      ...state,
      cartToggle: showBool
    }
  }

  case 'showCart': {
    let showBool
    showBool = action.payload.show
    return {
      ...state,
      cartToggle: showBool
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