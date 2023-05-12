import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

export const CartScreen = () => {
  const { carrito, precioTotal, removerItem } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => (
        <>
          <div className="container my-5">
            <h3>Resumen de compras</h3>
            <hr />
            <div className="listado">
              <p>Producto: {prod.description} </p>
              <p>${prod.price}</p>
              <p>cantidad: {prod.counter}</p>
              <Button className="btn btn-danger" onClick={() => removerItem(prod.id)}>
                <BsFillTrashFill />
              </Button>
            </div>
          </div>
        </>
      ))}
      <strong>Precio total: ${precioTotal()}</strong>
    </div>
  );
};
