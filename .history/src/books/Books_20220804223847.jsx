import React, { Component } from 'react';
import Book from '../book/Book';
import styles from './books.module.css'
class Books extends Component {
    render() {
        return (
            <ul className={styles.bookList}>
                {this.props.books.map((book)=>{ 
                    const key = book['id'];
                    return <Book book={book} key={key}/>
                })}
            </ul>
        );
    }
}

export default Books;