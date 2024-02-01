import React, { useContext, useState } from 'react'
import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../contexto/CartContext'

const ItemDetail = ({producto}) => {
  const {añadirProducto}=useContext(CartContext)
  const agregarAlCarrito =(contador) =>{
  const productoNuevo =(contador, producto.nombre)
  añadirProducto(productoNuevo)
  }
  return (
    <div className='detalles'>
        <img src={producto.img} alt=""/>
        <p>{producto.nombre}</p>
        <p>${producto.precio}</p>
        <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
        <div className="form">
         </div>
    </div>
  )
}
export default ItemDetail
