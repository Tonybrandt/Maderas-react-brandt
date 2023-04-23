// import React from 'react'
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="menu">
      <h1>
        JB <span className="title-white">Maderas</span>
      </h1>
      <div className="menu__items">
        <Link className='link' to="/">Inicio</Link>
        {/* <p>Nosotros</p> */}
        {/* <p>Tienda</p> */}
        <Link className='link' to='/productos/'>Tienda</Link>
        <p className='link'>Contacto</p>
        {/* <CartWidget /> */}
        <Link className='link' to='/cart'><CartWidget/></Link>
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