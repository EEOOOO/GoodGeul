import React from 'react';
import Books from '../books/Books';
import styles from './mybooks.module.css';
class MyBooks extends React.Component{
    render(){
        return <div className={styles.myBooks}>
            <header className={styles.mybookHeader}>
                <div className={styles.headerTop}>
                    <input type='text' className={styles.myBookSearch} placeholder={'Search your book'}></input>
                    <span>🔔</span>
                    <button className={styles.newBookButton}>new Book</button>
                </div>
                <div className={styles.headerBottom}>
                    <h1 className={styles.headerTitle}>My books</h1>
                    <form>
                        <select className={styles.selectInput}>
                            <option>This Month</option>
                            <option>This Year</option>
                            <option>All</option>
                        </select>
                    </form>
                </div>
            </header>
            <Books books={this.props.books}/>
        </div>
    }
}
export default MyBooks;