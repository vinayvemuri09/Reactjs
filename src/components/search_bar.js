import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            term: ''
        }
        props.onChangeSearchTerm(this.state.term);

    }

    onInputchange(term) {
        console.log(term);
        this.setState({term});
        this.props.onChangeSearchTerm(term);
    }

    render() {
        return (
            <div>
                <input value={this.state.term} onChange={(event) => this.onInputchange(event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;
