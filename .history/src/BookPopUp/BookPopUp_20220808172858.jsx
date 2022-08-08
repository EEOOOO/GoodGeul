import React, { Component } from 'react';
import styles from '../BookPopUp/bookpopup.module.css';
import MyEditor from '../myEditor/MyEditor';

// 해당 클래스에서 타이틀만 입력하고 기본 정보 받아오게 할 수 없을까? 고민
// 나중에 book api로 사진커버 받아오는 일도 여기서 색/이미지로 선택형으로 처리하면 좋을텐데.

class BookPopUp extends Component {
    constructor(props){
        super(props);
        this.showPopUp = this.props.showPopUp;
    }
    render() {
        return (
            <div className={styles.bookPopUp}>
                <h1 className={styles.newBookPopUp}>Add New Book</h1>
                <form className={styles.bookPopUpForm}>
                    <label >Title</label>
                    <input type="text"></input>

                    <label>Author</label>
                    <input type="text" className={styles.inputAuthor}></input>

                    <label>summary</label>
                    <input type="text" className={styles.inputSummary}></input>

                    <label>Review or Memo</label>
                    <div className={styles.editor}>
                        <MyEditor />
                    </div>
                </form>
            </div>
        );
    }
}

export default BookPopUp;