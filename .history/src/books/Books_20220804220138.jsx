import React, { Component } from 'react';
import Book from '../book/Book';
class Books extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.books.map((book)=>{ 
                        {console.dir(book);}
                        <li>{book['id']}</li> 
                        //<Book book={book}/>
                    })
                }
                <li>{'why..'}</li>
            </ul>
        );
    }
}

export default Books;