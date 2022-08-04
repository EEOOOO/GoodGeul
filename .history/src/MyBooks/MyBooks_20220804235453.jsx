import React from 'react';
import Books from '../books/Books';
import styles from './mybooks.module.css';
class MyBooks extends React.Component{
    render(){
        return <div className={styles.mybooks}>
            <input type='text'></input>
            <Books books={this.props.books}/>
        </>
    }
}
export default MyBooks;