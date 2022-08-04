import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const sayHello = 'alert('Hi Never give up')';
function App() {
  return (
    <MyBooks sayHello={sayHello}/>
  );
}

export default App;
