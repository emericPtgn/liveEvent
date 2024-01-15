// Filter.js
import { useAppContext } from '../context';

// ...

function Select() {
  const { state, dispatch } = useAppContext();

  const handleOnSelect = (e) => {
    const selectedDate = e.target.value;
    const selectedDates = e.target.checked
      ? [...state.selectedDates, selectedDate]
      : state.selectedDates.filter((date) => date !== selectedDate);

    dispatch({
      type: "select",
      payload: { selectedDates: selectedDates }
    });
  };

  return (
    <div className='container d-flex justify-content-evenly'>
      {state.filterProgrammation.map((filter) => (
        <span key={filter.key}>
          {filter.key}
          <input
            type='checkbox'
            onChange={handleOnSelect}
            value={filter.date}
            checked={state.selectedDates.includes(filter.date)}
          />
        </span>
      ))}
    </div>
  );
}

// ...


export default Select;
