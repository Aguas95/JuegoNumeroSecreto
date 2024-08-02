let numeroSecreto = 0;//Ambito o alcance global
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

/*Declarar la funcion, ejemplo: para elemento('h1' Seria titulo)
 y texto('El texto que queremos colocar').
 document.querySelector la que nos permite acceder a elementos
 especificos como: 'h1','p', etc..
 */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);



function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario'). value); 
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        } 
        intentos++;
        limpiarCaja();
    }
    return;
}

/* La funcion - document.getElementById - Retorna, o da el objeto por su id
que llama directamente en este caso a la línea en HTML como lo es
el querySelector que selecciona directamente (ejem. objeto 'p' o 'h1')
entonces agregamos el atrivuto  .value  para obtener el valor ingresado 
por el usuario 
*/
function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //Podemos reducir el codigo a esta línea que tambien es lo mismo
    // document.querySelector('#valorUsuario').value = '';  o usar
    document.getElementById('valorUsuario').value = ''; //  .value para un valor especifico
     
}

//Cuando una variable sale de la funcion es llamada 
function generarNumeroSecreto() {//Ambito o alcance de bloque (cuando esta en la funcion)
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
         //Si el numeroGenerado esta en la lista realizamos una accción
     if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
     } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
    

}

function condicionesIniciales(){
    //console.log("Esta entrando condiciones iniciales");
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //console.log("Entro reiniciar juego");
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();





/*function saludo(){ //Ejercicio 1
    console.log("¡Hola mundo!");
}
saludo();
*/ 


/*function nombreComoParametro(){ //Ejercicio 2
    let numbreDelUsuario = prompt("Escribe un nombre");
    console.log(`"¡Hola, ${numbreDelUsuario}`);
}
nombreComoParametro();
*/


/*function multiplicaPorDos(number){ //Ejercicio 3
    return number * 2;
}

let resultado1 = multiplicaPorDos(55);
console.log(resultado1);
*/


/*function promedioNumeros(a, b, c){ //Ejercicio 4
    return (a + b + c ) / 3;
}
let promedio = promedioNumeros(15, 11, 20);
console.log(promedio);
*/


/*function mayorAmbos(a, b){ //ejercicio 5
    return a > b ? a : b;
}
let resultado = mayorAmbos(10, 8);
console.log(resultado);
*/


/*function multiplicadoPorSiMismo(a){  //Ejercicio 6
    return a * a;
}
let multiplicado = multiplicadoPorSiMismo(10);
console.log(multiplicado);
*/

