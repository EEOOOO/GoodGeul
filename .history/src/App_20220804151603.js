import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const books = [
  { id:1, title:'Stoner', author:'MJ'},
  { id:2, title:'Fish', author:'David'},
  { id:3, title:'Dont Give Up', author:'Winnie'}
];
function App() {
  return (
    <MyBooks books={books}/>
  );
}

export default App;
