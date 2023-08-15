import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { crearOrden } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";

function Checkout() {
  const [buyer, setBuyer] = useState({
        firstName: "",
        email: "",
        phone: "",
      });

    const navigate = useNavigate();
    const {carro, obtenerPrecioTotalEnCarro, vaciarCarro} = useContext(cartContext);
    async function manejadorCheckout(evt) {
        evt.preventDefault();
        const orderData = {
            items: carro,
            buyer: buyer,
            date: new Date(),
            total: (obtenerPrecioTotalEnCarro()).toFixed(2), 
    };    

    try {
    const idOrder = await crearOrden(orderData);
    navigate(`/order-confirmation/${idOrder}`);
    vaciarCarro();
    } 
    catch (error) {
        
    }
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
          email: "",
          phone: "",
        });
      }
    
    return (
        <form>
        <h2>Completa tus datos para completar la compra.</h2>
  
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
          <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
            Email
          </label>
          <input
            value={buyer.lastName}
            name="email"
            type="email"
            onChange={onInputChange}
          />
        </div>
  
        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Telefono</label>
          <input
            value={buyer.age}
            name="phone"
            type="number"
            onChange={onInputChange}
          />
        </div>
        <div className="alineacionHorizontal">
        <button className="boton"
          disabled={
            !(buyer.firstName !== "" && buyer.email !== "" && buyer.phone !== "")
          }
          onClick={manejadorCheckout}
        >
          Confirmar
        </button>
        <button onClick={resetForm} className="boton">Cancelar</button>
        </div>
      </form>
    );   
}

export default Checkout;