import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const sayHello = 'You can do it';
const books = [
  {
    id:1,
    title:'Stoner',
    author:'William'
  },
  {
    id:2,
    title:'Fish doesn\'t exist',
    author:'David'
  },
  {
    id:3,
    title:'Don\'t give up',
    author:'Winnie'
  }
]
function App() {
  return (
    <MyBooks sayHello={sayHello} books={books}/>
  );
}

export default App;
