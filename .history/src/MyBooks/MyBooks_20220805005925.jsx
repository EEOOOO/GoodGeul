import React from 'react';
import Books from '../books/Books';
import styles from './mybooks.module.css';
class MyBooks extends React.Component{
    render(){
        return <div className={styles.myBooks}>
            <header className={styles.mybookHeader}>
                <input type='text' className={styles.myBookSearch} defaultValue={Search book}></input>
            </header>
            <Books books={this.props.books}/>
        </div>
    }
}
export default MyBooks;