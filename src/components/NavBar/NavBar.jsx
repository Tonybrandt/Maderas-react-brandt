import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";

// const NavBar = () => {

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <nav className="menu">
      <div className="nav__container">
        <Link className="title-nav" to="/">
          <h1 className="title-nav">
            JB <span className="title-white">Maderas</span>
          </h1>
        </Link>
        <div className="menu__items">
          <Link className="link" to="/">
            Inicio
          </Link>
          <NavDropdown title="Tienda" id="nav-dropdown">
            <Link className="link-deplegable" to="/productos/aislantes">
              Aislantes
            </Link>
            <Link className="link-deplegable" to="/productos/pinturas">
              Pinturas
            </Link>
            <Link className="link-deplegable" to="/productos/clavos">
              Clavos
            </Link>
            <Link className="link-deplegable" to="/productos/tornillos">
              Tornillos
            </Link>
            <Link className="link-deplegable" to="/productos/madera aserrada">
              Madera Aserrada
            </Link>
            <Link className="link-deplegable" to="/productos/madera cepillada">
              Madera Cepillada
            </Link>
          </NavDropdown>
          <Link className="link" to="/Contact">
            Contacto
          </Link>
          <Link className="link" to="/cart">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavDropdownExample;
