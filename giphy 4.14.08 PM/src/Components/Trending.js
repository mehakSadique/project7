import React, { Component } from 'react';
import  './App.css';

const API = 'aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O';
class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs : {data:[]}
        };
    }

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/trending?&api_key=${API}&limit=10`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((result) => {
                this.setState({
                    gifs: result,
                    });
                })
    }

    render() {
        const listItems = this.state.gifs.data.map((item) =>
            <a href={item.url} target="new" key={item.id}>
                <img src={item.images.original.url} width="300" height="300"/>
            </a>
        );
        return (
            <div className="pakageTrending">
                <h1>Top Trending</h1>
                <div className="trending">{listItems}</div>
            </div>
        )
    }
}

export default Trending;
