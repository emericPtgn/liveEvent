import React from "react";
import { useAppContext } from "../context2.js";


export default function Filtre(){
    const {state, dispatch} = useAppContext()

    const handleOnChange = e => {
    dispatch({type:'resetProgrammationFilter'})
    // dispatch({type:'selectProgrammationFilter', payload: {toActivFiltre : e.target.value}})}
    dispatch({type:'updateProgrammationFromFilter', payload: {choosenDate: e.target.value}})}

    return (
        <div className="d-flex my-5 justify-content-between px-3 pb-3" 
        style={{borderBottomStyle: 'solid', borderBottomColor: '#b9b9b9', borderBottomWidth: 0.1}}>
            <p className="m-0">Trie :</p> 
            <select onChange={(e) => handleOnChange(e)}>
            {state.filtres.map((filtre)=> 
            <option 
            key={filtre.Libellé} 
            value={filtre.Libellé}>{filtre.Libellé}</option>)}
                </select>
        </div>
    )
}

/* const handleOnClick = e => {
    dispatch({type: 'resetProgrammationFilter'})
    dispatch({type:'selectProgrammationFilter', payload: {filtre : e.target.value}})} */

/* {state.filtres.map(filtre => 
    <button 
    value={filtre} 
    onClick={handleOnClick} 
    key={filtre} type="button"
    style={{width: '100px', border: 'none', backgroundColor: '#FFFDF7', borderRadius: '2%', borderStyle: 'solid'}}
    >{filtre}</button>)} */