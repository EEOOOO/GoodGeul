import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    constructor({props}){
        super(props);
        console.log({props});
    }
    render(){
        const {books} = this.props.books;
        console.log({books});
        return (
            <>
                <h1> Hello </h1>
                <h3> this.books</h3>
                {Object.entries({books}).map((book) => <h3 key={book.id}>{`${book}`}</h3>)} 
                {/*<Books books={this.props.books}/>*/}
            </>
        )
    }
}
export default MyBooks;