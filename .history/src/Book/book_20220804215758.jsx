import React, { Component } from 'react';

class Book extends Component {

    render() {
        console.log('왜 안 되는데');
        return (
            <li>
                <p>{`hey`}</p>
                <h3>{this.props.book['id']}</h3>
                <h1>{this.props.book['title']}</h1>
                <h2>{this.props.book['author']}</h2>
            </li>
        );
    }
}

export default Book;