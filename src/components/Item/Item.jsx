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
        <p>$ {precio}.-</p>
            {
                descuento !== 0 ? <span>Este producto tiene descuento.</span>:<span></span>
            }
        <Link to={`/producto/${id}`}>
            <ButtonComponent>Detalle</ButtonComponent>
        </Link> 
    </div>
    );
}

export default Item;
