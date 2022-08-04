import React, { Component } from 'react';

function Book({props}){
    return (
        <li>
            <p>{`hey`}</p>
            <h3>{props.book['id']}</h3>
            <h1>{props.book['title']}</h1>
            <h2>{props.book['author']}</h2>
        </li>
    );
}

export default Book;