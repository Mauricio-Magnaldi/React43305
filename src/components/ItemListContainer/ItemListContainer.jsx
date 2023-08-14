import { useState, useEffect } from "react";
//import obtenerDato, { obtenerDatoCategoria }  from "../../services/asyncMock";
import { obtenerDato, obtenerDatoCategoria} from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
//import Item from "../Item/Item";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

function ItemListContainer ({greeting})  {
//    const [productos, setProductos] = useState(null); se puede inicializar asi 29-7 1:06
    const [productos, setProductos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);
    const { categoryId } = useParams();
    
    useEffect(() => {
        setEstaCargando(true);
        async function requiereProductos() {
            let respuesta =  categoryId ? await obtenerDatoCategoria(categoryId) : await obtenerDato();
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
                            <h1>Categoría seleccionada no encontrada.</h1>
                }
            </div>
        );
    }

export default ItemListContainer;