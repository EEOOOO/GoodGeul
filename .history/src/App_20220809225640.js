import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import database from './firebase';
import { ref, set, get, child} from "firebase/database";

function saveBook(id, title, author, description, Text) {
  set(ref(database,`${id}`),{
    title: title,
    author: author,
    description : description,
    Text : Text
  });
}
console.dir(get(child(ref(database),'')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
}));

books = [];

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
