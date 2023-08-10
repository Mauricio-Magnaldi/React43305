import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
//import Item from './components/Item/Item';

const cartContext = createContext({ carro: [] });

function CartContextProvider(props) {
  const [carro, setCarro] = useState([]);
/*
    function agregarAlCarro(producto, cantidad) {
      const nuevoCarro = [...carro];
      const nuevoItemEnCarro = { cantidad, ...producto};
      nuevoCarro.push(nuevoItemEnCarro);
      setCarro(nuevoCarro);
      console.log(producto, cantidad);
    }

    function removerItem(id) {
      return null;
    }

    function eliminarCarro() {
      return null;
    }

function obtenerTotalItemsEnElCarro() {

  //clase del 22 a 4:25 hs. escuchar y utilizar el metodo reduce
 
  let total=0;
      carro.forEach((item) => {
          total += item.count;
      });
      return total;
    }
*/
    return (
    <cartContext.Provider value={{carro: carro}}>{props.children}</cartContext.Provider> 
  );
}

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
            <Route path="*" element={<h1>Página no encontrada: 404</h1>}></Route>        
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
export { cartContext };




//import { cartContext } from './context/cartContext';
// import { CartContextProvider } from './context/cartContext';


//<Route path="/category/:id" element= {<ItemListContainer></ItemListContainer>}></Route>
// Hacer que el El carrito debe ir a /cart <CartView></CartView></Route>
// Hacer que el El carrito debe ir a /checkout <Checkout></Checkout>
// Hacer eliminar un articulo del carrito mediante la creación de un array "nuevo" donde el viejo array ya no este
/*
<Route path="/cart" element= {<CartContainer></CartContainer>}></Route>
 <Route path="/carrito" element= {<CartContainer></CartContainer>}></Route>
*/
