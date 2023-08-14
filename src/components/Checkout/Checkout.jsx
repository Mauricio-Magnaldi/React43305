import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { crearOrden } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";

function Checkout() {
  const {carro, obtenerPrecioTotalEnCarro, vaciarCarro} = useContext(cartContext);  
  const [buyer, setBuyer] = useState({
        firstName: "",
        lastName: "",
        age: "",
      });
    
    
    async function manejadorCheckout() {
        const orderData = {
            items: carro,
            buyer: buyer,
            date: new Date(),
            total: (obtenerPrecioTotalEnCarro()).toFixed(2), 
    };    

    try {
    const idOrder = await crearOrden(orderData);
    const notificacion = toast.info(
        <div>
            {`Atención. Información importante. Copia el siguiente código de tu orden de compra localhost:3000/order-confirmation/${idOrder} para que lo utilices en caso de necesidad. Gracias por tu compra.`}
        <button onClick={() => toast.dismiss()}>Cerrar</button>
        </div>,
        {
            autoClose: false
        }
    )
    vaciarCarro();
    } 
    catch (e) {
        const mensaje = `No se pudo realizar la compra debido al siguiente error ${e}`;
        toast.error(mensaje, {
            position: 'top-center',
            autoClose: 3000, 
            closeOnClick: true,
        });
    }

    function onInputChange(evt) {
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = { ...buyer };
        newState[field] = value;
        setBuyer(newState);
      }
    
      function resetForm(e) {
        e.preventDefault();
        setBuyer({
          firstName: "",
          lastName: "",
          age: "",
        });
      }
    
    return (
        <form>
        <h2>Completa tus datos para completar la compra🛍</h2>
  
        <div style={{ display: "flex", marginBottom: 8 }}>
          <label htmlFor="firstName" style={{ width: "100px", marginRight: 4 }}>
            Nombre
          </label>
          <input
            value={buyer.firstName}
            name="firstName"
            type="text"
            onChange={onInputChange}
          />
        </div>
  
        <div style={{ display: "flex", marginBottom: 8 }}>
          <label htmlFor="lastName" style={{ width: "100px", marginRight: 4 }}>
            Apellido
          </label>
          <input
            value={buyer.lastName}
            name="lastName"
            type="text"
            onChange={onInputChange}
          />
        </div>
  
        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
          <input
            value={buyer.age}
            name="age"
            type="number"
            onChange={onInputChange}
          />
        </div>
  
        <button
          disabled={
            !(buyer.firstName !== "" && buyer.lastName !== "" && buyer.age !== "")
          }
          onClick={manejadorCheckout}
        >
          Confirmar Compra
        </button>
        <button onClick={resetForm}>Cancelar</button>
      </form>
    );   
}}

export default Checkout;