import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Listado } from "./components/Listado";
import { Nav } from "./components/Nav";

function App() {

  const [listadoState, setListadoState] = useState([]);

/*   const [peliState, setPeliState] = useState({
    id: '',
    titulo: '',
    descripcion: ''
  }); */

  return (
    <div className="layout">
        {/*Cabecera*/}
          <Header/>

        {/*Barra de navegación*/}
            <Nav/>

        {/*Contenido principal*/}
        <section id="content" className="content">

            {/*aqui va el listado de peliculas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            <Crear setListadoState={setListadoState}/>
        </aside>

        {/*Pie de página*/}
        <Footer/>

    </div>
  );
}

export default App;

