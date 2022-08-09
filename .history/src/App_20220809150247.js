import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';

const sayHello = 'You can do it';
const books = [
]
function App() {
  return (
    <div className={styles.app}>
      <SideNavBar />
      <MyBooks  sayHello={sayHello} books={books} />
    </div>
  );
}

export default App;
