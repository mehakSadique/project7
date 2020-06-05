import React, { Component } from 'react';

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        const searchText = event.target.value;
        this.setState({
            value: searchText
        });
        if(searchText.length > 2) {
            this.props.onSearch(searchText)
        }
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchText)
        }
    }

    render() {
        return (
            
            <div className="search">
                 <h1>This is Random</h1>
                 <input type="text"
                     onChange ={this.handleChange.bind(this)}
                     onKeyUp = {this.handleKeyUp.bind(this)}
                     placeholder="Random GIF"
                     value={this.state.value}
                  />
                 
            </div>
        );
    }
}

export default Random
