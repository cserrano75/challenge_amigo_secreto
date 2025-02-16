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

function sortearAmigo() {

    //Defino un valor inicial para la variable que almacenara el indice del array
    let numeroElementos=0;

    //Evaluo si la lista de amigos no esta vacia

    if (listaAmigoSecreto.length>0) {
        //Sorteo al azar el numero de indice del array y le agrego 1 al numero de elementos
        let numeroElementos = Math.floor(Math.random() * listaAmigoSecreto.length)+1;
        
        //Resto uno del numero sorteado al azar para incluir el 0 en los resultados y 
        // sortear todos los numeros de indices del array
        
        resultado.innerHTML =(`Amigo sorteado : ${listaAmigoSecreto[numeroElementos-1]}`);
        
        //Limpio el cuadro de texto
        listaAmigos.innerHTML ="";
        limpiarCuadrodeTexto();
        
        //Limpio el array de los nombres de amigos
        listaAmigoSecreto = [];

        return;
    
    //Si la lista de amigos esta vacia y se intenta sortear un nombre, envio una alerta
    } else {
        //Si antes de sortear el amigo secreto no ha ingresado ningun nombre envio una alerta...
        alert ('Por favor, inserte un nombre antes de sortear');
    }
    
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
