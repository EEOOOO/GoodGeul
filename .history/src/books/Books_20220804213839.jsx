import React, { Component } from 'react';
import Book from '../book/Book.jsx';
class Books extends Component {
    render() {
        return (
            <ul>
                {
                    this.books.map((book)=>{             
                        console.dir(book);
                        <Book book={book}/>
                    })
                }
                <li>
                    <h3>{this.books[2]['id']}</h3>
                    <h1>{this.books[2]['title']}</h1>
                    <h2>{this.books[2]['author']}</h2>
                </li>
            </ul>
        );
    }
}

export default Books;