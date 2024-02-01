import { useEffect, useState } from "react";
import './ItemCount.css'

const ItemCount =({stock, agregarAlCarrito}) => {
    const [contador, setContador] = useState(1);

    const sumar =() =>{
        if (contador < stock) {
            setContador(contador + 1)
        }
    };

    const restar = ()=>{
        if (contador > 1){
            setContador(contador-1)
        }
    }
    return(
        <div className="itemCount">
            <div className="controles">
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
                <button onClick={()=>agregarAlCarrito(contador)} className='boton'>comprar</button>
            </div>
        </div>
    )
}
export default ItemCount