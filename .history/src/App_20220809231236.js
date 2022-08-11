import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import database from './firebase';
import {getDatabase,ref, set, get, child} from "firebase/database";

function saveBook(id, title, author, description, Text) {
  set(ref(database,`${id}`),{
    title: title,
    author: author,
    description : description,
    Text : Text
  });
}

var dbRef = getDatabase().ref('https://goodgeul-default-rtdb.firebaseio.com/');
dbRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      let childData = childSnapshot.val();
      console.dir(childData);
    });
});

let books = [];

function App() {
  return (
    <div className={styles.app}>
      <SideNavBar />
      <MyBooks 
       books={books} 
       saveBook={saveBook} />
    </div>
  );
}

export default App;
