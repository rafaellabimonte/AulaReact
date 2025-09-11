import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Paginas/Home";
import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";
import Exercicio3 from "./Paginas/Exercicio3";
import Exercicio4 from "./Paginas/Exercicio4";
import Exercicio5 from "./Paginas/Exercicio5";
import Exercicio6 from "./Paginas/Exercicio5";
import Exercicio7 from "./Paginas/Exercicio5";
import Exercicio8 from "./Paginas/Exercicio5";
import Exercicio9 from "./Paginas/Exercicio5";
import Exercicio10 from "./Paginas/Exercicio5";
import Exercicio11 from "./Paginas/Exercicio5";
import "./Paginas/estilos.css";

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exemplo1" element={<Exemplo1 />}/>
        <Route path="/exemplo2" element={<Exemplo2 />}/>

        <Route path="/Exercicio1" element={<Exercicio1 />}/>
        <Route path="/Exercicio2" element={<Exercicio2 />}/>
        <Route path="/Exercicio3" element={<Exercicio3 />}/>
        <Route path="/Exercicio4" element={<Exercicio4 />}/>
        <Route path="/Exercicio6" element={<Exercicio5 />}/>
        <Route path="/Exercicio7" element={<Exercicio5 />}/>
        <Route path="/Exercicio8" element={<Exercicio5 />}/>
        <Route path="/Exercicio9" element={<Exercicio5 />}/>
        <Route path="/Exercicio10" element={<Exercicio5 />}/>
        <Route path="/Exercicio11" element={<Exercicio5 />}/>
      </Routes>
    </BrowserRouter>
  )
}