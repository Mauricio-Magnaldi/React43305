import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ItemCount ({stock, onConfirm}) {
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

  return (
    <div>
      <div className="div">
        <div>
        { 
          stock === 0 ? "" :
            <button className="boton">
            <h2 onClick={manejadorSumar}><abbr title="Suma"><FontAwesomeIcon icon={faArrowUp} fade></FontAwesomeIcon></abbr></h2>
            </button>
        }
        </div>
        <div>
        { 
          stock === 0 ? "" : 
            <h2>{clickContador}</h2>
        }
        </div>
        <div>
        { 
          stock === 0 ? "" :
            <button className="boton">
            <h2 onClick={manejadorRestar}><abbr title="Resta"><FontAwesomeIcon icon={faArrowDown} fade></FontAwesomeIcon></abbr></h2>
            </button>
        }        
        </div>          
      </div>
      <div>
      {          
        stock === 0 ? "" : <button className="boton" onClick= { () => { onConfirm(clickContador)}}> 
            Agregar al carro
          </button>
        }
      </div>
    </div>
  );
}

export default ItemCount;
