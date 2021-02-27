import React from 'react';
import './MainHeader.css';

// MainHeader
const MainHeader = ( {headerText} ) => {
    return (
        <header>
            <h1>{headerText}</h1>
        </header>
    );
} // end MainHeader

export default MainHeader;