import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const sayHello = 'You can do it';
const books = [
  {
    id:1,
    title:'one',
    author:'a'
  },
  {
    id:2,
    title:'two',
    author:'b'
  },
  {
    id:3,
    title:'three',
    author:'c'
  }
]
function App() {
  return (
    <MyBooks sayHello={sayHello}/>
  );
}

export default App;
