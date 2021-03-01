import React from 'react';
import '../../Components/MainContent.css';
import MainHeader from '../MainHeader/MainHeader';
import Tagline from '../Tagline/Tagline';

const HEADER_TEXT       = 'About The Project';
const TAGLINE_TEXT      = 'Keep two books in your pocket. One to read. One to write in.';

// About Page
const About = () => {
    return (
        <div className="MainContentWrapper flex flex-column w-100 items-center bg-white">
                <MainHeader headerText={HEADER_TEXT} />
                <Tagline taglineText={TAGLINE_TEXT} />
        </div>
    );

} // end About

export default About;
