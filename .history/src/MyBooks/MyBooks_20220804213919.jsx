import React from 'react';
import Books from '../books/Books';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + ' Reaaly';
        this.books = this.props.books;
        console.dir(this.books);
    }
    
    render(){
        return <Books books={this.props.books}/>
    }
}
export default MyBooks;