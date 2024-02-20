import { useAppContext } from "../context2.js";
import FestiMap from "../utils/mapComponent.js";
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function MapFestival() {

  return (
    <div>
        <h1 className="text-center">FestiMAP'</h1>
        <Filters />
        <FestiMap />
    </div>
  );
}


const Filters = () => {
  const { state, dispatch } = useAppContext();
  const filters = state.mapFilters;

  const onFilterChange = (filterId, activ, filterType) => {
    dispatch({ type: 'UPDATE_Markers', payload: { filterId, activ, filterType } });
  };

  const filtersToDisplay = filters.map((filter) => (
    <Filter key={filter.id} filter={filter} onFilterChange={onFilterChange} />
  ));

  return (
    <div className="d-flex justify-content-around align-items-center mt-5 py-2 " 
    style={{flexWrap: 'wrap', 
    backgroundColor: 'rgba(248, 248, 248, 0.54)', 
    borderStyle: 'solid', 
    borderColor: 'rgba(123, 132, 132, 0.15)', 
    borderWidth: 0.4 }}>
      {filtersToDisplay}
    </div>
  );
};


const Filter = ({ filter, onFilterChange }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      backgroundColor: 'rgba(248, 248, 248, 0.354)',
      padding: '10px'
      }}>
      <span 
      className="me-3">{filter.type}</span>
      <Form.Check
        type="checkbox"
        checked={filter.activ}
        onChange={(e) => onFilterChange(filter.id, e.target.checked, filter.type)}
        className="my-custom-checkbox"
      />
    </div>
  );
};

