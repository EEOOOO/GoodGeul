import React from 'react';
import Books from '../books/Books';
import styles from './mybooks.module.css';
class MyBooks extends React.Component{
    handleTextSubmit=()=>{
        console.dir(this.props.myEditor.state.editorState);
        //this.props.myEditor.onChange(this.props.myEditor.status.);
    }
    handleNewBookClicked = () =>{

    }
    render(){
        return <div className={styles.myBooks}>
            
            <header className={styles.myBooksHeader}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <input type='text' className={styles.myBookSearch} placeholder={'Search your book'}></input>
                    </div>
                    <div className={styles.headerTopRight}>
                        <span>🔔</span>
                        <button className={styles.newBookButton} onClick={handleNewBookBtnClicked}>new Book</button>
                    </div>
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
            <div className={styles.myBooksBody}>
                <Books books={this.props.books}/>
                {/* <div className={styles.textEditor}>
                    {this.props.myEditor}
                    <button onClick={this.handleTextSubmit}>submit</button>
                </div> */}
            </div>
            
        </div>
    }
}
export default MyBooks;