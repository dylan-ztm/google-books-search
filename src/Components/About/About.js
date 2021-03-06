import React from 'react';
import '../../Components/MainContent.css';
import MainHeader from '../MainHeader/MainHeader';

const HEADER_TEXT       = 'About The Project';

// About Page
const About = () => {
    return (
        <article className="MainContentWrapper flex flex-column w-100 items-center bg-white">
                <MainHeader headerText={HEADER_TEXT} />
                <section className="flex flex-column w-90 items-center">
                    <h2>Overview</h2>
                    <p>
                        I built this search application in January 2021 as a 
                        demo for the Google Books API. The search tool allows you to send
                        queries to Google Books and will retrieve a maximum of forty results.  This was a fun 
                        application to build. If you're a web developer and are interested in using the Google Books API, 
                        you can go <a 
                                        href="https://developers.google.com/books" 
                                        target="_blank" rel="noopener noreferrer"
                                        className="link blue">
                                        here&nbsp; 
                                   </a> 
                                to get started.
                    </p>
                </section>

                <section className="flex flex-column w-90 items-center">
                    <h2>Reporting Problems</h2>
                    <p>
                        Feel free to email <a href="mailto:dylan@dylancross.us" className="link blue">me</a> if you'd like to report a problem with 
                        the site or offer any suggestions on how I may improve it. If you're a fellow developer, you can also open an issue through  
                        <a 
                                        href="https://github.com/dylan-ztm/google-books-search/issues" 
                                        target="_blank" rel="noopener noreferrer"
                                        className="link blue">
                                        &nbsp;GitHub
                        </a>.
                    </p>
                </section>
        </article>
    );

} // end About

export default About;