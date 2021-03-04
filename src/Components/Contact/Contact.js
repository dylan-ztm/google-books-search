import React from 'react';
import '../../Components/MainContent.css';
import MainHeader from '../MainHeader/MainHeader';

const HEADER_TEXT       = `Let's Connect!`;

// Contact Page
const Contact = () => {
    return (
        <article className="MainContentWrapper flex flex-column w-100 items-center bg-white">
                <MainHeader headerText={HEADER_TEXT} />
        </article>
    );

} // end Contact

export default Contact;
