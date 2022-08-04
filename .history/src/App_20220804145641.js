import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const books = [
  { key:1, bookTitle:'Stoner', Author:'MJ'},
  { key:2, bookTitle:'Fish', Author:'David'},
  { key:3, bookTitle:'Dont Give Up', Author:'Winnie'},
];
function App() {
  return (
    <MyBooks books={books}/>
  );
}

export default App;
