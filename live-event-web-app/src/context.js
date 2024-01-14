import { createContext, useContext, useReducer } from "react";
import concerts from './data/liste-concerts.json';

const Context = createContext();
const { Provider, Consumer } = Context;

/* const concerts = [
        {
            id: 1,
            "date": "13/07",
            "heure": "17h00",
            "artiste": "rapetou",
            "scene": "a",
            "description": "Rapetou, le phénomène énergique du rap qui apporte une fusion unique de rap et de rock. Préparez-vous à danser et à rimer pour entrer dans le groove de 'rapetou' !"
        },
    
        {
            id: 2,
            "date": "13/07",
            "heure": "18h00",
            "artiste": "jazzaphon",
            "scene": "a",
            "description": "Jazzaphon, le sorcier du saxophone ! Préparez-vous à être enchanté par des mélodies envoûtantes et des improvisations éblouissantes. Jazzaphon, où chaque note est un sort !"
        },
    
        {
            id: 3,
            "date": "13/07",
            "heure": "19h00",
            "artiste": "classix",
            "scene": "a",
            "description": "Classix, les rebelles classiques ! Mélangeant des vibrations classiques avec une touche moderne, ces maestros vous feront taper du pied et remettre en question votre allégeance aux symphonies traditionnelles."
        },
    
        {
            id: 4,
            "date": "14/07",
            "heure": "17h00",
            "artiste": "michel jacqueson",
            "scene": "b",
            "description": "Michel Jacque-son, le prodige du piano ! Préparez-vous à assister à la grandeur des touches de piano dansant sous ses doigts. Beethoven, qui ? Mozart, quoi ? Tout est question de Jacque-son !"
        },
    
        {
            id: 5,
            "date": "14/07",
            "heure": "18h00",
            "artiste": "ariette francklin",
            "scene": "b",
            "description": "Ariette Francklin, la sensation pleine d'âme ! Sa voix est si puissante qu'elle a déjà fait pleurer un micro. Préparez-vous pour un voyage soul qui vous laissera émotionnellement touché et musicalement groové."
        },
    
        {
            id: 6,
            "date": "14/07",
            "heure": "19h00",
            "artiste": "charlo znavour",
            "scene": "b",
            "description": "Charlo Znavour, le troubadour poétique ! Ses paroles sont si profondes que même les dictionnaires le consultent. Préparez-vous à une soirée de romance, d'esprit et d'une touche de magie Znavour !"
        }
] */

const lovedArtists = [
    {id : 1, artistName: "rapetou", youtubeLink : "www.youtube.fr/rapetou", loved : false},
    {id : 2, artistName: "jazzaphon", youtubeLink : "www.youtube.fr/jazzaphon", loved : false},
    {id : 3, artistName: "classix", youtubeLink : "www.youtube.fr/classix",  loved : false},
    {id : 4, artistName: "michel jacqueson", youtubeLink : "www.youtube.fr/michel jacqueson",  loved : false},
    {id : 5, artistName: "ariette francklin", youtubeLink : "www.youtube.fr/ariette francklin",  loved : false},
    {id : 6, artistName: "charlo znavour", youtubeLink : "www.youtube.fr/charlo znavour",  loved : false}
]

// Les données de la programmation du festival
const initialState = {

    programmationToDisplay : concerts,
    all : concerts,
    filterProgrammation : ["12/07", "13/07", "14/07"],
    totalTicketsToBuy : {vendredi : 50000, samedi : 75000, dimanche : 30000},
    lovedArtists : lovedArtists

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
        const filtered = state.programmationToDisplay.filter((concert) => concert.date === action.payload.date)
        return {
            ...state,
            programmationToDisplay : filtered,

        }

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