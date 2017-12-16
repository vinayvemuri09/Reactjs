/**
 * Created by lokeshagrawal on 07/05/17.
 */
import React from 'react';

import VideoListItem from './video_list_item';

// When we use a functional component, props will arrives as an argument to the function.
// In class based component props is availabe anywhere in any method we define as this.props.
const VideoList = (props) => {

    // Second, in javascript don't use for loops like stuff, instead
    // try to use built in iterators, like map
    /*
    const videoItems = props.videos.map((video)=>{
        return (
            <VideoListItem
                video={video}
            />
        );
    });*/

    /*
    const videoItems = props.videos.map((video)=>{
        return (
            <VideoListItem
                // Whenever we render an array of items of the same type
                // react correctly assumes that we are building a list. React
                // has a bunch of logic built into it to optimize the process of rendering
                // a list. It builds a list if it has a id for a particular element and if that
                // element changes, it knows which element it needs to go grab and update.
                // otherwise its going to throw them all away and rerender them all.
                // Key should be consistent and should be unique information, unique to that particular record.
                key={video.etag}
                video={video}
            />
        );
    });*/

    const videoItems = props.videos.map((video)=>{
        return (
            <VideoListItem
                // passing prop down
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        );
    });

    // First create this.
    return (
        /* {props.videos.length} */
        /* React is very intelligent about rendering arrays of items.*/
        <div>
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        </div>
    );
}

export default VideoList;

// How to use Map in JS?
// Without map
/*
var array = [1,2,3];
for(var i=0; i<array.length; i++) {
    some blah blah blah
}
*/


/*
// With map, map is a property of an array.
var array = [1,2,3];
// if we say array.map and pass it in a function it will get called for each of the value in array.
// Below function is going to run for 3 times. array.map will return a new array, where each index will be the
// return value of the function.
array.map(function(number) {return number + 2});
// [2,4,6] output of above. Run in chrome and show.

array.map(function(number) { return 'div' + number + '/div'});
// ["<div>1<div>", "<div>2<div>", <div>3<div>]
*/
