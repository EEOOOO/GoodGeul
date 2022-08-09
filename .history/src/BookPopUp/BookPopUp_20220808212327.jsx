import React, { Component } from 'react';
import styles from '../BookPopUp/bookpopup.module.css';
import MyEditor from '../myEditor/MyEditor';

// 해당 클래스에서 타이틀만 입력하고 기본 정보 받아오게 할 수 없을까? 고민
// 나중에 book api로 사진커버 받아오는 일도 여기서 색/이미지로 선택형으로 처리하면 좋을텐데.

class BookPopUp extends Component {
    constructor(props){
        super(props);
        this.showPopUp = this.props.showPopUp;
        this.state = {
            id:'',
            title:'',
            author:'',
            description:'',
        }
        this.updateBook = this.props.updateBookList.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.updateBook(this.state);
    }
    render() {
        return (
            <div className={styles.bookPopUp}>
                <h1 className={styles.bookPopUpTitle}>Add New Book</h1>
                <form className={styles.bookPopUpForm}>
                    <label >Title</label>
                    <input type="text" value={this.state.title} name='title' onChange={this.handleChange}></input>

                    <label>Author</label>
                    <input type="text" className={styles.inputAuthor} name='author'  value={this.state.author} onChange={this.handleChange}></input>

                    <label>summary</label>
                    <input type="text" className={styles.inputDescription} name='description' value={this.state.description} onChange={this.handleChange}></input>

                    <label>Review or Memo</label>
                    <div className={styles.editor}>
                        <MyEditor />
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        );
    }
}

export default BookPopUp;