import "./ItemDetail.css";
import React from "react";

function ItemDetail(props) {
    const { producto } = props;

    const estiloPrecio = {
        color: producto.descuento !== 0 ? "green" : "blue",
    }

    const tachadoPrecio = {
        textDecoration: "line-through"
    }
    // verificar si estoy recibiendo datos y de ahí implementar el componente loading con el ring también.
    //Fragment <>
    return (               
        <>
        <div className="tarjetaDetalle">
            <div>
                <h2>{producto.nombre}</h2>
            </div>
            <div className="divImagen">
                <img src={producto.imagen} alt="Imagen del producto"></img>     
            </div>
            <div>
                <span>{producto.descripcion}</span>
            </div>
            <div>
                {
                    producto.descuento === 0 ? <span>$ {producto.precio}.-</span> : <h4 style={tachadoPrecio}>$ {producto.precio}.-</h4> 
                }
            </div>
            <div>
                    {
                        producto.descuento !== 0 ? <div><span>Descuento del</span><span style={estiloPrecio}> {producto.descuento}%</span><span> equivalente a </span><span style={estiloPrecio}>$ {(producto.precio * (producto.descuento/100)).toFixed(2)}.-</span><span>, por lo que pagarás</span><strong style={estiloPrecio}><h3> $ {(producto.precio - [producto.precio * (producto.descuento/100)]).toFixed(2)}.-</h3></strong></div> : <span></span>
                    }
            </div>
            <div>
                <span>Stock: {producto.stock} </span>
            </div> 
        </div>
        </>
    );
}

export default ItemDetail;