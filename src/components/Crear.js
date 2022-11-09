import React from 'react'
import { useState } from 'react';
import { guardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

  const tituloComponente = "Añadir película";
  const [peliState, setPeliState] = useState({
    id: '',
    titulo: '',
    descripcion: ''
  });

  const {titulo, descripcion}= peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();
    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    
    //Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    //guardar estado
    setPeliState(peli);

    //actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, peli];
    })

    //guardar en Localstorage
    guardarEnStorage("pelis", peli);

  }

  
  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        {/*Condicional para visualizar mensaje de peli creada*/}
        {(titulo && descripcion) && 'Has creado la pelicula: '+titulo}


        <form onSubmit={conseguirDatosForm}>
            <input type="text" 
                   id="titulo"
                   name="titulo"
                   placeholder="Titulo" />

            <textarea id="descripcion" 
                      name="descripcion"
                      placeholder="Descripción"></textarea>

            <input type="submit" 
                   id="save" 
                   value="Guardar" />
        </form>

    </div>
  )
}
