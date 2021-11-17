import React from 'react';
import { useHistory } from 'react-router';
import '../css/title.css';

const Title = () => {
    const history = useHistory()
    const redirect = () => {
        history.push('/itinerary')
    }

    return ( 
        <div className="title-div">
            <h3>Itinerary tracker</h3>
            <button onClick={redirect}>Add</button>
        </div>
     );
}
 
export default Title;