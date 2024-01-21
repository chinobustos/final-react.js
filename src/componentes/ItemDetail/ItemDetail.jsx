import React from 'react'
import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({producto}) => {
  const agregarAlCarrito =(contador) =>{
  const productoEnCarrito =(contador, producto.nombre)
  console.log(productoEnCarrito)
  }
  return (
    <div className='detalles'>
        <img src={producto.img} alt=""/>
        <p>{producto.nombre}</p>
        <p>${producto.precio}</p>
        <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  )
}
export default ItemDetail
