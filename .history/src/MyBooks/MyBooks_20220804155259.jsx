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
            {this.books.map((book)=>{
                console.dir(book);
                <h2>{'kkf'}</h2>
                Object.keys(book).map(({id,title,author})=>{
                    console.log({book[{id}]});
                    <h2>{'kk'}</h2>
                })
            })}
            </p>
        </>
    }
}
export default MyBooks;