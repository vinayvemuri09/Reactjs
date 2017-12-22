import React from 'react';
const VideoDetail=(props)=>{
    if(!props.video){
        return(
            <p>loading....</p>
        );
    }
    const url='https://www.youtube.com/embed/'+props.video.id.videoId;
    console.log("props"+props);
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">

              <iframe allowFullScreen={"allowFullScreen"} src={url}/>
            </div>
          <div className="details">
              <p>{props.video.snippet.title}</p>

          </div>
      </div>
    );
}
export  default VideoDetail;