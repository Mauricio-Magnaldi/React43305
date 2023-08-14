import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
        <CartContextProvider>     
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>        
              <Route path="/" element= {<ItemListContainer greeting = {"Gracias por tu visita al Mayorista La Ferretería"}></ItemListContainer>}></Route>
              <Route path="/categoria/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/producto/:id" element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path="/carro" element={<CartContainer></CartContainer>}></Route>
              <Route path="/checkout" element={<OrderConfirm></OrderConfirm>}></Route>
              <Route path="/order-confirmation/:id" element={<Checkout></Checkout>}></Route>
              <Route path="*" element={<h1>Página no encontrada: 404</h1>}></Route>        
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;

