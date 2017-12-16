/**
 * Created by lokeshagrawal on 07/05/17.
 */

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// install this package, npm install --save youtube-api-search
// given an api key and search term returns videos that matches search term.
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// console.developers.google.com,  browser key to access youtube videos
const API_KEY = "AIzaSyAZbcHvfb7_T0IZc_822pRwWH1Nk0kVg04";

/*
 // Step 1: Create a new component. This component should produce some HTML.
 // Think of this function as a factory which produces instaces of the actual components that gets
 // rendered to the DOM.
 const App = function() {
    return <div> Hi! </div>;
 }
*/

/*
 // Step 2: Take this component's generated HTML and put it on the page (in the DOM)
 // App is a class, <App /> is an instance of App. You can show this in babel online.
 // second argument tells, where in the DOM do you want to render?
 ReactDOM.render(<App />, document.querySelector('.container'));
*/


/*
 // Step 1: ES6 way of defining a function. Fat arrow
 const App = () => {
    // this reference is slightly different in ES6 way of defining function
    return <div>Hi!</div>
 }
 */

/*
 // Go to the mock of the application and see what all components is needed.
 // We have total of 5 components in this application.
 // Rule: Always make one component per file.

 // 1. Search Bar, -> Go and Build this first
 // 2. Video Detail. Video player and title and descr iption below it
 // 3. Video List,
 // 4. Video Item,
 // 5. App containing all.

 Step 1: Create a new functional component. This component should produce some HTML.
 const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
 }
 */

/*
 // Example on how to use youtube search API
 // Takes in configuration object and a callback function.
 YTSearch({key:API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
 });

 // Create a class based component
 class App extends Component {
    render() {
        return(
            <div>
                <SearchBar/>
            </div>
        );
     }
 }
 */

/*
 // List of videos will update with the search term entered. Data changing over time
 // sounds like a good usecase for using state. So whenever user enters some new search
 // input we need to conduct a new search and set the results of that search on state.
 // Need constructor for this.

 // Change above and manage state inside App for default loading of videos
 class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };

        // Why this component should go and fetch the list of videos from youtube APIs?
        // React recommends Downward data flow. Downwards data flow means, that only the most parent
        // component in the application should be responsible for fetching data, be it from an API or from
        // flux framework or Redux itself.
        // Takes in configuration object and a callback function.

        YTSearch({key:API_KEY, term:'surf_boards'}, function(videos){
            this.setState({videos : videos});
        });
    }

    render(){
        return(
            <div>
                <SearchBar />
            </div>
        );
     }
 }
 */

/*
  // Code with syntactic sugar from ES6
  // Another way of creating a component
  class App extends Component {
      constructor(props) {
          super(props);
          this.state = {videos: []};

          YTSearch({key:API_KEY, term:"surf_ boards"}, (videos) => {
              this.setState({ videos });
          });
      }

      render() {
          return(
              <div>
                  <SearchBar/>
              </div>
          );
      }
  }

/*
    // Jump to VideoList. Now how do we pass videos from this component to the videoList component?
    // Passing data from parent to child component? Passing props
*/

/*
   // Create Video Detail.
*/

/*
 class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos:[],
        };

        this.videoSearch("surfboards")
    }

    videoSearch(term){
        // Takes in configuration object and a callback function.
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({ videos: videos });
        });
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                // should throw an undefined property error when used as props inside videodetail, because at the time of first rendering, before videos gets populated this render will happen.
                // to handle this go ahead and add a check inside videodetail component. This will always happen with react.
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
 }
/*

/*
 Create a new component. This component should produce an HTML
 Code to demonstrate passing of data from parent to child.
 */
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            videos:[],
            selectedVideo: null
        };

        this.videoSearch("surfboards")
    }

    videoSearch(term){
        // Takes in configuration object and a callback function.
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){

        // Debounce can be used to basicaly throttle how often a fn is called
        // Now this new version of inner function "videoSearch" can only be called once only 300 ms.
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return(
            // <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo)  => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Step 2: Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));