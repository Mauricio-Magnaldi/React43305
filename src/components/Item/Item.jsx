import './Item.css';
import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function Item(props) {
        const {id, nombre, precio, imagen, descuento, stock} = props;
          
return (
    <div className={`tarjeta ${stock === 0 ? "tarjetaBloqueada" : ""}`}>
        <h2>{nombre}</h2>
            <div className="divImagen">
                <img src={imagen} alt="Imagen del Producto"></img>
            </div>
        <p>${precio}.-</p>
            {
                descuento !== 0 && stock !== 0 ? <h3>Este producto tiene descuento.</h3>: ""
            }
        <p>
            {
                stock === 0 ? <span>Producto sin stock.</span> : ""
            }
        </p>    
        <Link to={`/producto/${id}`}>   
            {
                stock === 0 ? "" : <ButtonComponent>Detalle</ButtonComponent>
            }
         </Link> 
    </div>
    );
}

export default Item;
