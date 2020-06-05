
import React, { Component } from 'react';
import axios from "axios";



const LOADER = `https://media0.giphy.com/media/l0HlTy9x8FZo0XO1i/200w.webp`;

class GifCard extends Component {

    handleLoader() {
        const flag = this.props.loader;
        const setLoader = flag ? LOADER : this.props.data.image;
        return setLoader
    }

    render() {
        return (
            <div className="gif">
                <h3>{this.props.data.title}</h3>
                <a href={this.props.data.gifUrl} target="new">
                    <img src={this.handleLoader()}/>
                </a>
            </div>
        );
    }
}

export default GifCard