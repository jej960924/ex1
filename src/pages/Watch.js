import React from 'react';
import '../App.css';
import VideoList from '../components/videolist/VideoList';
import Videoview from '../components/videoview/Videoview';

const Watch = ({videoItems,onVideoClick, selectView, selectedWatch}) => {
    return (
        <div className="content">
             
            <div className='view'> <Videoview video={selectedWatch} /> </div>
           
            <div className='list'>
                    <VideoList 
                    videoItems={videoItems} 
                    onVideoClick={onVideoClick} 
                    display='rowlist'
                    />
            </div>
        </div>     
    )

}

export default Watch;