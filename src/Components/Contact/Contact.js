import React from 'react';
import '../../Components/MainContent.css';
import MainHeader from '../MainHeader/MainHeader';
import Tagline from '../Tagline/Tagline';

const HEADER_TEXT       = `Let's Connect!`;
const TAGLINE_TEXT      = 'Tagline goes here.';

// Contact Page
const Contact = () => {
    return (
        <div className="MainContentWrapper flex flex-column w-100 items-center bg-white">
                <MainHeader headerText={HEADER_TEXT} />
                <Tagline taglineText={TAGLINE_TEXT} />
        </div>
    );

} // end Contact

export default Contact;
