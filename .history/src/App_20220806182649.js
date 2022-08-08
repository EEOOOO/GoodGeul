import styles from './app.module.css';
import MyBooks from './mybooks/MyBooks';
import SideNavBar from './sidenavbar/SideNavBar';

const sayHello = 'You can do it';
const books = [
  {
    id:1,
    title:'Stoner',
    author:'William',
    description:'The book about the guy who was greate professor',
  },
  {
    id:2,
    title:'Fish doesn\'t exist',
    author:'David',
    description:'It\'s the most surprising book in this year',
  },
  {
    id:3,
    title:'Don\'t give up',
    author:'Winnie',
    description:'I hope I could finish this project successfully💙',
  }
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
