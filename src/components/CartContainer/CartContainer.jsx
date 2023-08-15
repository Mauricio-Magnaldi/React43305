import './CartContainer.css';
import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartContainer() {
    const {carro, removerProducto, obtenerPrecioTotalEnCarro} = useContext(cartContext);
    const context = useContext(cartContext);

    return (
        <div>
            {
                context.obtenerTotalProductosEnElCarro() === 0 ? <h1>El Carro está vacío. Podés seleccionar alguna categoría.</h1> : 
                
                <div>
                    <table className='borde' border="1">
                    <thead>
                        <tr><th className="borde" colSpan={9}><h1>Carro</h1></th></tr>
                        <tr>
                            <th className='borde'><h3>Producto</h3></th>
                            <th className='borde'><h3>Cantidad</h3></th>
                            <th className='borde'><h3>Precio Unitario</h3></th>
                            <th className='borde'><h3>Precio Total del Producto Sin Descuento</h3></th>
                            <th className='borde'><h3>Descuento</h3></th>
                            <th className='borde'><h3>Precio Unitario con Descuento</h3></th>
                            <th className='borde'><h3>Precio Total del Producto con Descuento</h3></th>
                            <th className='borde'><h3>Ahorro</h3></th>
                            <th className='borde'><h3>Eliminar</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                    {carro.map((producto) => ( 
                    <tr key={producto.id}>  
                        <td className='bordeFila'>{producto.nombre}</td>
                        <td className='bordeFila'>{producto.clickContador}</td>
                        <td className='bordeFila'>${producto.precio}.-</td>
                        <td className='bordeFila'>${(producto.precio * producto.clickContador).toFixed(2)}.-</td>
                        <td className='bordeFila'>{producto.descuento}%</td>
                        <td className='bordeFila'>${(producto.precio - [producto.precio * (producto.descuento/100)]).toFixed(2)}.-</td>
                        <td className='bordeFila'>
                        ${(producto.clickContador * (producto.precio - [producto.precio * (producto.descuento/100)])).toFixed(2)}.-
                        </td>
                        <td className='bordeFila'>${((producto.precio * producto.clickContador) - (producto.clickContador * (producto.precio - [producto.precio * (producto.descuento/100)]))).toFixed(2) }.-</td>
                        <td className='bordeFila'><button className='boton' onClick = {() => removerProducto(producto.id)}>Si</button></td>
                    </tr>
                    ))}
                    </tbody>
                    <td className='bordeFila' colSpan={9}><p>Total del carro: ${(obtenerPrecioTotalEnCarro()).toFixed(2)}.-</p></td>                    
                    <tr><th className="borde" colSpan={9}><Link to="/checkout"><button className="boton">Comprar</button></Link></th></tr>
                    </table>               
                    </div>
             }    
        </div>
    );
}

export default CartContainer;
