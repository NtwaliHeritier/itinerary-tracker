import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/itinerary.css';

const Itinerary = ({saveItinerary}) => {
    const history = useHistory()
    const [state, setState] = useState({name: "", time: "Fri at 9 am"})
    
    const handleChange = (e) => {
        const newState = {...state, name: e.target.value}
        setState(newState)
    }

    const nameEmpty = () => {
        return state.name === ""
    }

    const handleClick = (e) => {
        e.preventDefault()
        saveItinerary(state)
        history.push("/")
    }

    return (
      <>
        <Link className="home-link" to = "/">Home</Link>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={handleChange} value={state.name}/>
            <button onClick = {handleClick} disabled={nameEmpty()}>Save</button>
        </form>
      </>  
     );
}
 
export default Itinerary;