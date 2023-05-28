import React, {useContext, useState} from 'react';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './itemdetail.css'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ItemDetail = ({ id, name, description, price, image, category, stock }) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return


  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  /********************/

  const {addToCart} = useContext(CartContext)
  
  const [counter, setCounter] = useState(1)

  const sumarAlCarrito = () =>{
    const newItem = {
      id,
      name,
      description,
      image,
      price,
      category,
      counter
    }
    addToCart(newItem)
  }

    const notify = () => {

      toast.success("Se agregó al carrito !", {
          position: toast.POSITION.TOP_RIGHT
        });
      
    }

  
  return (
    <div className='item'>
      <Button className='btn-volver' onClick={goBack}>Volver</Button>
      <Card className='card'>
        <Card.Img variant="top" src={image} />
        <Card.Body className='card-body'>
          {/* <Card.Title>{id}</Card.Title> */}
          <Card.Title>{description}</Card.Title>
          <Card.Title>Precio: ${price}</Card.Title>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea error totam quibusdam doloribus, alias aperiam exercitationem laboriosam illum similique eos, delectus vitae odit maxime, repellendus iusto quisquam placeat blanditiis. Cupiditate! </p>
          <Card.Title>Categoria: {category}</Card.Title>
          <ItemCount max={stock} modify={setCounter} cantidad={counter} />
          <Button className='btn__itemdetail' onClick={() => {
            sumarAlCarrito()
            notify()
          }} variant="primary">Agregar al carrito</Button>
          <ToastContainer />
         {/* sumarAlCarrito */}
        </Card.Body>
      </Card>
    </div>
  )
}
