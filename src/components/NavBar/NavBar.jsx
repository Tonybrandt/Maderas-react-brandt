// import React from 'react'
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="menu">
      <h1>
        JB <span className="title-white">Maderas</span>
      </h1>
      <div className="menu__items">
        <p>Inicio</p>
        <p>Nosotros</p>
        <p>Tienda</p>
        <p>Contacto</p>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

const Usuario = () => {
    return (
            <div>
                <h1>Usuario 1</h1>
                <p>Gaston Brandt</p>
                <p>28 años</p>
                <p>Nacionalidad: Argentina</p>
            </div>
    );
}