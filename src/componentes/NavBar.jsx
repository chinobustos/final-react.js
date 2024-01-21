import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = ()=>{
    return(
        <div className="navbar">
            <Link to="/">
            <img className="logo" src="/img/logo.jpg" alt="" />
            </Link>
            <ul>
                <li><Link to="/categoria/guitarras">Guitarras</Link></li>
                <li><Link to="/categoria/bajos">Bajos</Link></li>
                <li><Link to="/categoria/baterias">Baterias</Link></li>
                <li><Link to="/categoria/accesorios">Accesorios</Link></li>
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar