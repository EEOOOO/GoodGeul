import React, { Component } from 'react';
import styles from './book.module.css';
class Book extends Component{
    render(){
        return (
            <li>
                <div className={styles.book}>
                    <div className={styles.bookTop}>
                        <p className={styles.title}>{this.props.book['title']}</p>
                        <p className={styles.description}>{this.props.book['description']}</p>
                    </div>
                    <p className={styles.author}>{this.props.book['author']}</p>
                </div>
            </li>
        );
    }
}

export default Book;