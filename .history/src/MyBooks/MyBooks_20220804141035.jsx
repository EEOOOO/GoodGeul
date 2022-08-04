import React from 'react';

class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.books = this.props.books.bint(this);
    }
    render(){
        return (
            <>
                <h1> Hello </h1>
                <h3> this.books</h3>
                //<Books books={books}/>
            </>
        )
    }
}
export default MyBooks;