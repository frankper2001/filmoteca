import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

  const titulo_componente ="Editar película";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    //conseguir target del evento
    let target = e.target;

    //buscar el indice del objeto a actualizar
    const pelis_almacenadas = conseguirPeliculas();
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

    //crear objeto con ese id de ese indice, titulo y descripcion del formulario
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    //actualizar el elemento con ese indice
    pelis_almacenadas[indice] = peli_actualizada;

    //guardar el nuevo array en el localStorage
    localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

    //actualizar estados
    setListadoState(pelis_almacenadas);
    setEditar(0);

  }

  return (
    <div className='edit_form'>
      <h4 className='title'>{titulo_componente}</h4>
      <form onSubmit={ e => guardarEdicion(e, peli.id)}>
        <input  type="text"
                name="titulo"
                className='titulo_editado'
                defaultValue={peli.titulo}/>
        <textarea
                name="descripcion"
                className='descripcion_editada'
                defaultValue={peli.descripcion}/>
        <input type="submit" className='editar' value="Actualizar" />
      </form>
    </div>
  )
}
