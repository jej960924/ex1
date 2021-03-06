import React from "react";
import './videoview.css';

function Videoview({video}){
  return(
      <div className="viewbox">
        
          <div className="playVideoBox">
          <iframe type="text/html"  className="videoframe" title="비디오플레이어"
            src={`https://www.youtube.com/embed/${video.id}`}
           ></iframe>
          </div>
          <div className="txtcontainer">
            <h2> {video.snippet.title}</h2>
            <h3> {video.snippet.channelTitle}</h3>
            <p className="desc"> 
                {video.snippet.description}
            </p>
          </div>
      </div>
  )

}


export default Videoview;
