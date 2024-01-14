// views/Programmation.js
import { useAppContext } from '../context';

function ConcertCard({ id, date, heure, artiste, description, loved }){
  const { dispatch } = useAppContext();
  const toggleCheck = e => dispatch({ type : 'check', payload : { id, bool : e.target.checked }})
  return (
    <li className='concertCard'>
      <img alt=''></img>
      <div>
        <span>{ artiste }</span>
        <span>{ date }</span>
        <span>{ description }</span>
      </div>
      <input type='checkbox' checked={ loved } onChange={ toggleCheck } ></input>
      <span>{ heure }</span>
    </li>
  )
};

function Programmation(){
  const { state } = useAppContext()
  return (
    <ul className='programmation'>
      {state.programmationToDisplay.map(( concert ) => (
        <ConcertCard key={ concert.id } { ...concert } />
      ))}
    </ul>
  )
}

export default Programmation;
