// import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='menu'>
            <h1>JB Maderas</h1>
            <div>
                <button>Inicio</button>
                <button>Tienda</button>
                <button>Nosotros</button>
                <button>Contacto</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar