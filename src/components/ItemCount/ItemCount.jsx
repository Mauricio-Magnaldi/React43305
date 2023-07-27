import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

let stock = 5;

const ItemCount = ({}) => {
  console.log("Stock inicial: ",stock);
  const [clicks, setClicks] = useState(0);
  const [botonHabilitado, setBotonHabilitado] = useState(false);
  
  const subtractStock = () => {
    stock = stock - 1;
    console.log(stock);
  };

  const addStock = () => {
    stock = stock + 1;
    console.log(stock);
  };

  function handleClickAdd() {
    if (stock > 0) {
      setClicks(clicks + 1);
      subtractStock(stock);
      setBotonHabilitado(true);
    } else {
      alert('Stock en: ' + stock);
    }
  }

  function handleClickSubtract() {
    if (clicks > 0) {
      setClicks(clicks - 1);
      addStock();
      if (clicks === 1) {
        setBotonHabilitado(false);
      }
    } else {
    }
  }

  const agregarCarrito = () => {
    alert('Item en el carrito: ' + clicks);
  };

  return (
    <div className="div">
      <h2>Stock: {stock}</h2>
      <div className="div">
          <button className="boton masMenos">
            <h2 onClick={handleClickAdd}>+</h2></button>
            <h2>{clicks}</h2>
            <button className="boton masMenos">
            <h2 onClick={handleClickSubtract}>-</h2>
           </button>
      </div>
      <div>
          <button
            disabled={!botonHabilitado}
            className="boton"
            onClick={agregarCarrito}
          >
            <h4>Agregar al carrito</h4>
          </button>
      </div>
    </div>
  );
  
}

export default ItemCount;