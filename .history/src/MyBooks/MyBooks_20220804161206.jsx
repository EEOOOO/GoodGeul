import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + ' Reaaly';
        this.books = this.props.books;
    }
    
    render(){
        return <Books books={this.books}/>
    }
}
export default MyBooks;