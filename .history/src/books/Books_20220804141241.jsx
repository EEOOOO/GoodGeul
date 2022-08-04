import React from 'react';
import Book from '../Book/book';

class Books extends React.Component{
    constructor(props){
        super(props);
        this.books = rhis.props.books;
    }
    render(){
        return (
            <ul>
                {this.books.map((book) => {<Book bookInfo={book}/>})}
            </ul>
        )
    }
}

export default Books;