import React, { useEffect, useState } from 'react'
import obtenerProductos from '../utilidades/data'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [producto, setProducto ] = useState ({})
    const { id } = useParams()
 useEffect(()=>{
    obtenerProductos
          .then ((respuesta)=>{
             const productoEncontrado = respuesta.find((producto)=> producto.id === id)
             setProducto(productoEncontrado)
         })
},[])

  return (
    <div>
       <ItemDetail producto={producto}/>
    </div>
  )
}
export default ItemDetailContainer