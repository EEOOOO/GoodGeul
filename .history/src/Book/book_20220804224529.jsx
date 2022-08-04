import React, { Component } from 'react';
import styles from './book.module.css';
class Book extends Component{
    render(){
        return (
            <li>
                <div className={styles.book}>
                    <p className={styles.title}>{this.props.book['title']}</p>
                    <div className={styles.hor-line}></div>
                    <p className={styles.author}>{this.props.book['author']}</p>
                </div>
            </li>
        );
    }
}

export default Book;