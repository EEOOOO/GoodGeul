import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.books = props.books.bind(this);
    }
    render(){
        return (
            <>
                <h1> Hello </h1>
                <h3> this.books</h3>
                <Books books={this.books}/>
            </>
        )
    }
}
export default MyBooks;