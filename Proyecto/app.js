let parrafo = document.getElementById("reloj");
let hora = setInterval(actualizarHora,1000);
function actualizarHora(){
    let fecha = new Date();
    parrafo.textContent = fecha.toLocaleTimeString();
}


let boton=document.getElementById("enviar");
let mensaje= document.getElementById("enviado")

function cambiar(){
    boton.innerText="Enviando...";
    setTimeout(
        function(){
            boton.innerText="Enviar"
            mensaje.innerHTML="Su mensaje a sido enviado";
        },5000
    )
}

boton.addEventListener("click", cambiar);














