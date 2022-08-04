import React from 'react';
class MyBooks extends React.Component{
    constructor(props){
        super(props);
        this.conTitle = this.props.sayHello + ' Reaaly';
        this.books = this.props.books;
    }
    book(){
        this.books.map((book)=>{
                Object.keys(book).map(key=>{
                    <h1>book[key]</h1>
                })
            })
    }
    render(){
        return <>
        {
            this.books.map((book)=>{
                Object.keys(book).map(key=>{
                    <h1>book[key]</h1>
                })
            })
        }
        <h1>{this.books[0]['id']}</h1>
        <h1>{this.books[0]['title']}</h1>
        <h1>{this.books[0]['author']}</h1>
        </>
    }
}
export default MyBooks;