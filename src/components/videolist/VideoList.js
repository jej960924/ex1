import React from "react";
import Video from "../video/Video";
import './videolist.css';

function VideoList({videoItems,onVideoClick,display,search}){
    
    return(
        <ul className="videolist">
        {   
           videoItems.map(videoItem => (
             
                <Video 
                    videoItem={videoItem}
                    key={videoItem.etag} 
                    onVideoClick={onVideoClick} 
                    display={display}
                    search={search}
                  />
                
            ))

        }
       
    </ul>
    )
}
export default VideoList;