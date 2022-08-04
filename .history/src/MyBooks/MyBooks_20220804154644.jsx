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
            {this.books.map((book)=>{
                Object.keys(book).map((id,title,author)=>{
                    {console.log({book[id]});}
                })
            })}
        </>
    }
}
export default MyBooks;