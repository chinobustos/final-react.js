import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexto/CartContext'

const Carrito = () => {
    const {Carrito}= useContext(CartContext)
  return (
    <div>
        <ul>
            {
                Carrito.map((producto)=>{
                    <li key={producto.id}>
                        <p>{producto.nombre}</p>
                    </li>
                }) 
            }
        </ul>
    </div>
  )
}

export default Carrito
 