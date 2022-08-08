import React, { Component } from 'react';
import styles from '../addBookPopUp/addbookpopup.module.css';
import MyEditor from '../MyEditor';
class AddBookPopUp extends Component {
    render() {
        return (
            <form>
                <label >Title</label>
                <input type="text"></input>

                <label>Author</label>
                <input type="text" className={styles.inputAuthor}></input>

                <label>summary</label>
                <input type="text" className={styles.inputSummary}></input>

                <label>Review or Memo</label>
                <MyEditor />
            </form>
        );
    }
}

export default AddBookPopUp;