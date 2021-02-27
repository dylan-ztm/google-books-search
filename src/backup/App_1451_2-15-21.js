import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import axios from 'axios';
import extractVolumeData from './Utilities/data-handlers';

// App Component
const App = () => {
  const [volumes, setVolumes] = useState([]);

  // handleSubmit function
  const handleSubmit = (event) => {
    const API_KEY = 'AIzaSyBx32JjXooWhklVPNh8sLBhsMLt3w5hWo8';
    const API_URL = 'https://www.googleapis.com/books/v1/volumes';
    let query = '';
    let maxResults = 10;

    axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        maxResults: maxResults,
      }
    })
    .then(response => {
        console.log(response.data);
        setVolumes(response.data.items.map( (volumeItem, index) => {
          const volume = extractVolumeData(volumeItem, index);
          return volume; 
         }) // end items.map
        ); // end setVolumes */
      } // end of response handler function
    ) // end then method.
    .catch(error => {
      console.log(error);
    }); // end catch(error)
  } // end handleSubmit

  if (volumes.length > 0) {
  console.log("EXTRACTED DATA: ", volumes);
  } // END IF
 
  
  return (
    <div className="AppWrapper flex flex-column">
      <Home handleSubmit= {handleSubmit} volumes={volumes}/>
    </div>
  );
} // end App

export default App;