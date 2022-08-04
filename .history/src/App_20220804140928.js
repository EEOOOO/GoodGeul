import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const books = [
  {id:1, bookTitle:'Stoner', Author:'MJ'},
  {id:2, bookTitle:'Fish', Author:'David'},
  {id:3, bookTitle:'Don\'t Give Up', Author:'Winnie'}
]
function App() {
  return (
    <MyBooks />
  );
}

export default App;
