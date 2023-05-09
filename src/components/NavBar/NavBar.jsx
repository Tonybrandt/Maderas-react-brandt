import React from 'react'
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// const NavBar = () => {

function NavDropdownExample() {
const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <nav className="menu">
      <Link className="title-nav" to='/' >
      <h1 >
        JB <span className="title-white">Maderas</span>
      </h1>
      </Link>
      <div className="menu__items">
        <Link className='link' to="/">Inicio</Link>
        {/* <p>Nosotros</p> */}
        {/* <p>Tienda</p> */}
        {/* <Link className='link menu__item menu__item--show' to='/productos/'>Tienda</Link> */}
        <NavDropdown title="Tienda" id="nav-dropdown">
        <Link className='link-deplegable' to='/productos/aislantes'>
        Aislantes{/* <NavDropdown.Item eventKey="4.2">Aislantes</NavDropdown.Item> */}
        </Link>
        <Link className='link-deplegable' to='/productos/pinturas'>
        Pinturas{/* <NavDropdown.Item eventKey="4.3">Pinturas</NavDropdown.Item> */}
        </Link>
        <Link className='link-deplegable' to='/productos/clavos'>
        Clavos{/* <NavDropdown.Item eventKey="4.4">Clavos</NavDropdown.Item> */}
        </Link>
        <Link className='link-deplegable' to='/productos/tornillos'>
        Tornillos{/* <NavDropdown.Item eventKey="4.5">Tornillos</NavDropdown.Item> */}
        </Link>
        <Link className='link-deplegable' to='/productos/madera aserrada'>
        Madera Aserrada{/* <NavDropdown.Item eventKey="4.6">Madera Aserrada</NavDropdown.Item> */}
        </Link>
        <Link className='link-deplegable' to='/productos/madera cepillada'>
        Madera Cepillada{/* <NavDropdown.Item eventKey="4.5">Madera Cepillada</NavDropdown.Item> */}
        </Link>
      </NavDropdown>
        <p className='link'>Contacto</p>
        {/* <CartWidget /> */}
        <Link className='link' to='/cart'><CartWidget/></Link>
      </div>
    </nav>
  );
};

export default NavDropdownExample;
