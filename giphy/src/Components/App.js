
import React, { Component } from 'react';
import axios from "axios";
import SearchField from "./Components/SearchField";
import GifCard from "./Components/GifCard";
import Trending from "./Components/Trending";
import Random from "./Components/Random";
import "./App.css";


 const API = 'aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loader : false,
            searchText : '',
            gif : {},
        };
    }

    searchGif(searchText) {
        this.setState({
            loader: true
        });
        this.getUrl(searchText, gif => { // callback(myJson)
            const getDetails = {
                image : gif.data.fixed_height_downsampled_url,
                title :  gif.data.title,
                gifUrl : gif.data.url
            }
            this.setState({
                loader : false,
                searchText: searchText,
                gif : getDetails
            });
        })
    }

    getUrl(searchText, callback) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${API}&limit=10`
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
                    onSearch={this.searchGif.bind(this)}
                   
                />
                <GifCard
                    loader={this.state.loader}
                    data={this.state.gif}
                />
               
                <Trending />
                <Random/>
               
            </div>
        );
    }
}

export default App;
