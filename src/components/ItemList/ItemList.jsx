import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
    const { productos } = props;
    return (
        <div>
            <h1>Listado de Productos</h1>
            <div className="divListado">
                { productos.map((item) => (
                    <Item key={item.id} {...item}></Item>
                ))}
            </div>
        </div>
    );
}

export default ItemList;