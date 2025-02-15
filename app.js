// Esta aplicacion permite sortear un nombre al azar de una lista previamente ingresada para el juego 
// del amigo secreto

//Se valida el ingreso para que el usuario este obligado a ingresar un nombre

const listaAmigos = document.getElementById("listaAmigos");
let listaAmigoSecreto = []; //Defino el valor inicial del array
let nombreAmigo="";
let nombre="";
let coincidencia=false; //Defino esta variable para evaluar si hay coincidencias
listaAmigos.innerHTML ="";


function agregarAmigo() {

    //Limpio el texto del resultado 
    resultado.innerHTML =""

    //Obtengo el valor ingresado por el usuario en el cuadro de texto...
    let nombreAmigo = document.getElementById('amigo').value;

    //Si no ha ingresado un nombre y presiona Agregar envio una alerta...
    if (nombreAmigo ==='') {
        alert ('Por favor, inserte un nombre');
        limpiarCuadrodeTexto();

    } else {

        limpiarCuadrodeTexto();
        
        validarDuplicidad(nombreAmigo);
        
        //Si la funcion anterior no encontro duplicados, continuo con el proceso...
        if (coincidencia===false) {
            listaAmigoSecreto.push(nombreAmigo);
            listaAmigos.innerHTML += `<li> ${nombreAmigo}</li>`;
        }
                
    }
    return;
}

function validarDuplicidad(nombre) {
    //Recorro el array buscando el nombre ingresado
    for (let largoArray=0; largoArray < listaAmigoSecreto.length;largoArray++) {

        //Si encuentro coincidencia, envio la alerta al usuario
        //Adicionalmente he definido una variable global que me indica si la condicion se cumple o no
        //Si hay coincidencias cierro el proceso aca, le envio una alerta al usuario y limpio el cuadro de texto

        if (nombre===listaAmigoSecreto[largoArray]) {
            coincidencia=true;
            alert ("El nombre ya está ingresado");
        }

    limpiarCuadrodeTexto();
    }
    return;
}

function limpiarCuadrodeTexto() {
    //Limpio el cuadro de texto
    document.querySelector('#amigo').value = '';
}
