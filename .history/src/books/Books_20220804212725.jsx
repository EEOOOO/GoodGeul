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
                        //console.dir(book);
                        <Book book={this.book}/>
                    })
                }
                <li>
                    <h3>{this.books[0]['id']}</h3>
                    <h1>{this.books[0]['title']}</h1>
                    <h2>{this.books[0]['author']}</h2>
                </li>
            </ul>
        );
    }
}

export default Books;