import { useState } from "react";
import obtenerDatos from "../../services/asyncMock";
import Item from "../Item/Item";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    
    const { categoryId } = useParams()
    
    async function resuelveProducto() {
        const respuesta = await obtenerDatos();
        setProductos(respuesta)
        }
    resuelveProducto();
        return (
            <div>
                <h1>{greeting}</h1>
                <h2 className='h2'>Listado de Productos</h2>
                {productos.map((item) => {
                        return (
                        <div className="contenedorTarjeta"><Item {...item}></Item></div>        
                        );
                })}
            </div>
        )
    }

export default ItemListContainer