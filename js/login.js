
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regexEmail.test(email.value)) {
        warnings += `El email no es válido. Por favor, ingrese uno correcto. <br>`
        enviar=true
    }

    if (password.value.length <8) {
        warnings += `La contraseña debe tener un mínimo de 8 dígitos <br>`
        enviar=true
    }

    if (enviar) {
        parrafo.innerHTML = warnings 
    }else {
             window.location="index.html"
        }
    }
)







//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

