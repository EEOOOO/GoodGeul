import React from 'react';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + ' Reaaly';
        this.books = this.props.books;
    }
    title(){
        return this.props.sayHello
    }
    render(){
        return <>
            <h1>{this.title()} <p>{this.conTitle}</p></h1>
            {Object.keys(this.books).map(({book})=>{
                {console.dir(book)}
                //<><h2>{book.id}</h2><h2>{book.title}</h2><h2>{book.author}</h2></>
            })}
        </>
    }
}
export default MyBooks;