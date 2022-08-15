import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import {Outlet, Link, useLocation} from 'react-router-dom';
import database from './services/db_service';
import {ref, set, get, child} from "firebase/database";
import BookContent from './BookContent/BookContent';


// var dbRef = database.ref('https://goodgeul-default-rtdb.firebaseio.com/');
// dbRef.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       let childData = childSnapshot.val();
//       console.dir(childData);
//     });
// });

let books = [];

function App() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  saveBook(id, title, author, description, Text) {
    set(ref(`${database}/${state.userId}`,`${id}`),{
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
        <MyBooks className={styles.bookContent} books={books} saveBook={saveBook}/>
      </div>
      <Outlet/>
    </>
  );
}

export default App;
