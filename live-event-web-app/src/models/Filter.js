// models/Filter.js
import { useAppContext } from '../context';

function Select() {
  const filterProgrammation = ["12/07", "13/07", "14/07"];
  const { dispatch } = useAppContext();

  const handleOnSelect = (e) => dispatch({ type: "select", payload: { date: e.target.value } });

  return (
    <div>
      {filterProgrammation.map((filter) => (
        <input key={filter} value={filter} onChange={handleOnSelect} />
      ))}
    </div>
  );
}

export default Select;
