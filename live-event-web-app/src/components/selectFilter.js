import React from "react";
import { useAppContext } from "../context2.js";


export default function Filtre(){
    const {state, dispatch} = useAppContext()

    const handleOnClick = e => {
    dispatch({ type: 'resetFiltre' })
    dispatch({type:'selectFiltre', payload: {filtre : e.target.value}})}

    return (
        <div className="d-flex justify-content-center my-5"> 
        {state.filtres.map(filtre => 
                <button value={filtre} onClick={handleOnClick} key={filtre} type="button" className="btn btn-outline-warning mx-3 custom-width-btn">{filtre}</button>)}
        </div>
    )
}