import React, { Component } from 'react';

class Book extends Component{
    render(){
        console.dir('넌 왜 안 나오니??');
        console.dir(this.props.book);
        return (
            <li>
                <span>{this.props.book['id']}</span>
                <span>{this.props.book['title']}</span>
                <span>{this.props.book['author']}</span>
            </li>
        );
    }
}

export default Book;