import { Link } from "react-router-dom";
import "./Item.css"
import { useEffect, useState } from "react";
const Item = ({producto}) => {
  const [zoom,setZoom] = useState(false);

  const handleMouseOver = ()=>{
    setZoom (true);
  };

  const handleMouseLeave = ()=>{
    setZoom(false)
  };

  const estiloCard = {
    transform: zoom ? 'scale(1.1)': 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
  }



  return (
    <div style= {estiloCard} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="card">
          <img src={producto.img} alt="" />
          <p>{producto.nombre}</p>
          <p>{producto.detalle}</p>
          <p>${producto.precio}</p>
          <Link to ={`/detalle/${producto.id}`} className="btn">ver detalles </Link>
    </div>
  );
};

export default Item
