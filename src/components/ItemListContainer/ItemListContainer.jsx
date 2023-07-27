import { useState, useEffect } from "react";
import obtenerDato, { obtenerDatoCategoria }  from "../../services/asyncMock";
import Item from "../Item/Item";
//import './ItemListContainer.css';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams()
        
    async function requiereProductos() {
        let respuesta =  categoryId ? await obtenerDatoCategoria(categoryId) : await obtenerDato();
        setProductos(respuesta);
        }

    useEffect(() => {
        requiereProductos();
    }, []);

        return (
            <div className="listContenedor">
                <h1>{greeting}</h1>
                <h2 className="subtitulo">Listado de Productos</h2>
                {productos.map((item) => (
                        <div className="contenedorTarjeta">
                            <Item key = {item.id} {...item}></Item>
                        </div>        
                ))};
            </div>
        );
    }

export default ItemListContainer;