import React from 'react'
import {Item} from '../Item/Item'
import './itemlist.css'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='item-list'>
      <div className='item-list-container'>
        <h3 className='itemlist__title'>Nuestros Productos</h3>
        <div className='fila'>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
      </div>
    </div>

  )
}
