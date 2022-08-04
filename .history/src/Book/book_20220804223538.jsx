import React, { Component } from 'react';
import styles from './book.module.css';
class Book extends Component{
    render(){
        return (
            <li>
                <div className={styles.book}>
                    <p>{this.props.book['title']}</p>
                    <p>{this.props.book['author']}</p>
                </div>
            </li>
        );
    }
}

export default Book;