import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    render(){
        const {books} = this.props.books;
        return (
            <>
                <h1> Hello </h1>
                <h3> this.books</h3>
                {{books}.entries.map((book) => <h3 key = {book.id}>{book}</h3>)} 
                {/*<Books books={this.props.books}/>*/}
            </>
        )
    }
}
export default MyBooks;