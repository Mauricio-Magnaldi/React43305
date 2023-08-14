import { useState, useEffect, useContext } from "react";
import { obtenerDatoProducto } from "../../services/firebase";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { cartContext } from "../../context/cartContext";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const [estaCargando, setEstaCargando] = useState(true);
    const [estaAgregadoAlCarro, setEstaAgregadoAlCarro] = useState(false);  
    const { id } = useParams();
    const { agregarAlCarro, obtenerProductoEnCarro } = useContext(cartContext); 
    const productoEnElCarro = obtenerProductoEnCarro(id);
    const stockDisponible = productoEnElCarro ? producto.stock - productoEnElCarro.clickContador : producto.stock;  
    const [errorProductoNoEcontrado, setErrorProductoNoEcontrado] = useState(null);

    useEffect(() => {

      setEstaCargando(true);
      async function requiereProducto() {
        try {
          const respuesta = await obtenerDatoProducto(id);
          setProducto(respuesta);
          setEstaCargando(false);  
        } catch (error) {
            setErrorProductoNoEcontrado(error.message);
            setEstaCargando(false);
          } finally {
            setEstaCargando(false);
          }
    }

        requiereProducto();
    }, [id]);

function manejadorAgregarAlCarro(clickContador) { 
  agregarAlCarro(producto, clickContador);  
  setEstaAgregadoAlCarro(true);
} 

if (estaCargando) {
  return (
     <LoaderComponent></LoaderComponent>
     );
 }

if (errorProductoNoEcontrado) 
  return (
  <h1>{errorProductoNoEcontrado}</h1>
  );
 
return (
      <div>

          {<ItemDetail producto={producto}></ItemDetail>}
        {
          estaAgregadoAlCarro ? <Link to="/carro"><ButtonComponent>Ir al Carro</ButtonComponent></Link> :
           <ItemCount stock={stockDisponible} onConfirm={manejadorAgregarAlCarro}></ItemCount>      
        }
        {
        productoEnElCarro && ( 
          <h3>{productoEnElCarro.clickContador} unidades agregadas al carro. Alcanzado el stock disponible no se podrán agregar más.</h3> 
        )
        }       
        <div className="contenedorTarjeta">
          <Link to="/">
            <ButtonComponent>Volver</ButtonComponent>
          </Link> 
        </div>
      </div>
    );
}

export default ItemDetailContainer;
