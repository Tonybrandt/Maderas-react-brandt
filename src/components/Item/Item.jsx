import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom/dist'

export const Item = ({id, description, price, image, category }) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>Precio: ${price}</Card.Title>
        <Card.Title>Categoría: {category}</Card.Title>
        <Link to={`/detail/${id}`}>
        <Button variant="primary">Lo quiero!</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}
