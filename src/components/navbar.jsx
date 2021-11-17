import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return ( 
        <div className="nav-div">
            <Link to="/" className="home">Home</Link>
        </div>
     );
}
 
export default Navbar;