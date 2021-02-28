import React from 'react';
import './MainFooter.css';

// MainFooter
const MainFooter = () => {
    return (
        <nav className="MainFooterWrapper flex w-100 justify-around items-center bg-dark-gray">
            <a href="/"             className="link white">Home</a>
            <a href="/"             className="link white">About</a>
            <a href="/"             className="link white">Privacy</a>
        </nav>
    );

} // end MainFooter

export default MainFooter;