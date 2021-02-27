import React from 'react';
import './NoResultsFound.css';

// NoResultsFound
const NoResultsFound = () => {

    return (
        <section className="flex flex-column items-center w-90 no-results-container">
            <p>Your search did not match any book results.</p>
            <span className="inner-heading">Suggestions:</span>
            <ul>
                <li>Make sure all words are spelled correctly.</li>
                <li>Try using different keywords.</li>
            </ul>
        </section>
    )
} // end NoResultsFound

export default NoResultsFound;
