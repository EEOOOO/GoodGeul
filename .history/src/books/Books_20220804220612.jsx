import React, { Component } from 'react';
import Book from '../book/Book';
class Books extends Component {
    render() {
        return (
            <ul>
                {this.props.books.map((book)=>{ 
                        return <Book book={book}/>
                })}
                <li>{'why..'}</li>
            </ul>
        );
    }
}

export default Books;