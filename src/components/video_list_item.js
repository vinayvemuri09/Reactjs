/**
 * Created by lokeshagrawal on 07/05/17.
 */
import React from 'react';

/*
const VideoListItem = (props) => {
    const video = props.video;
    return(
        <li>
            Video
        </li>
    );
}
*/

// ES 6 way, it says an object has a property called video please grab that and declare a new variable called video.
const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    return(
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;