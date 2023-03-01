//Variables para varias funciones
const sectionSeleccionarAtaque = document.getElementById('seleccionarAtaque')
const botonMascota = document.getElementById('boton-Mascota')



//Variable función iniciar juego
const sectionreiniciar = document.getElementById('reiniciar')
const botonTierra = document.getElementById('boton-Tierra')
const botonFuego = document.getElementById('boton-Fuego')
const botonAgua = document.getElementById('boton-Agua')
const botonReiniciar = document.getElementById('boton-Reiniciar')

//Variable función seleccionarMascota
const sectionSeleccionarMascota = document.getElementById('seleccionarMascota')
const inHipodoge = document.getElementById('hipodoge')
const inCapipepo = document.getElementById('capipepo')
const inRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

//Variable función seleccionarMascotaEnemigo
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

//Variable función combate
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

//variables crearMensaje(resultadoCombate)
const ataquesDelJugador = document.getElementById('ataques-del-Jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

//Variables mensajeFinJuego(finCombate)
const sectionMensajes = document.getElementById('resultadoCombate')


//estas se comentan porque ya están siendo usadas, y por ello están duplicadas
/*let sectionSeleccionarMascota = document.getElementById('seleccionarMascota')

let sectionreiniciar = document.getElementById('boton-Reiniciar')*/

let mokepones = []

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

let imagen = document.getElementById("masco")
let imagen2 = document.getElementById("masco2")

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './image/pok-removebg-preview (1).png', 3)

let capipepo = new Mokepon('Capipepo', './image/pok-removebg-preview (1).png', 3)

let ratigueya = new Mokepon('Ratigueya', './image/pok-removebg-preview (1).png', 3)

//mokepones.push(hipodoge,capipepo,ratigueya)
hipodoge.ataques.push(
    { nombre:'💦',id:'boton-Agua' },
    { nombre:'💦',id:'boton-Agua' },
    { nombre:'💦',id:'boton-Agua' },
    { nombre:'🔥',id:'boton-Fuego' },
    { nombre:'🍃',id:'boton-Tierra' },
)

capipepo.ataques.push(
    { nombre:'🍃',id:'boton-Tierra' },
    { nombre:'🍃',id:'boton-Tierra' },
    { nombre:'🍃',id:'boton-Tierra' },
    { nombre:'💦',id:'boton-Agua' },
    { nombre:'🔥',id:'boton-Fuego' },
)

ratigueya.ataques.push(
    { nombre:'🔥',id:'boton-Fuego' },
    { nombre:'🔥',id:'boton-Fuego' },
    { nombre:'🔥',id:'boton-Fuego' },
    { nombre:'💦',id:'boton-Agua' },
    { nombre:'🍃',id:'boton-Tierra' },
)

function iniciarJuego(){

    //secciones del display(pantallas-vistas)
    sectionSeleccionarAtaque.style.display = 'none'
    sectionreiniciar.style.display = 'none'

    //Botón para seleccionar mascota
    botonMascota.addEventListener('click',seleccionarMascota)

    //Botones de ataque
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)

    //Botón reiniciar
    botonReiniciar.addEventListener('click', reiniciarJuego)

    
}

function seleccionarMascota(){


    const card = document.querySelector('.tarjeta_de_mokepon');

    card.addEventListener('mouseover', function() {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseout', function() {
        card.classList.remove('hovered');
    });

//secciones del display(pantallas-vistas)
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    let seleccion = '';

    if(inHipodoge.checked){
        seleccion = 'Hipogode'
        // Cambia la fuente de la imagen por la nueva imagen
        imagen.src = "./image/hipodoge.png";
        imagen.style.transform = "scaleX(-1)"
    }

    else if(inCapipepo.checked){
        seleccion = 'Capipepo'
        // Cambia la fuente de la imagen por la nueva imagen
        imagen.src = "./image/capipepo.png";
    }

    else if(inRatigueya.checked){
        seleccion = 'Ratigueya'
        // Cambia la fuente de la imagen por la nueva imagen
        imagen.src = "./image/ratigueya.png";
    }
    else{
        Toastify({
            text: 'Selecciona un Mokepon',
            backgroundColor: '#c28378',
        }).showToast();
        sectionSeleccionarMascota.style.display = 'flex';
        sectionSeleccionarAtaque.style.display = 'none';
        return;
    }
    spanMascotaJugador.innerHTML = seleccion;

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)

    if (mascotaAleatorio === 1){
        spanMascotaEnemigo.innerHTML = 'Hipogode'
        // Cambia la fuente de la imagen por la nueva imagen
        imagen2.src = "./image/hipodoge.png";
    }
    else if (mascotaAleatorio === 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        // Cambia la fuente de la imagen por la nueva imagen
        imagen2.src = "./image/capipepo.png";
    }
    else if (mascotaAleatorio === 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        // Cambia la fuente de la imagen por la nueva imagen
        imagen2.src = "./image/ratigueya.png";
        imagen2.style.transform = "scaleX(-1)"
    }
}

//Ataques jugador
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

//Ataques Enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio === 1){
        ataqueEnemigo = 'FUEGO' 
    }
    else if (ataqueAleatorio === 2){
        ataqueEnemigo = 'AGUA' 
    }
    else if (ataqueAleatorio === 3){
        ataqueEnemigo = 'TIERRA' 
    }

    combate()
}

//Combate
function combate(){

    //Botón mascota se deshabilita
    botonMascota.disabled = true

    // COMBATE
        if (ataqueEnemigo == ataqueJugador){
            crearMensaje("EMPATE")
        }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
            crearMensaje("🎉 GANASTE 🎉")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
            crearMensaje("🎉 GANASTE 🎉")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
            crearMensaje("🎉 GANASTE 🎉")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else{
            crearMensaje("😵PERDISTE")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador

        }
    revisarVidas()

}

//Función para saber cuando las vidas llegan a cero y determinar si ganaste o perdiste
function revisarVidas(){
    if(vidasEnemigo == 0){
        mensajeFinJuego("FELICITACIONES HAS GANADO 🎉🎉🎉🎉")
    }else if (vidasJugador == 0){
        mensajeFinJuego("PERDISTE, SUERTE LA PROXIMA 💪")
    }
    

}

function crearMensaje(resultadoCombate){

    // crea un nuevo div
    // y añade contenido

    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");

    sectionMensajes.innerHTML = resultadoCombate
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)

}

function mensajeFinJuego(finCombate){

    // crea un nuevo div
    // y añade contenido
    sectionMensajes.innerHTML = finCombate

    botonMascota.disabled = true

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true



    sectionSeleccionarMascota.style.display = 'none'

    sectionreiniciar.style.display = 'block'

}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function reiniciarJuego(){
    location.reload()
}



window.addEventListener('load', iniciarJuego)