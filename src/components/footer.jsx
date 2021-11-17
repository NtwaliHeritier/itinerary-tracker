import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </div>
     );
}
 
export default Footer;