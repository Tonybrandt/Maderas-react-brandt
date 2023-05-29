import React from 'react';
import './ItemCount.css';

export const ItemCount = ({max, cantidad, modify}) => {
 
    
    const sumar = () => {
        if (cantidad < max) {
        modify(cantidad +1)
        }
    }
    const restar = () => {
        if (cantidad > 0) {
            modify(cantidad -1)
        }
    }
    // const reset = () => {
    //     modify(0)
    // }
    return (
        <>
        <h4>Cantidad: {cantidad}</h4>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        {/* <button onClick={reset}>🔃</button> */}
        </>

    )
}