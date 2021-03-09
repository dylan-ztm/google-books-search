import React, { Component } from 'react';
import '../../Components/MainContent.css';
import MainHeader from '../MainHeader/MainHeader';
import SearchForm from '../SearchForm/SearchForm';
import VolumeList from '../VolumeList/VolumeList';
import NoResultsFound from '../NoResultsFound/NoResultsFound';
import Tagline from '../Tagline/Tagline';

const HEADER_TEXT       = 'Search Google Books';
const TAGLINE_TEXT      = 'One book can change your life.';
const INITIAL_STATE = {
    volumes: [],
    searchErrorFound: false,
};

// Home Page
class Home extends Component {
    state = INITIAL_STATE;

     // handleSearchErrorFound
     handleSearchErrorFound = () => {
         this.setState(state => {
             let {searchErrorFound} = this.state;
             searchErrorFound = !(searchErrorFound);
             console.log("searchErrorFound: ", searchErrorFound);

             return {
                searchErrorFound,
             }
         })

     } // end handleSearchErrorFound

     // clearVolumes
     clearVolumes = () => {
        this.setState( {
            volumes: []
        });
    } // end clearVolumes

    // setVolumes
    setVolumes = (volumeItems) => {
        let {searchErrorFound} = this.state;

        if (searchErrorFound) {
            this.setState(state => {
                searchErrorFound = !(searchErrorFound);
                console.log("searchErrorFound: ", searchErrorFound);
                return {
                    searchErrorFound,
                }
            })
        } // end if
        
        if (this.state.volumes.length === 0) {
            this.setState(state => {
                const volumes = state.volumes.concat(volumeItems);

                return {
                    volumes,
                }
              });
        } else {
            this.clearVolumes();
            this.setState(state => {
                const volumes = state.volumes.concat(volumeItems);

                return {
                    volumes,
                }
              });
        } // end else
    } // end setVolumes

    render() {
        const setVolumes                  = this.setVolumes;
        const handleSearchErrorFound      = this.handleSearchErrorFound;
        const {volumes, searchErrorFound} = this.state;

        console.log("Extracted Volumes: ", this.state.volumes); // REMOVE
        
        return (
            <div className="MainContentWrapper flex flex-column w-100 items-center">
                    <MainHeader headerText={HEADER_TEXT} />
                    <SearchForm 
                            setVolumes={setVolumes} 
                            handleSearchErrorFound={handleSearchErrorFound} 
                    />
                    <Tagline taglineText={TAGLINE_TEXT} />
                
                    {
                        searchErrorFound === true
                        ? <NoResultsFound />
                        : <VolumeList volumes={volumes} />
                    }
            </div>
        );
    } // end render
} // end Home

export default Home;
