import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const Item = ({id, description, price, image}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Title>Precio: ${price}</Card.Title>
        <Button variant="primary">Lo quiero!</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
