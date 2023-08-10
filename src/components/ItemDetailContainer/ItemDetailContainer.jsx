import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { cartContext } from "../../App";
//import { CartContextProvider } from "../../context/cartContext";



function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const [estaCargando, setEstaCargando] = useState(true);
//    const [estaAgregadoAlCarrito, setEstaAgregadoAlCarrito] = useState(false);  
    const { id } = useParams();
    const { agregarAlCarro } = useContext(cartContext); 
 //   const itemEnCarrito = obtenerItemEnCarrito(id);
  //  const maxItems = itemEnCarrito ? producto.stock - itemEnCarrito.count : producto.stock;

    useEffect(() => {

//  La función async requierProducto sabía estar fuera del useEfect
//Utilizar el componente loadinComponente para que se muestra la reuda clase 29/7 1:00 hs. para evitar que aparezcan campos vacios. se mu
      setEstaCargando(true);
      async function requiereProducto() {
        const respuesta = await getProductData(id);
        setProducto(respuesta);
        setEstaCargando(false); 
    }

        requiereProducto();
    }, [id]);

function manejadorAgregarAlCarrito(clickContador) { 
  agregarAlCarro(producto, clickContador);
  alert(`Agregaste ${clickContador} unidades de ${producto.nombre} al carrito.`);  
} 

if (estaCargando) {
  return (
     <LoaderComponent></LoaderComponent>
     );
 }

    return (
      <div>
        {<ItemDetail producto={producto}></ItemDetail>}
        <ItemCount onAddToCart={manejadorAgregarAlCarrito} stock={producto.stock}></ItemCount>
        <div className="contenedorTarjeta">
          <Link to="/">
            <ButtonComponent>Volver</ButtonComponent>
          </Link> 
        </div>
      </div>
    );
}

export default ItemDetailContainer;
