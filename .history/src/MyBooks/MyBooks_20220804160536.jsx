import React from 'react';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + ' Reaaly';
        this.books = this.props.books;
    }
    book(){
        result = 
        this.books.map((book)=>{
            Object.keys(book).map((key)=>{
                console.log(book[key]);
            })
            console.log("");
        })
    }
    render(){
        return <>
        <h1>{this.books[0]['id']}</h1>
        <h1>{this.books[0]['title']}</h1>
        <h1>{this.books[0]['author']}</h1>
        </>
    }
}
export default MyBooks;