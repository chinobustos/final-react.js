import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider=({children})=>{
    const [carrito,setCarrito]=useState([])

    const añadirProducto =(producto)=>{
        const condicion = estaEnElCarrito(producto.id)
        if(condicion){
            const productosModificados= carrito.map((productoCarrito)=>{
                if(productoCarrito.id === producto.id){
                    return{...productoCarrito,cantidad: productoCarrito.cantidad + producto.cantidad}
                }else{
                    return productoCarrito
                }
            })
            setCarrito(productosModificados)

        }else{
            setCarrito([...carrito,producto])
        }
    }
    const totalCantidad=()=>{
     return carrito.reduce((total, producto)=> total + producto.cantidad,0)

    }
    const estaEnElCarrito=(idProducto)=>{
     return carrito.some((producto)=> producto.id === idProducto)
    }


    return(
        <CartContext.Provider value={{carrito,añadirProducto,totalCantidad,estaEnElCarrito}}>
            {children}
        </CartContext.Provider>

    )
}
export {CartProvider,CartContext}
