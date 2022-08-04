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
            <p>
            {this.books.map(({book})=>{
                console.dir({book});
                Object.keys(book).map((key)=>{
                    <h1>{book[key]}</h1>
                })
            })}
            </p>
        </>
    }
}
export default MyBooks;