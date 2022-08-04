import React, { Component } from 'react';
import Book from '../book/Book.jsx';
class Books extends Component {
    constructor(props){
        super(props);
        this.books = this.props.books;
    }
    render() {
        return (
            <ul>
                {
                    this.books.map((book)=>{
                        <Book book={book}/>
                    })
                }
                <li>{this.books[0]['id']}</li>
            </ul>
        );
    }
}

export default Books;