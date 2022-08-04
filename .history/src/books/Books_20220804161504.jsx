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
            </ul>
        );
    }
}

export default Books;