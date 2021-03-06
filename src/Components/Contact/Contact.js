import React from 'react';
import '../../Components/MainContent.css';
import MainHeader from '../MainHeader/MainHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const HEADER_TEXT       = `Contact Me`;

// Contact Page
const Contact = () => {
    return (
        <article className="MainContentWrapper flex flex-column w-100 items-center bg-white">
                <MainHeader headerText={HEADER_TEXT} />
                <section className="flex flex-column w-90 items-center">
                    <h2>Email</h2>
                    <a href="mailto:dylan@dylancross.us" className="link blue">dylan@dylancross.us</a>
                </section>

                <section className="flex flex-column w-90 items-center">
                    <h2>Social</h2>
                </section>

                <section className="flex flex-column w-90 items-center">
                    <h2>Homepage</h2>
                    <a 
                                        href="https://dylancross.us" 
                                        target="_blank" rel="noopener noreferrer"
                                        className="link blue">
                                        dylancross.us
                        </a>
                </section>
                
        </article>
    );

} // end Contact

export default Contact;

/* <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedinIn} />  */
