import React, { Component } from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {image: ''};
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
                 <input type="text"
                     onChange ={this.handleChange.bind(this)}
                     onKeyUp = {this.handleKeyUp.bind(this)}
                     placeholder="Search GIF"
                     image={this.state.image}
                  />
            </div>
        );
    }
}

export default SearchField
