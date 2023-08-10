import { useContext } from "react";
import { cartContext } from "../../App";

function CartWidget() {
  const context = useContext(cartContext);
  console.log(context);
    return (
      <div>
        🛒
        <span>{context.carro.length}</span>
      </div>
    );
}

export default CartWidget;

