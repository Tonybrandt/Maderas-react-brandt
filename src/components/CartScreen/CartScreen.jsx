import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";


export const CartScreen = () => {

  const { carrito, precioTotal, removerItem, vaciarCarrito } =
    useContext(CartContext)

  return (
    <div>
      {carrito.length === 0 ? 
        <>
          <h3>Carrito vacío!</h3>
          <Link to="/" className="btn btn-success">
            Volver a comprar
          </Link>
        </>
       : (
        <>
        <h3>Resumen de compras</h3>
                <hr />
          {
          carrito.map((prod) => (
            <>
              <div className="container my-5">
                
                <div className="listado">
                  <p>Producto: {prod.description} </p>
                  <p>${prod.price}</p>
                  <p>cantidad: {prod.counter}</p>
                  <Button
                    className="btn btn-danger"
                    onClick={() => removerItem(prod.id)}
                  >
                    <BsFillTrashFill />
                  </Button>
                </div>
              </div>
            </>
          ))}
          <hr />
          <strong>Precio total: ${precioTotal()}</strong>
          <Button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar carrito
          </Button>
          <Link className='btn btn-success' to='/checkout'>
            Terminar compra
          </Link>
        </>
      )}
    </div>
  );
};
