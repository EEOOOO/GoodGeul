import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import {Outlet,  useLocation} from 'react-router-dom';
import database from './services/db_service';
import {ref, set, onValue} from "firebase/database";
import BookContent from './BookContent/BookContent';


var dbRef = ref(database, 'https://goodgeul-default-rtdb.firebaseio.com/');
onValue(dbRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

//let books = [];

function App() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const saveBook = (id, title, author, description, Text) => {
    set(ref(database,'users/'+`${state.userId}/`+ id),{
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
