import logo from './logo.svg';
import './App.css';
import MyBooks from './mybooks/MyBooks';
const sayHello = 'You can do it';
function App() {
  return (
    <MyBooks sayHello={sayHello}/>
  );
}

export default App;
