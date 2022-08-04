import React, { Component } from 'react';

class Book extends Component{
    render(){
        console.dir('넌 왜 안 나오니??');
        console.dir(this.props.book);
        return (
            <li>
                <p>{this.props.book['id']}</p>
                <p>{this.props.book['title']}</p>
                <p>{this.props.book['author']}</p>
            </li>
        );
    }
}

export default Book;