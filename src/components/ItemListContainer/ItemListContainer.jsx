import { useState, useEffect } from "react";
//import obtenerDato, { obtenerDatoCategoria }  from "../../services/asyncMock";
import { getData, getCategoryData} from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
//import Item from "../Item/Item";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

function ItemListContainer ({greeting})  {
    const [productos, setProductos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);
    const { categoryId } = useParams();
    
    useEffect(() => {
        setEstaCargando(true);
        async function requiereProductos() {
            let respuesta =  categoryId ? await getCategoryData(categoryId) : await getData();
            setProductos(respuesta);
            setEstaCargando(false);
            }

        requiereProductos();
    }, [categoryId]);
 
if (estaCargando) {
 return (
    <LoaderComponent></LoaderComponent>
    );
}

return (
            <div className="listContenedor">   
               <h1>{greeting}</h1>
                {
                    productos.length !== 0 ?
                            <div>   
                                    <ItemList productos={productos}></ItemList>         
                            </div>
                        :
                            <h2>No hay producto para mostrar.</h2>
                }
            </div>
        );
    }

export default ItemListContainer;