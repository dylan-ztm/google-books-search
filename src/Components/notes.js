/* handleSubmit method as of 7:00 PM, 2-20-2021
// handleSubmit method
    handleSubmit = (event) => {
        const API_KEY = 'AIzaSyBx32JjXooWhklVPNh8sLBhsMLt3w5hWo8'; // *** Need to set up an environment variable. ***
        const API_URL = 'https://www.googleapis.com/books/v1/volumes'; // *** Need to set up an environment variable. ***
        const {query, maxResults} = this.state;
        const {setVolumes, clearVolumes} = this.props;
        
        clearVolumes(); // Need to find a better place for this.
        axios.get(API_URL, {
          params: {
            key: API_KEY,
            q: query,
            maxResults: maxResults,
          }
        })
        .then(response => {
            console.log(response.data);
            const volumeItems = response.data.items.map( (volumeItem, index) => {
              const volume = extractVolumeData(volumeItem, index);
              return volume; 
             }); // end items.map
             setVolumes(volumeItems);
          } // end of response handler function
        ) // end then method.
        .catch(error => {
          console.log("WARNING! FAILED HTTP GET: ", 
          error);
        }); // end catch(error)
        event.preventDefault();
      } // end handleSubmit
  */

  /* Original .then() method in handleSubmit. 8:25 PM, 2-2021
   /*
            console.log(response.data);
            const volumeItems = response.data.items.map( (volumeItem, index) => {
              const volume = extractVolumeData(volumeItem, index);
              return volume; 
             }); // end items.map
             setVolumes(volumeItems); */


/* findProperty may need to be used later.
const findProperty = (item, property) => {
    console.log(item);
    return item[`${property}`] !== undefined
  }
*/

/* first axiosTest function.  1-31-2021
const axiosTest = (URL) => {

    // create a variable to store the axios request
    const promise = axios.get(URL, {
      params: {
        key: 'AIzaSyBx32JjXooWhklVPNh8sLBhsMLt3w5hWo8',
        q: 'javascript',
        maxResults: 1,
      }
    });

    // create a variable to store response.data
    const dataPromise = promise.then( response => response.data);
    return dataPromise;
  }

  axiosTest(API_URL)
  .then((data) => {
    console.log(data);
    setVolumeTitle(data.items[0].volumeInfo.title);
  });
*/