const navegacion = document.querySelector("#menu")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector(".cerrarMenu")

abrir.addEventListener("click",()=> {
    navegacion.classList.add("visible");
})

cerrar.addEventListener("click",()=> {
    navegacion.classList.remove("visible");
})

