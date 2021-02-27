  // extractVolumeData function
  const extractVolumeData = (volumeItem, index) => {
    let extractedVolume = {};

    // Extract and set the volume ID property
    volumeItem.id !== undefined && volumeItem.id !== ''
    ? extractedVolume.id = `${index}_${volumeItem.id}_${Date.now()}`
    : extractedVolume.id = `${index}_${Date.now()}`; /* fallback ID if volumeItem.id is 
    undefined or an empty string */

    //Extract and set textSnippet
    if (volumeItem.searchInfo !== undefined) {
      volumeItem.searchInfo.textSnippet !== undefined
        ? extractedVolume.textSnippet = volumeItem.searchInfo.textSnippet
        : extractedVolume.textSnippet = '';
    } // end if
    else {
      extractedVolume.textSnippet = '';
    } //end else

    //Extract and set previewLink, publishedDate, title, thumbnail, and authors.
    if (volumeItem.volumeInfo !== undefined) {

      // if previewLink exists, extract it. Otherwise, extractedVolume.previewLink set to ''.
      volumeItem.volumeInfo.previewLink !== undefined
      ? extractedVolume.previewLink = volumeItem.volumeInfo.previewLink
      : extractedVolume.previewLink = '';

      // if publishedDate exists, extract it. Otherwise, extractedVolume.publishedDate set to ''.
      volumeItem.volumeInfo.publishedDate !== undefined
      ? extractedVolume.publishedDate = volumeItem.volumeInfo.publishedDate
      : extractedVolume.publishedDate = '';

      // if title exists, extract it. Otherwise, extractedVolume.title set to ''.
      volumeItem.volumeInfo.title !== undefined
      ? extractedVolume.title = volumeItem.volumeInfo.title
      : extractedVolume.title = '';

      // if subtitle exists, extract it. Otherwise, extractedVolume.subtitle set to ''.
      volumeItem.volumeInfo.subtitle !== undefined
      ? extractedVolume.subtitle = volumeItem.volumeInfo.subtitle
      : extractedVolume.subtitle = '';

      // if authors exists, extract it. Otherwise, extractedVolume.authors set to [].
      volumeItem.volumeInfo.authors !== undefined
      ? extractedVolume.authors = volumeItem.volumeInfo.authors.map(authorItem => authorItem)
      : extractedVolume.authors = [];

      
      // if imageLinks.thumbnail exists, extract it. Otherwise, extractedVolume.thumbnail set to ''
      volumeItem.volumeInfo.imageLinks !== undefined
      ? (
          volumeItem.volumeInfo.imageLinks.thumbnail !== undefined
          ? extractedVolume.thumbnail = volumeItem.volumeInfo.imageLinks.thumbnail
          : extractedVolume.thumbnail = ''
        )
      : extractedVolume.thumbnail = '';
    } // end if
    else {
      extractedVolume.previewLink = '';
      extractedVolume.publishedDate = '';
      extractedVolume.title = '';
      extractedVolume.subtitle = '';
      extractedVolume.authors = [];
      extractedVolume.thumbnail = ''
    } //end else

    return extractedVolume;
  } // end extractVolumeData

  export default extractVolumeData;