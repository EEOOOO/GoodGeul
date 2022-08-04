import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    constructor({props}){
        super(props);
    }
    render(){
        return (
            <>
                <h1> Hello </h1>
                <h3> this.books</h3>
                <h3>{this.props.books}</h3>
                <Books books={this.props.books}/>
            </>
        )
    }
}
export default MyBooks;