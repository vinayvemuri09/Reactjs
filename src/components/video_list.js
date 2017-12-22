import React from 'react';
import ReactDOM from 'react-dom';
import VideoList_item from './videolist_item';
const VideoList=(props)=>{
    const videoListItem=props.videos.map((video)=>{
        return(
            <VideoList_item key={video.id.videoId} video={video}
            onVideoSelect={props.onVideoSelect}/>
        )


    });

        return (
            <div>
                <ul className="col-md-4 list-group">
                    {videoListItem}
                </ul>
            </div>

        );

}
export default VideoList;
