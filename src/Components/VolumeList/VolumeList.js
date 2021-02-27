import React from 'react';
import './VolumeList.css';
import Volume from '../Volume/Volume';

// VolumeList
const VolumeList = ( {volumes} ) => {
    return (
        <div className="flex flex-column items-center w-100 volume-list-container bg-light-gray">
            {
                volumes.map( (volume) => {
                    return <Volume volume={volume} key={volume.id} />
                })
            }
        </div>
    );
} // end VolumeList

export default VolumeList;
