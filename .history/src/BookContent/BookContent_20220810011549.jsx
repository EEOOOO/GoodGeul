import React, { Component } from 'react';
import styles from './BookContent.module.css';
class BookContent extends Component {
    render() {
        return (
            <div>
                <div className={styles.book}>
                    <div className={styles.bookInfo}>
                        <img src='./public/logo192.png'></img>
                        <div className={styles.bookInformation}>
                            <p>작가: 스콧 영</p>
                            <p>옮긴이: 이한이</p>
                            <p>출판사: 비즈니스북스</p>출판사: 비즈니스북스
                        </div>
                    </div>
                </div>
                <div className={styles.review}>

                </div>
                <div className={styles.bookList}>

                </div>
            </div>
        );
    }
}

export default BookContent;