import React, { Component } from 'react';
import Book from '../Book/book';
class Books extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.books.map((book)=>{  
                        <Book book={book}/>
                    })
                }
                <li>{'why..'}</li>
            </ul>
        );
    }
}

export default Books;