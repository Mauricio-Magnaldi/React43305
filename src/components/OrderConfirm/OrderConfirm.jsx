import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerOrden } from "../../services/firebase";

function OrderConfirm () {
    const [ordenData, setOrdenData] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        obtenerOrden(id).then((orden) => {
            setOrdenData(orden);    
        });
    }, [id]);

    return (
        <div>
            <h1>Gracias por comprar.</h1>
            {
                ordenData !== null ? ( 
                <div>
                    <p>
                        Tus productos comprados son:
                        {ordenData.items.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.nombre} - {item.clickContador} unidades.
                            </div>
                    );
                })}
                    </p>
                    
                </div> 
            ) : (
            <p>Cargando</p>)
            }
        </div>
    );
}

export default OrderConfirm;
