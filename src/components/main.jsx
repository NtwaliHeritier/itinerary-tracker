import React, {useContext} from 'react';
import '../css/main.css';
import {Context} from '../App';

const Main = ({deleteProgram}) => {
    const timetable = useContext(Context)
    return ( 
        <div className="main-content">
            {
                timetable.map(itinerary => <div key={itinerary.name} className="main-content-item">
                    <div className="left-content">
                        <h3>{itinerary.name}</h3>
                        <span>{itinerary.time}</span>
                    </div>
                    <div className="delete-btn">
                        <button onClick={() => deleteProgram(itinerary.name)}>X</button>
                    </div>
                </div>)
            }
        </div>
     );
}
 
export default Main;
