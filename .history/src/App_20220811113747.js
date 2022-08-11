import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import {BrowserRouter, Routes,Route, Link} from 'react-router-dom';
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
    <BrowserRouter>
      <div className={styles.app}>
        <SideNavBar />
        <Routes>
          <Route 
          path="../mybooks/MyBooks.jsx"
          element={<MyBooks 
                  books={books} 
                  saveBook={saveBook}/>}/>
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
