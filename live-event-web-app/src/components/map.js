import { useAppContext } from "../context2.js";
import FestiMap from "../utils/mapComponent.js";

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
    <div className="d-flex justify-content-center">
      {filtersToDisplay}
    </div>
  );
};


const Filter = ({ filter, onFilterChange }) => {

  return (
    <div className="d-flex mx-3">
      <input
        type="checkbox"
        checked={filter.activ}
        onChange={(e) => onFilterChange(filter.id, e.target.checked, filter.type)}
      />
      {filter.type}
    </div>
  );

};
