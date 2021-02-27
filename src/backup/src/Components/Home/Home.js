import React from 'react';
import './Home.css';
import MainHeader from '../MainHeader/MainHeader';
import SearchForm from '../SearchForm/SearchForm';
import VolumeList from '../VolumeList/VolumeList';


// Home
const Home = ( {handleSubmit, volumes} ) => {
    const headerText = 'Book Search';


    return (
        <div className="MainContentWrapper flex flex-column w-100 justify-start items-center bg-white">
            <MainHeader headerText={headerText} />
            <SearchForm />
            <p>Search stuff in Google Books.</p>
            <button onClick={handleSubmit}>Click Me</button>

            <VolumeList volumes={volumes} />
        </div>
    );
} // end Home

export default Home;
