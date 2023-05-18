import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"

export const Checkout = () => {


  const [email, setEmail] = useState('')

  const [nombre, setNombre] = useState('')

  const [apellido, setApellido] = useState('')

  const [telefono, setTelefono] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email)
    console.log(nombre)
    console.log(apellido)
    console.log(telefono)
  }




  return (
    <div>
        <h3>Terminar compra</h3>
        <hr />

          <form onSubmit={handleSubmit} className="container mt-3">
            <div className="form-group">
              <label htmlFor="email"><input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />Email</label>
            </div>
            <div className="form-group" onChange={(e) => setNombre(e.target.value)} value={nombre}>
              <label htmlFor="nombre"><input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>Nombre</label>
            </div>
            <div className="form-group">
              <label htmlFor="apellido"><input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>Apellido</label>
            </div>
            <div className="form-group">
              <label htmlFor="telefono"><input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>Teléfono</label>
            </div>
            <button type="submit" className="btn btn-success">Finalizar</button>
            <Link to='/cart' className= 'btn btn-info'>Volver al Carrito</Link>

          </form>



    </div>
  )
}
