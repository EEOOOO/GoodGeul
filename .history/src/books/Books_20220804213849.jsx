import React, { Component } from 'react';
import Book from '../book/Book.jsx';
class Books extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.books.map((book)=>{             
                        console.dir(book);
                        <Book book={book}/>
                    })
                }
            </ul>
        );
    }
}

export default Books;