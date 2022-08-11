import React, { Component } from 'react';
import styles from './bookcontent.module.css';
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
                            <p>출판사: 비즈니스북스</p>
                        </div>
                    </div>
                    <div className={styles.bookTitleAndDescription}>
                        <h2>울트라러닝</h2>
                        <p>
                        짧은 시간에 가장 완벽한 지식을 얻는 9단계 초학습법<br/>
                        세계 0.1%가 지식을 얻는 비밀
                        </p>
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