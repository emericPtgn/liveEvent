import { createContext, useContext, useReducer } from "react";
import concerts from './data/liste-concerts.json';


const Context = createContext();
const { Provider, Consumer } = Context;

const lovedArtists = [

    {id : 1, artistName: "rapetou", youtubeLink : "www.youtube.fr/rapetou", loved : false},
    {id : 2, artistName: "jazzaphon", youtubeLink : "www.youtube.fr/jazzaphon", loved : false},
    {id : 3, artistName: "classix", youtubeLink : "www.youtube.fr/classix",  loved : false},
    {id : 4, artistName: "michel jacqueson", youtubeLink : "www.youtube.fr/michel jacqueson",  loved : false},
    {id : 5, artistName: "ariette francklin", youtubeLink : "www.youtube.fr/ariette francklin",  loved : false},
    {id : 6, artistName: "charlo znavour", youtubeLink : "www.youtube.fr/charlo znavour",  loved : false}

]
const filters = [
    {date : "12-07", active : false, key : "vendredi"}, 
    {date : "13-07", active : false, key : "samedi"}, 
    {date : "14-07", active : false, key : "dimanche"}
]

// Les données de la programmation du festival
const initialState = {

    programmationToDisplay : concerts,
    all : concerts,
    filterProgrammation : filters,
    totalTicketsToBuy : {vendredi : 50000, samedi : 75000, dimanche : 30000},
    lovedArtists : lovedArtists,
    selectedDates: [], // Ajout de la propriété selectedDates
    programmationFromApi: []

}

function reducer(state, action) {
    switch(action.type) {

        case "check":
        const update = state.lovedArtists.map((artist) => artist.id === action.payload.id ? {...artist, loved : action.payload.bool} : artist ) ;
        return {
            ...state,
            lovedArtists : update
        }

        case "select":
        const selectedDates = action.payload.selectedDates;
        const filtered =
            selectedDates.length > 0
            ? state.all.filter((concert) =>
                selectedDates.includes(concert.date)
                )
            : state.all;

        return {
            ...state,
            programmationToDisplay: filtered,
            selectedDates: selectedDates
        };

/*         case "FETCH_PROGRAMMATION_SUCCESS":
            console.log(state.programmationFromApi)
            return {
                ...state,
                programmationFromApi: action.payload,
            } */


        default:
            throw new Error();

}}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={{ state, dispatch }} >{ children }</Provider>
}

export const AppConsumer = ({ children }) => {
    return <Consumer>{(value) => children(value)}</Consumer>
}

export const useAppContext = () => {
    return useContext(Context)
}

export default AppProvider;