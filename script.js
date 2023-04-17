let cantidadPeliculas = 0;
const botonRegistro = document.getElementById("boton-registro");
const cantidadElemento = document.getElementById("cantidad");

botonRegistro.addEventListener("click", () => {
  cantidadPeliculas++;
  cantidadElemento.textContent = cantidadPeliculas.toString();
});
