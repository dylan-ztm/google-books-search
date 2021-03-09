import React, { Component } from 'react';
import './SearchForm.css';
import axios from 'axios';
import extractVolumeData from '../../Utilities/data-handlers';

const INITIAL_QUERY_STATE = '';
const INITIAL_STATE = {
    query: INITIAL_QUERY_STATE,
    maxResults: 40,
}

// SearchForm
class SearchForm extends Component {
    state = INITIAL_STATE;

    // handleInputChange
    handleInputChange = (event) => {
      const {name, value} = event.target;

      this.setState( {
        [name]: value
      });
      
    } // end handleInputChange

    // handleSubmit method
    handleSubmit = () => {
        const API_KEY = 'AIzaSyBx32JjXooWhklVPNh8sLBhsMLt3w5hWo8'; // *** Need to set up an environment variable. ***
        const API_URL = 'https://www.googleapis.com/books/v1/volumes'; // *** Need to set up an environment variable. ***
        const {query, maxResults} = this.state;
        const {setVolumes, handleSearchErrorFound} = this.props;

        // processResponse function
        const processResponse = (response) => {
          let volumeItems = [];

          if (response.data.items === undefined) {
            handleSearchErrorFound();
           return;
          } else {
            volumeItems = response.data.items.map( (volumeItem, index) => {
              const volume = extractVolumeData(volumeItem, index);
              return volume; 
             }); // end items.map
             setVolumes(volumeItems);
             return;
          }
        } // end processResponse function
        
        axios.get(API_URL, {
          params: {
            key: API_KEY,
            q: query,
            maxResults: maxResults,
          }
        })
        .then(response => processResponse(response)
        ) // end then method.
        .catch(error => {
          console.log("WARNING! FAILED HTTP GET REQUEST: ", 
          error);
        }); // end catch
      } // end handleSubmit

      // validateUserInput
      validateUserInput = (event) => {
        const {query} = this.state;

        if (query !== INITIAL_QUERY_STATE) {
          this.handleSubmit();
        } // end if
        event.preventDefault();
      } // end validateUserInput

    render() {
      const {query} = this.state;
      const {validateUserInput, handleInputChange} = this;
        return (
            <React.Fragment>
                <form className="form-wrapper flex justify-around items-center w-75" onSubmit={validateUserInput}>
                        <input type="text" name="query" value={query} onChange={handleInputChange} />
                        <input type="submit" value="Search" />
                </form>
            </React.Fragment>
        );
    } // end render
} // end SearchForm

export default SearchForm;