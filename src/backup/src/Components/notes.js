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