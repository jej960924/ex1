import React from "react";
import './video.css';
import {Link} from 'react-router-dom';
import * as common from '../../common';
const Video = ({videoItem,onVideoClick,display,search})=>{
    
    const container = 'container';
    const displayClass = display === 'rowlist' ? 'list-h' : 'list-v' ; 
 
    return(
        <li className={`${container} ${displayClass} ${search? 'search' : ''}`}>
            <Link to="/watch">
            <div className="video" onClick={()=>onVideoClick(videoItem)}>
                    <img className="thumbnail"
                        src={videoItem.snippet.thumbnails.medium.url}
                        alt="video thumbnail"
                    />
                    <div className="metadata">
                        <div className="channelImg">
                            <img className="channelImg-thum"
                            src={videoItem.snippet.thumbnails.default.url}
                            alt="video thumbnail"
                            />
                        </div>
                        <div>
                            <p className="title">{videoItem.snippet.title}</p>
                            <p className="channel">{videoItem.snippet.channelTitle}</p>  
                            <p className="publishDate">{common.publishDate(videoItem.snippet.publishedAt)}</p> 
                            {!search && <p className="viewNum">댓글 {common.numberWithCommas(videoItem.statistics.commentCount)}개 • 
                            <span className='viewCountAndDate'>{`조회수 ${common.countConverter(videoItem.statistics.viewCount)}회`} </span>
                            </p>}
                           {search && <div className='description}'>{videoItem.snippet.description}</div>}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}
export default Video;


/* 
<p className="viewNum">댓글 {common.numberWithCommas(videoItem.statistics.commentCount)}개</p>

&& || 단축평가
 false && 값 => false 
 true && 값  => 값 
 값 && true => true 
 값1 && 값2 => 값2 
*/


                      