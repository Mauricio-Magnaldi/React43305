import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
//import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ItemCount ({stock, onAddToCart}) {
  const [clickContador, setClickContador] = useState(1);

  function manejadorSumar() {
    if (clickContador === stock) {}
    else {
      setClickContador(clickContador + 1);
    }
  }

  function manejadorRestar() {
    if (clickContador > 1) {
      setClickContador(clickContador - 1);
    } 
  }

  /*
  const agregarCarrito = () => {
    alert('Item en el carrito: ' + clickContador);
  };
*/

  return (
    <div>
      <div className="div">
        <div>
        <button className="boton">
          <h2 onClick={manejadorSumar}><abbr title="Suma"><FontAwesomeIcon icon={faArrowUp} fade></FontAwesomeIcon></abbr></h2>
        </button>
        </div>
        <div>
        <h2>{clickContador}</h2>
        </div>
        <div>
        <button className="boton">
          <h2 onClick={manejadorRestar}><abbr title="Resta"><FontAwesomeIcon icon={faArrowDown} fade></FontAwesomeIcon></abbr></h2>
        </button>
        </div>          
      </div>
      <div>
          <button className="boton" onClick={ () => onAddToCart(clickContador)}>
            <p>Agregar al carrito</p>
          </button>
      </div>
    </div>
  );
  
}

export default ItemCount;