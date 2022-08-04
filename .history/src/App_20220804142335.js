import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const books = [
  {'id':1, 'bookTitle':'Stoner', 'Author':'MJ'},
  {'id':2, 'bookTitle':'Fish', 'Author':'David'},
  {'id':3, 'bookTitle':'Dont Give Up', 'Author':'Winnie'},
]
function App() {
  return (
    <MyBooks books={books}/>
  );
}

export default App;
