import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import {Link} from './react-router-dom';
import database from './firebase';
import {ref, set, get, child} from "firebase/database";
import BookContent from './BookContent/BookContent';

function saveBook(id, title, author, description, Text) {
  set(ref(database,`${id}`),{
    title: title,
    author: author,
    description : description,
    Text : Text
  });
}

// var dbRef = database.ref('https://goodgeul-default-rtdb.firebaseio.com/');
// dbRef.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       let childData = childSnapshot.val();
//       console.dir(childData);
//     });
// });

let books = [];

function App() {
  return (
    <>
      <div className={styles.app}>
        <SideNavBar />
        <MyBooks 
        books={books} 
        saveBook={saveBook} />
      </div>
      <div className={styles.bookContent}>

      <Link to="./src/BookContent.BookContent.jsx">BookContent</Link>
      </div>
    </>
  );
}

export default App;
