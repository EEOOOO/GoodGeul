import React, { Component } from 'react';

class Book extends Component {
    constructor(props){
        super(props);
        this.book = this.props.book;
    }
    render() {
        return (
            <>
                <h3>{this.book['id']}</h3>
                <h1>{this.book['title']}</h1>
                <h2>{this.book['author']}</h2>
            </>
        );
    }
}

export default Book;