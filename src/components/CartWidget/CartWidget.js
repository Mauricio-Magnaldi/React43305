import './cart.css';
import carrito from './assets/carrito.jpg'

const CartWidget = () => {
        return (
            <div>
                <img className="imagenCarrito" src={carrito} alt="Carrito" />
                0
            </div>
        );
    }

export default CartWidget;