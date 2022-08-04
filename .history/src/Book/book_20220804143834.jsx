import React, { Component } from 'react';

class Book extends Component {
    constructor({props}){
        super(props);
        this.book = this.props.book;
    }
    
    render() {
        const id = this.book[0];
        const title = this.book[1];
        const author = this.book[2];
        console.log(id, title, author);
        return (
            <li>
                <h1>{this.book}</h1>
                <p>{id}</p>
                <h1>{title}</h1>
                <h3>{author}</h3>
            </li>
        );
    }
}

export default Book;