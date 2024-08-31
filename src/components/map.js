import { useAppContext } from "../context2.js";
import FestiMap from "../utils/mapComponent.js";
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function MapFestival() {
  return (
    <div className="text-center container-carte">
        <Filters />
        <FestiMap />
    </div>
  );
}

const Filters = () => {
  const { state, dispatch } = useAppContext();
  const filters = state.mapFilters2;
  const onFilterChange = (id, isActiv, type) => 
  {dispatch({ type: 'UPDATE_Markers2', payload: { id, isActiv, type } });};
  const filtersToDisplay = filters.map((filter) => 
  (<Filter key={filter.id} filter={filter} onFilterChange={onFilterChange} />));

  return (
    <div className='container-filters-map'>{filtersToDisplay}</div>
  );
};


const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className="container-filtre-map">
      <span className="me-3">{filter.type}</span>
      <Form.Check type="checkbox" checked={filter.activ} 
      onChange={(e) => onFilterChange(filter.id, e.target.checked, filter.type)} 
      className="my-custom-checkbox"/>
    </div>
  );
};

const ConcertsEnCours = () => {
  return (
    <>
    </>
  )
}