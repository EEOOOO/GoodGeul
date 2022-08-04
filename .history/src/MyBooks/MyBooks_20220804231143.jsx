import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    render(){
        return <>
        <Books books={this.props.books}/>

        </>
    }
}
export default MyBooks;