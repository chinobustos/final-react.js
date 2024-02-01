import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./componentes/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { CartProvider } from "./contexto/CartContext";
import Carrito from "./componentes/carrito/Carrito";
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer saludo = ""/>}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer saludo =""/>}/>
      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App
