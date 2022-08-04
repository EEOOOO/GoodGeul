import React, { Component } from 'react';

class Book extends Component {
    constructor(props){
        super(props);
        this.book = this.props.book;
    }
    render() {
        return (
            <li>
                <h4>{`hey`}</h4>
                <h3>{this.props.book['id']}</h3>
                <h1>{this.book['title']}</h1>
                <h2>{this.book['author']}</h2>
            </li>
        );
    }
}

export default Book;