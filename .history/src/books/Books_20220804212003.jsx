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
                <li>
                    <h3>{this.book['id']}</h3>
                    <h1>{this.book['title']}</h1>
                    <h2>{this.book['author']}</h2>
                </li>
            </ul>
        );
    }
}

export default Books;