import React from "react";
import { useAppContext } from "../context2.js";


export default function Filtre(){
    
    const {state, dispatch} = useAppContext()
    const handleOnChange = e => {
    dispatch({type:'resetProgrammationFilter'})
    dispatch({type:'updateProgrammationFromFilter', payload: {selectedFilter: e.target.value}})}

    return (
        
        <div className='container-filtre-programmation'>
            <p className="mb-0">Afficher par : </p> 
            <select onChange={(e) => handleOnChange(e)}>
            {state.filtres.map((filtre)=> 
            <option 
            key={filtre.Libellé} 
            value={filtre.Libellé}>{filtre.Libellé}</option>)}
                </select>
        </div>
    )
}