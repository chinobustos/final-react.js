import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./componentes/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes , Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer saludo = ""/>}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer saludo =""/>}/>
      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
