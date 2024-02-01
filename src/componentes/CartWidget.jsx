import { useContext } from "react"
import { CartContext } from "../contexto/CartContext"

const CartWidget = ()=>{
    const {totalCantidad}=useContext(CartContext)
    return(
        <div className="cart">
            <button className="carrito">🛒</button>
            <p>{totalCantidad()}</p>
        </div>
    )
}
export default CartWidget