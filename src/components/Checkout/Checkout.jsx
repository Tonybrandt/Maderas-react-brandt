import { useState, useContext } from "react"
import React from 'react'
import {CartContext} from '../context/CartContext'
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import firebase from 'firebase'
import 'firebase/firestore'
import {getFirestore} from '../../firebase/config'
export const Checkout = () => {

  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)




  const [email, setEmail] = useState('')

  const [nombre, setNombre] = useState('')

  const [apellido, setApellido] = useState('')

  const [telefono, setTelefono] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()


    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const db = getFirestore()
  
    const orders = db.collection('ordenes')
  
    orders.add(orden)
      .then((res) =>{
        Swal.fire({
          icon: 'success',
          title: 'Su compra se realizó con exito!',
          text: `Guarde su numero de compra: ${res.id}`,
          willClose: () =>{
            vaciarCarrito()
          }
        })
      })
      .finally(() =>{
        console.log("Orden realizada con éxito!")
      })


      carrito.forEach((item) =>{
        const docRef = db.collection('productos').doc(item.id)

        docRef.get()
          .then((doc) =>{
            docRef.update({
            stock: doc.data().stock - item.counter
          })
        })
      })
  }


  return (
    <div>
        <h3>Terminar compra</h3>
        <hr />

          <form onSubmit={handleSubmit} className="container mt-3">
            <div className="form-group">
              <label htmlFor="email"><input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />Email</label>
            </div>
            <div className="form-group">
              <label htmlFor="nombre"><input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>Nombre</label>
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
