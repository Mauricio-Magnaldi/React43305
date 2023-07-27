import './Item.css';
import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

function Item(props) {
        const {id, nombre, descripcion, precio, imagen, categoria, stock} = props;
        return (
                <div className="tarjeta">
                    <h2>{nombre}</h2>
                    <img src={imagen} className="imagenDiv" alt="Imagen del Producto"></img>
                    <p>{descripcion}</p>
                    <p>$ {precio}</p>
                    <p>Categoría: {categoria}</p>
                    <p>Stock: {stock}</p>
                    <Link to={`/producto/${id}`}>
                        <ButtonComponent>Ver Producto</ButtonComponent>
                    </Link> 
                </div>
        );
    }

export default Item;