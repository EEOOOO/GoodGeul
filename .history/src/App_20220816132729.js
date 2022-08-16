import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import {Outlet,  useLocation} from 'react-router-dom';
import database from './services/db_service';
import {ref, set, get, child} from "firebase/database";
import { useState } from 'react';

function App() {
  const location = useLocation();
  const userId = location.state.userId;
  const [books, setBooks] = useState([]);

  let dbRef = ref(database);
  const getData = (books) => {get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      let data = snapshot.val();
      Object.keys(data).forEach(key => {
        books.push(data[key]);
      })
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  })};

  getData(books);
  
  console.log(books);

  const updateBookList = (book) => {
    const newBookList = [...books, book];
    setBooks({newBookList});
    const {id, title, author, description} = book
    saveBook(id, title, author, description, 'Text')
  }
  updateBookList('');

  const saveBook = (id, title, author, description, Text) => {
    set(ref(database,`users/${userId}/`+ id),{
      id: id,
      title: title,
      author: author,
      description : description,
      Text : Text
    });
  }

  return (
    <>
      <div className={styles.app}>
        <SideNavBar />
        <MyBooks 
        className={styles.bookContent} 
        books={books} 
        saveBook={saveBook}
        updateBookList={updateBookList}
        />
      </div>
      <Outlet/>
    </>
  );
}

export default App;
