import React, {useState} from 'react';
import './ItemCount.css';

export const ItemCount = () => {

    const [counter, setCounter] = useState(0)
    const sumar = () => {
        setCounter( counter + 1)
    }
    const restar = () => {
        counter >= 1 ? setCounter( counter - 1) : setCounter(0)
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <>
        <h4>Cantidad: {counter}</h4>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        <button onClick={reset}>🔃</button>
        </>

    )
}