import { useContext } from "react";
import { cartContext } from "../../App";

function CartWidget() {
  const context = useContext(cartContext);
    return (
      <div>
        🛒
        <span>{context.obtenerTotalItemsEnElCarro()}</span>
      </div>
    );
}

export default CartWidget;

