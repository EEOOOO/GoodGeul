import React from 'react';
import Book from '../Book/book';

class Books extends React.Component{
    constructor(props){
        super(props);
        this.books = props.books.bind(this);
    }
    render(){
        return (
            <ul>
                this.books.map((item) => {<Book bookInfo={item}/>});
            </ul>
        )
    }
}

export default Books;