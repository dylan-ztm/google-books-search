import React from 'react';
import './Volume.css';

// formatFullTitle
const formatFullTitle = (title, subtitle, previewLink) => {
    const delimiter = ':';
    const singleSpace = ' ';
    let newTitle, newTitleElement;

    if (title.length > 0 && subtitle.length > 0) {
        newTitle = title + delimiter + singleSpace + subtitle;
    } else if (title.length === 0) {
        newTitle = 'No title available for this text.';
      } // end else if
    else {
        newTitle = title;
    } //end else

     // Validate the previewLink retrieved from GoogleBooks API
     if (previewLink.length > 0) {
        newTitleElement = <p><a href={previewLink} target="_blank" rel="noopener noreferrer"> {newTitle} </a></p>
        return newTitleElement;
    } else {
        newTitleElement = <p>{newTitle}</p> // Do not use previewLink if it has string length of zero.
        return newTitleElement;
    } // end else

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

// formatDescription
const formatDescription = (textSnippet) => {
    let description;

    // function decodeString
    const decodeString = (str) => {
        let body = `<div id="id1"> ${str} </div>`;
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = body;
        let sanitizedText = tempDiv.textContent || tempDiv.innerText;
        return sanitizedText;
      } // end decodeString

    if (textSnippet.length > 0) {
        description = decodeString(textSnippet);
        return description;
    } else {
        description = 'No description available for this text.';
        return description;
    }
} // end formatDescription

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

    const fullTitleElement       = formatFullTitle(title, subtitle, previewLink);
    const publishedYear          = formatPublishedYear(publishedDate);
    const firstAuthor            = extractFirstAuthor(authors);
    const description            = formatDescription(textSnippet);
    const delimiter              = '|';
    
    return (
        <section className="volume-container flex flex-column items-center w-90 ma1 pb2 ba br3 b--black-10 shadow-1">
            <div className="w-90 title-container">
                {fullTitleElement}
                <p>{ `${firstAuthor} ${delimiter} ${publishedYear}` }</p>
            </div>

            <div className="description-container flex justify-between items-start w-90">
                    <img className="thumbnail" src={thumbnail} alt="Book cover" />
                    <span className="description f6">{description}</span>
            </div>
        </section>
    );
} // end Volume

export default Volume;