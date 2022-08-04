import React, { Component } from 'react';
import Book from '../book/Book';
class Books extends Component {
    render() {
        return (
            <ul>
                {this.props.books.map((book)=>{ 
                    const key = book['id'];
                    return <Book book={book} key={key}/>
                })}>
            </ul>
        );
    }
}

export default Books;