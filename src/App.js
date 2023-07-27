//import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
//import CartWidget from './components/NavBar/CartWidget.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
//import productoFerreteria from './data.js';
//import asyncMock from "../src/services/asyncMock";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{/* Esto es un comentario */}

//<Route path="/category/:id" element= {<ItemListContainer></ItemListContainer>}></Route>
// Hacer que el El carrito debe ir a /cart <CartView></CartView></Route>
// Hacer que el El carrito debe ir a /checkout <Checkout></Checkout>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>        
         <Route path="/" element= {<ItemListContainer greeting = {"Gracias por tu visita al Mayorista La Ferretería"}></ItemListContainer>}></Route>
         
         <Route path="/categoria/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>

         <Route path="/producto/:id" element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
         <Route path="*" element={<h1>Página no encontrada: 404</h1>}></Route>        
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
