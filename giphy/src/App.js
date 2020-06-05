
import React, { Component } from 'react';
import axios from "axios";
import SearchField from "./Components/SearchField";
import GifCard from "./Components/GifCard";
import Trending from "./Components/Trending";

import Random from "./Components/Random";



 const API_GIPHY = 'aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : false,
            searchText : '',
            gif : {},
        };
    }

    search(searchText) {
        this.setState({
            loader: true
        });
        this.getUrl(searchText, gif => { // callback(myJson)
            const getDetails = {
                image : gif.data.fixed_height_downsampled_url,
                title :  gif.data.title,
                gifURL : gif.data.url
            }
            this.setState({
                loader : false,
                searchText: searchText,
                gif : getDetails
            });
        })
    }

    getUrl(searchText, callback) {
        const url = `http://api.giphy.com/v1/gifs/random?&tag=${searchText}&api_key=${API_GIPHY}&limit=10`
        fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(myJson => callback(myJson))
    }

    render() {
        return (
            <div className="container">
                <h1 className="inscApp">The GIF Search </h1>
                <SearchField
                    onSearch={this.search.bind(this)}
                />
                <GifCard
                    loader={this.state.loader}
                    data={this.state.gif}
                />
               
                <Trending />
                <Random
                onSearch={this.search.bind(this)}
                This is Random/>
                 <GifCard
                    loader={this.state.loader}
                    data={this.state.gif}
                />
               
               
            </div>
        );
    }
}

export default App;
