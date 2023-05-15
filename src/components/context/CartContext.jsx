﻿import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({Children}) =>{
    
    const [carrito, setCarrito] = useState([])
    
    const addToCart = (item) => {
      setCarrito([...carrito, item])
    }
    const calcularCantidad = () => {
      return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }
  
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }
  
    const removerItem = (itemId) => {
      const newCart = carrito.filter((prod) => prod.id !== itemId)
      setCarrito(newCart)
    }

    const vaciarCarrito = () =>{
      setCarrito([])
    }
    
    return(
        <CartContext.Provider value={{
            addToCart,
            calcularCantidad,
            precioTotal,
            removerItem,
            carrito,
            vaciarCarrito
          }}>
            {Children}
        </CartContext.Provider>
    )
}