import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";

function CartContainer() {
    const {carrito, removeItem} = useContext(cartContext);

async function handleCheckout() {
    const orderData = {
        items: cart,
        buyer: { name: "Mauricio", emnail: "mauricio@gmail.com", phone: "123456"},
        date: new Date(),
    }
}

/*
try {
    const inOrder = await createOrder(orderData);
}
catch(error) {
    //sweet alert no se puedo realziar la compra
    alert(`No se pudo realizar la compra ${error.message}`);
}
*/
    return (
        <div>
            <h1>Carrito</h1>
            {carrito.map((item) => (
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button></button>
                </div>
            ))}
       </div>
    );
}

export default CartContainer;
