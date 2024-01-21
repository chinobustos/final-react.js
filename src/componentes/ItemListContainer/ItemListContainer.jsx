import { useEffect, useState } from "react";
import obtenerProductos from "../utilidades/data"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import{ScaleLoader} from "react-spinners"


const ItemListContainer = ({saludo}) =>{
    const [productos,setProductos]= useState([])
    const [cargando,setCargando]= useState([true])
    const {categoria} = useParams()
    
    useEffect(()=>{
        obtenerProductos 
        .then ((respuesta)=>{
            if(categoria){
                const ProductosFiltrados = respuesta.filter((producto)=>producto.categoria === categoria)
                setProductos(ProductosFiltrados)
            }else{
             setProductos(respuesta)
            }
        })
        .catch((error)=>{
           console.log(error)
        })
        .finally(()=>{
           setCargando(false)
        });
    },[categoria]);


    return(
       <div>
           {cargando?(
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
                  <ScaleLoader color="rgba(214, 102, 54, 1)" />
                </div>
            ):(
                <div>
                 <p>{saludo}</p>
                 <ItemList  productos ={productos}/>
             </div>
            )}
        </div>  
  
    );
};
export default ItemListContainer