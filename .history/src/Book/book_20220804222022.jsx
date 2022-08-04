import React, { Component } from 'react';

class Book extends Component{
    render(){
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