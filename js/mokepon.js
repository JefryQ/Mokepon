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

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

//estas se comentan porque ya están siendo usadas, y por ello están duplicadas
/*let sectionSeleccionarMascota = document.getElementById('seleccionarMascota')

let sectionreiniciar = document.getElementById('boton-Reiniciar')*/

let mokepones = []

let ataqueJugador
let ataqueEnemigo

let opcionDeMokepones

let inHipodoge
let inCapipepo
let inRatigueya

let mascotaJugador

let vidasJugador = 3
let vidasEnemigo = 3

let imagen = document.getElementById("masco")
let imagen2 = document.getElementById("masco2")

class Mokepon {
    constructor(nombre, foto, imgEnemigo, vida, espejo) {
        this.nombre = nombre
        this.foto = foto
        this.imgEnemigo = imgEnemigo
        this.vida = vida
        this.espejo = espejo
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './image/Picsart_23-01-14_12-33-01-632.png', "./image/hipodoge.png" , 3)

let capipepo = new Mokepon('Capipepo', './image/Picsart_23-01-14_12-33-01-632.png', "./image/capipepo.png", 3)

let ratigueya = new Mokepon('Ratigueya', './image/Picsart_23-01-14_12-33-01-632.png',"./image/ratigueya.png",3, true)

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

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego(){

    //secciones del display(pantallas-vistas)
    sectionSeleccionarAtaque.style.display = 'none'
    sectionreiniciar.style.display = 'none'

    //iterar
    mokepones.forEach((mokepon)=> {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
                <label class="tarjeta_de_mokepon" for=${mokepon.nombre}>
                    <p style="
                    margin-top: 5px; 
                    margin-bottom: 5px;
                    ">${mokepon.nombre}</p>
                    <img src=${mokepon.foto} id=${mokepon.nombre} alt=${mokepon.nombre}>
                </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones


        inHipodoge = document.getElementById('Hipodoge')
        inCapipepo = document.getElementById('Capipepo')
        inRatigueya = document.getElementById('Ratigueya')
    })

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
// Al utilizar el nombre del objecto.id estamos haciendo uso de una sola fuente de verdad.

    // En resumen:
    // Todas las funciones que tengan información “a mano” que nosotros ponemos, la vamos a retirar, para poner sólo la información que existe en los objetos, es decir Usar una sola fuente de verdad.


    if(inHipodoge.checked){
        seleccion = inHipodoge.id
        // Cambia la fuente de la imagen por la nueva imagen
        imagen.src = "./image/hipodoge.png";
        imagen.style.transform = "scaleX(-1)"
        mascotaJugador = inHipodoge.id
    }

    else if(inCapipepo.checked){
        seleccion = inCapipepo.id
        // Cambia la fuente de la imagen por la nueva imagen
        imagen.src = "./image/capipepo.png";
        mascotaJugador = inCapipepo.id
    }

    else if(inRatigueya.checked){
        seleccion = inRatigueya.id
        // Cambia la fuente de la imagen por la nueva imagen
        imagen.src = "./image/ratigueya.png";
        mascotaJugador = inRatigueya.id
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

    extraerAtaques(mascotaJugador)

    seleccionarMascotaEnemigo()
}


function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques

        }
    }
    mostrarAtaques(ataques)
}

function seleccionarMascotaEnemigo(){

    //mascota aleatoria con arreglos
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)

    let mascotaSeleccionada = mokepones[mascotaAleatoria];
    spanMascotaEnemigo.innerHTML = mascotaSeleccionada.nombre;

    imagen2.src = mascotaSeleccionada.imgEnemigo;
    if (mascotaSeleccionada.espejo) {
        imagen2.style.transform = "scaleX(-1)";
    } else {
        imagen2.style.transform = "none";
    }
/*    if (mascotaAleatorio === 1){
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
    }*/
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