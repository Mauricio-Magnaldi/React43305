import React from 'react';
import { useState, useEffect } from 'react';
import { obtenerDatoProducto} from "../../services/asyncMock"
import { useParams } from "react-router-dom";
//import ItemDetail from "../../services/itemDetail";

//El useState se puede inicializar como un objeto vacío o como 'null'
function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { id } = useParams(); 
    
    async function requiereProducto() {
        const respuesta = await obtenerDatoProducto(id);
        setProducto(respuesta);
    }

    useEffect(() => {
        requiereProducto();
    }, []);

    //Fragment <>
    return (
        <>
            
                <div>
                    <img src={producto.imagen} alt="Imagen de un producto"></img>     
                </div>
                <div>
                    <h2>{producto.nombre}</h2>
                </div>
                <div>
                    <span>$ {producto.precio}</span>
                    <span>{producto.descripcion}</span>
                </div>
            
        </>
     //   {<ItemDetail producto={producto}></ItemDetail>}
    );
}

export default ItemDetailContainer;