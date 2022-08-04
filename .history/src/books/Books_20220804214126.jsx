import React, { Component } from 'react';
import Book from '../book/Book.jsx';
class Books extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.books.map((book)=>{  
                        <Book book={book}/>
                        <li>{book}</li>
                    })
                }
                <li>{'why..'}</li>
            </ul>
        );
    }
}

export default Books;