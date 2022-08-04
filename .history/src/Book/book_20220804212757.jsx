import React, { Component } from 'react';

class Book extends Component {
    constructor(props){
        super(props);
        console.dir(props);
        this.book = this.props.book;
    }
    render() {
        return (
            <li>
                {console.dir(this.book)}
                <h3>{this.book['id']}</h3>
                <h1>{this.book['title']}</h1>
                <h2>{this.book['author']}</h2>
            </li>
        );
    }
}

export default Book;