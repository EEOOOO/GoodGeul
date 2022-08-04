import React from 'react';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + ' Reaaly'
        this.books = this.props.books;
    }
    title(){
        return this.props.sayHello
    }
    render(){
        return <>
            <h1>{this.title()} <p>{this.conTitle}</p></h1>;
            {this.books.map(({book})=>{
                <h2>{book}</h2>
                //<><h2>{book.id}</h2><h2>{book.title}</h2><h2>{book.author}</h2></>
            })}
        </>
    }
}
export default MyBooks;