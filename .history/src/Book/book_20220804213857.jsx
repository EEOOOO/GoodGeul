import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <li>
                <h4>{`hey`}</h4>
                <h3>{this.props.book['id']}</h3>
                <h1>{this.props.book['title']}</h1>
                <h2>{this.props.book['author']}</h2>
            </li>
        );
    }
}

export default Book;