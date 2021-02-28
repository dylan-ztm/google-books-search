import React from 'react';
import Volume from '../Volume/Volume';

// VolumeList
const VolumeList = ( {volumes} ) => {
    return (
        <React.Fragment>
            {
                volumes.map( (volume) => {
                    return <Volume volume={volume} key={volume.id} />
                })
            }
        </React.Fragment>
    );
} // end VolumeList

export default VolumeList;

/* <div className="flex flex-column items-center w-100 volume-list-container bg-washed-red"> */
