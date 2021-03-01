import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

// NavigationBar
const NavigationBar = () => {
    return (
        <nav className="NavigationBarWrapper flex w-100 justify-around items-center bg-dark-gray">
            <Link to="/"         className="link white">Home</Link>
            <Link to="/about"    className="link white">About</Link>
            <Link to="/contact"  className="link white">Contact</Link>   
        </nav>
    );
} // end NavigationBar

export default NavigationBar;