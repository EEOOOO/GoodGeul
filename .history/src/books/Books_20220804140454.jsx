import React from 'react';
import Book from '../Book/book';

class Books extends React.Component{
    constructor(props){
        this.books = props.books.bind(this);
    }
    render(){
        return (
            <ul>
                this.books.map((item)=>{
                    <li>
                        <Book bookInfo={item}/>
                    </li>
                })
            </ul>
        )
    }
}

export default Books;