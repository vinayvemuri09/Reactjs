import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const VideoList_item=(props)=>{
const video=props.video;

        return (
            <li onClick={()=>{props.onVideoSelect(video)}}>


                <div className="video-list media">
                    <div className="media-left">
                        <img src={video.snippet.thumbnails.default.url}/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>

        );

}
export default VideoList_item;


