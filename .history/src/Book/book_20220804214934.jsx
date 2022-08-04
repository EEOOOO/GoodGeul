import React, { Component } from 'react';

class Book extends Component {

    render() {
        const books = [
            {
              id:1,
              title:'one',
              author:'a'
            },
            {
              id:2,
              title:'two',
              author:'b'
            },
            {
              id:3,
              title:'three',
              author:'c'
            }
          ]
        return (
            <li>
                <p>{`hey`}</p>
                <h3>{books[0]['id']}</h3>
                <h1>{books[0]['title']}</h1>
                <h2>{books[0]['author']}</h2>
            </li>
        );
    }
}

export default Book;