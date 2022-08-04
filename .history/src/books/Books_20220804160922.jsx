import React, { Component } from 'react';
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
                        <li><Book book={book}/></li>
                    })
                }
            </ul>
        );
    }
}

export default Books;