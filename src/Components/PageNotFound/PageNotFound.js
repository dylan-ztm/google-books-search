import React from 'react';
import { Link } from 'react-router-dom';
import '../../Components/MainContent.css';

// PageNotFound Component
const PageNotFound = () => {
    return (
        <article className="MainContentWrapper flex flex-column w-100 items-center bg-white">
            <p>Sorry! You've requested a page we can't find.</p>
            <p>Click <Link to="/" className="link blue">here</Link> to return to the homepage.</p>
        </article>
    );
} // end PageNotFound

export default PageNotFound;