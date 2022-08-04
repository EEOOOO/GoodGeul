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
            {Object.keys(this.books).map(({id, title, author})=>{
                
                <><h2>{id}</h2><h2>{title}</h2><h2>{author}</h2></>
            })}
        </>
    }
}
export default MyBooks;