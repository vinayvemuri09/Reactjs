import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const VideoList_item=(props)=>{
const video=props.video;

        return (
            <li onClick={()=>{props.onVideoSelect(video)}}>
                <img src={video.snippet.thumbnails.default.url}/>

                    {video.snippet.title}
            </li>

        );

}
export default VideoList_item;