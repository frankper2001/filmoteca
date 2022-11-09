export const guardarEnStorage = (clave, elemento) => {
  //conseguir los elementos que ya tenemos en Localstorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  //comprobar si es un array
  if(Array.isArray(elementos)){
    //añadir elemento nuevo dentro del array
    elementos.push(elemento);
  }else{
    //crear array con elemento nuevo
    elementos=[elemento];
  }
  //guardar en el Localstorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  //devolver objeto
  return elemento;
}
