/**
 * Created by lokeshagrawal on 07/05/17.
 */

// Purpose of searchbar  component: someone types input in the box, we have to make an API request.
import React, { Component } from 'react';

/**
 * Four important discussions:
 * 1. Exporting Modules
 * 2. Classes
 * 3. State.
 * 4. Controlled component.
 */

/*
    // Two ways to create components:

    // Functional component, or dumb component, that means some info goes inside and some jsx goes out

    const SearchBar = () => {
        return <input/>
    }

    // Class component:
    // 1. Needed when we want component to have some type of internal record keeping ability
    // 2. It is basically a javascript object with properties and methods to it
    // 3. extends gives our search bar bunch of functionalities from React.component class

    class SearchBar extends React.Component {
        render() {
            return <input/>; // React.createElement
        }
    }

    // export the search bar component
    export default SearchBar;

    // demo after this.
*/

/*
    // Handling events in react involves two step process:
    // 1. First we declare an event handler, this event handler function will be run whenever the event occurs.
    // 2. We pass the event handler to the element that we want to monitor for events.

    // Listening to an event: Only class based component can listen to an event

    class SearchBar extends Component {

        // 1. Event Handler always called with event object, describes context ot info about event that occured.
        onInputChange(event){
            // to access value of the input.
            // console.log whole event object for more info on it.
            console.log(event.target.value);
        }

        render() {
            // 2. pass eventhandler to the element we want to monitor
            // onChange is by default present is all HTML elements.
            // Whenever we write JSX and we are using javascript variables, like this.inputChange we wrap it with curly braces.
            // find more events inside react document.
            return <input onChange={this.onInputChange}/>;
         }


    }

    // demo after this
*/

/*
    // ES6 Way using arrow function.

    class SearchBar extends Component {
        render() {
            return <input onChange={(event) => console.log(event.target.value)} />
        }
    }
*/

/*
// STATE: state is a plain javascript object that is used to record and react to user events. Each class
// based component that we define has its own state object. Whenever a component state is changes
// the component immediately re-renders and also forces all of its children to re-render as well.
// Functional components dont have state, only class based have it.

// All JS classes have a special function called constructor, constructor function is the first
// and only function called automatically whenever a new instance of the class is created.

// Constructor is reserved for doing some setup inside our class, like initializing variables and initializing state and stuff like that,

State management
1. Every instance has its own state.
2. Key takeaway: Input changing tells the state hey you need to change as well.
3. In ideal world state should tell input what the current of it should be.

class SearchBar extends Component {

    // initialize state inside constructor method.
    constructor(props) {
        // calling parent (Component) constructor.
        super(props);

        // whenever we use state we initialize it by creating a new object and assigning it to
        // this.state. Remember this is the only place where you should use this.sate = some object. Everywhere else use setState method
        this.state = { term: ''};
    }

    render() {
        return (
            <div>
                // What magic is happening here? Whenever we update the input element, whenever we change the value of it, event handler runs.
                // Inside of event handler, we set the state with the new value of the input. Whenever we update our state, with this.setState, it causes
                // our component to automatically rerender and push all the updated info from the render method into the DOM. Because our render method
                // makes reference to the this.state.term, every time the component rerenders, we get the updated this.state.term in the DOM.
                <input onChange={(event) => this.setState({ term: event.target.value })}/>
                <br/>
                Value of the input: {this.state.term}
            </div>
        );
    }
}
// Demo after this.
*/

/*
Controlled Component: Its value is set by state, so its value changes only when state changes.
Key Takeway: when users types in something, they did not change the value of input instead they just triggered an event
which changes a state and on state change value of input gets changed.
 */

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term : 'starting value'};
    }

    render() {
        return(
            /*A controlled field is a form element like an input whose value is set by the state rather than the other way around.
             In above example, whenever our input changes, it causes the state to be updated. Our input tells the state what it should be.
             But in reality we want something like, state should tell the input what the current value of it should be.*/
            <div className="search-bar">
                <input
                    value = {this.state.term} // This way of assigning value to a component, makes component a controlled component.
                    onChange = {(event) => this.onInputChange(event.target.value)} // comment this line out and show input is not reflected with keystrokes.
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term:term});
        this.props.onSearchTermChange(term);
    }
}

// Advantage of a controlled component:
// We dont say you know hey user changed something, I need to go figure out what the value is, its much more declarative syntax (not imperative), we say
// the value of the input is equal to the state.

export default SearchBar;