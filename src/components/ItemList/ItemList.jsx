import React from 'react'
import {Item} from '../Item/Item'
import './itemlist.css'

export const ItemList = ({productos=[]}) => {
  return (
    <div>
        <h3>Nuestros Productos</h3>
        <div className='fila'>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
    </div>

  )
}
