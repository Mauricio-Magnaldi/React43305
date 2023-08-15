import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const context = useContext(cartContext);
  const quitaLinea = { textDecoration: "none" };

  return (
      <Link style={quitaLinea} to="/carro">
        <div>
          {
            context.obtenerTotalProductosEnElCarro() ===0 ? "" : <div className="alineacionHorizontal"><div>🛒</div><span>{context.obtenerTotalProductosEnElCarro()}</span></div>
          }
        </div>
      </Link>
    );
}

export default CartWidget;

