import React from 'react';
import './Volume.css';

// formatFullTitle
const formatFullTitle = (title, subtitle) => {
    const delimiter = ':';
    const singleSpace = ' ';
    let newTitle;

    if (title.length > 0 && subtitle.length > 0) {
        newTitle = title + delimiter + singleSpace + subtitle;
        return newTitle;
    } //end if

    if (title.length === 0) {
        return 'No title available for this text.';
    } else {
        newTitle = title;
        return newTitle;
    } //end else
} // end formatFullTitle

// formatPublishedYear
const formatPublishedYear = (publishedDate) => {
    let extractedYear;

    if (publishedDate.length >= 4) {
        extractedYear = publishedDate.slice(0,4);
        return extractedYear;
    } else {
        return 'No publication date available.';
    } // end else
} // end formatPublishedYear

// extractFirstAuthor
const extractFirstAuthor = (authors) => {
    let extractedAuthor;

    if (authors.length > 0) {
        extractedAuthor = authors[0];
        return extractedAuthor;
    } else {
        return 'No author found for this text.';
    } // end else
} // end extractFirstAuthor

// extractTextSnippet
const extractTextSnippet = (textSnippet) => {
    let extractedTextSnippet;

    if (textSnippet.length > 0) {
        extractedTextSnippet = textSnippet;
        return extractedTextSnippet;
    } else {
        return 'No description available for this text.';
    }
} // end extractTextSnippet

// Volume Component
const Volume = ( {volume} ) => {
    const { 
                authors, 
                previewLink, 
                publishedDate, 
                subtitle, 
                textSnippet, 
                thumbnail,  
                title
        } = volume;

    const fullTitle       = formatFullTitle(title, subtitle);
    const publishedYear   = formatPublishedYear(publishedDate);
    const firstAuthor     = extractFirstAuthor(authors);
    const description     = extractTextSnippet(textSnippet);
    const delimiter       = '|';
    let   fullTitleElement;

    // Validate the previewLink retrieved from GoogleBooks API
    if (previewLink.length > 0) {
        fullTitleElement = <p><a href={ `${previewLink}` } target="_blank" rel="noopener noreferrer"> {fullTitle} </a></p>
    } else {
        fullTitleElement = <p>{fullTitle}</p> // Do not use previewLink if it has string length of zero.
    } // end else
    

    return (
        <section className="flex flex-column items-center w-90 volume-container ma1 pb2 ba br3 b--black-10 shadow-1">
            <div className="w-90 title-container">
                {fullTitleElement}
                <p>{ `${firstAuthor} ${delimiter} ${publishedYear}` }</p>
            </div>

            <div className="flex justify-between items-start w-90 description-container">
                    <img className="thumbnail" src={thumbnail} alt="Book cover" />
                    <span className="f6 description">{description}</span>
            </div>
        </section>
    )
} // end Volume

export default Volume;

/* May need to use later for debugging. This console logs
all seven local variables for the volume object.

const tempArray = [ authors, 
        previewLink, 
        publishedDate, 
        subtitle, 
        textSnippet, 
        thumbnail,  
        title];
    
    console.log("volume component. destructured properties.");
    console.log(tempArray);
*/