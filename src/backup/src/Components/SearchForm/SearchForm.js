import React from 'react';
import './SearchForm.css';

// SearchForm
const SearchForm = () => {
    return (
        <React.Fragment>
            <form className="">
                <input type="text" id="search-field" placeholder="Try something" />
            </form>
        </React.Fragment>
    );
} // end SearchForm

export default SearchForm;