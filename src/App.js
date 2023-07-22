import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import CartWidget from '../src/components/CartWidget/CartWidget.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer.js';
//import productoFerreteria from './data.js';
import asyncMock from "../src/services/asyncMock.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from "./components/Item/Item";
import ItemCount from "../src/components/ItemCount/ItemCount";

/*

      <BrowserRouter>
        <NavBar></NavBar>
       
      </BrowserRouter>    

<Routes>
          <Route path="/" element={<ItemListContainer greeting={"Gracias por tu visita"}></ItemListContainer>}></Route>
          
          <Route path="*" element={<h1>Page not found: 404</h1>}></Route>
        </Routes>
        */
alert("Luego de que hagas click en el botón Aceptar se cargará un contador de stock, luego los títulos de la página y al cabo de 3 segundos llegarán los registros de la BBDD.");

function App() {
  return (
    <div className="App">
     <div>
      
        <ItemCount stock={9}></ItemCount>
        <ItemListContainer greeting={"Gracias por tu visita al Mayorista La Ferretería"}></ItemListContainer>
        
        </div>
    </div>
  );
}

export default App;
