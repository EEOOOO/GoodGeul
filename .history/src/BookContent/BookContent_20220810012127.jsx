import React, { Component } from 'react';
import styles from './bookcontent.module.css';

import Books from '../books/Books';
class BookContent extends Component {
    render() {
        return (
            <div>
                <div className={styles.book}>
                    <div className={styles.bookInfo}>
                        <img src='./logo192.png'></img>
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
                    <p>
                        인생을 한층 더 업그레이드하고 싶은 사람들을<br/>
                        위한 초고속, 고강도 지식 습득법 '울트라러닝'!<br/>
                        1년이면 4개 국어 말하기, tv퀴즈쇼 1등, <br/>
                        다빈치급 그림 그리기, 미적분 정복도 가능하다!
                    </p>
                </div>
                <Books/>   
            </div>
        );
    }
}

export default BookContent;