import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';
import database from './firebase';
import { ref, push } from "firebase/database";

function saveBook(id, title, author, description, Text) {
  console.log(`i want to save this ${id}, ${title}, ${author}, ${description}, ${Text}`);
  set(ref(database),{
    title: title,
    author: author,
    description : description,
    Text : Text
  });
}

const books = []

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
