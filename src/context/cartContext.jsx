import { useState, createContext } from "react";

const cartContext = createContext({ carro: [] });

function CartContextProvider(props) {
    const [carro, setCarro] = useState([]);
  
      function agregarAlCarro(producto, clickContador) {
        const nuevoCarro = [...carro];
        if (estaEnElCarro(producto.id)) {
            const productoExisteEnCarro = carro.findIndex((item) => item.id === producto.id);
            nuevoCarro[productoExisteEnCarro].clickContador += clickContador;
            setCarro(nuevoCarro);
        } else {
        const nuevoProductoEnCarro = { ...producto, clickContador };
        nuevoCarro.push(nuevoProductoEnCarro);
        setCarro(nuevoCarro);
      }
    }
  
  function estaEnElCarro(id) {
    return carro.some((producto) => producto.id === id);
  }

  function obtenerProductoEnCarro(id) {
    return carro.find((producto) => producto.id === id);
  }

  function removerProducto(id) {
    setCarro(carro.filter((producto) => producto.id !== id));
  }

  function vaciarCarro() {
    setCarro([]);
  }

function obtenerTotalProductosEnElCarro() {
    let total=0;
    carro.forEach((producto) => {
        total += producto.clickContador;
        });
        return total;
      }
      
  function obtenerPrecioTotalEnCarro() {
    let total = 0;
    carro.forEach((producto) => {
      total += (producto.clickContador * (producto.precio - [producto.precio * producto.descuento/100]));
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        carro,
        agregarAlCarro,
        removerProducto,
        vaciarCarro,
        obtenerTotalProductosEnElCarro,
        obtenerPrecioTotalEnCarro,
        obtenerProductoEnCarro,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };

