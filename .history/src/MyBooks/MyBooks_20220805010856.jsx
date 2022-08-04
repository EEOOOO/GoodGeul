import React from 'react';
import Books from '../books/Books';
import styles from './mybooks.module.css';
class MyBooks extends React.Component{
    render(){
        return <div className={styles.myBooks}>
            <header className={styles.mybookHeader}>
                <div className={styles.headerTop}>
                    <input type='text' className={styles.myBookSearch} placeholder={'Search your book'}></input>
                </div>
                <div className={styles.headerBottom}>
                    <h1 clasName={styles.headerTitle}>My books</h1>
                    <form>
                        <select>
                            <option>This Week</option>
                        </select>
                    </form>
                </div>
            </header>
            <Books books={this.props.books}/>
        </div>
    }
}
export default MyBooks;