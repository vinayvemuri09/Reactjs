/**
 * Created by lokeshagrawal on 07/05/17.
 */
import React from 'react';

// talk why this is a functional component.
const VideoDetail = (props) => {
    if(!props.video){
        return (
            <div> Loading...</div>
        );
    }

    const videoId = props.video.id.videoId;

    // console.log(videoId); example: T7jC3LDlLi8,
    // const url = 'https://www.youtube.com/embed/' + videoId;

    // Introduce template string, backtick
    const url = `https://www.youtube.com/embed/${videoId}`;

    // first make this.
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{props.video.snippet.title}</div>
                <div>{props.video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;