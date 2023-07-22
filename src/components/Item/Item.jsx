//import ButtonComponent from "../ButtonComponent/ButtonComponent";
//<ButtonComponent colorFondo="yellow">Ver Producto</ButtonComponent>
import './ItemCard.css';

function Item(props) {
        const {nombreProducto, descripcionProducto, precioProducto, imagenProducto, categoriaProducto, stockProducto } = props;

        return (
            <div>
                <h2>{nombreProducto}</h2>
                <p>{descripcionProducto}</p>
                <img width="100" height="100" src={imagenProducto}></img>
                <p>$ {precioProducto}</p>
                <p>Categoría: {categoriaProducto}</p>
                <p>Stock: {stockProducto}</p>
                <button>Ver detalle</button>
            </div>
        );
    }

export default Item;