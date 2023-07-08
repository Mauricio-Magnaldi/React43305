import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import CartWidget from '../src/components/CartWidget/CartWidget.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js';

function App() {

  return (
    <div className="App">
      <NavBar></NavBar> 
      <ItemListContainer greeting={"Gracias por tu visita"} />     
    </div>
  );
}

export default App;
