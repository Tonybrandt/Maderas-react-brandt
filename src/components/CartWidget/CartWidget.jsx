import React, { useContext } from "react";
import './cartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const {calcularCantidad} = useContext(CartContext)

  return (
    <>
      <FaShoppingCart  className="carro"/>
      <span>{calcularCantidad()}</span>
    </>
  );
};

export default CartWidget;
