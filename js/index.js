// creamos una variable que mantine el dato que le damos en este cso (1)
let slideIndex = 1;
// llamamos a la funcion que muetra el slide inicial
showSlides(slideIndex);
// plusSliders nos ayuda a navegar por las diapositivas del carrucel
function plusSliders(n) {
    // y con la showSlides llamamos a la siguiente diapositiva
    showSlides(slideIndex += n);
}
// currentSlide(n) : nos sirve para mostrar una diapositiva especifica
function currentSlide(n) {
    // muestra la diapositiva 
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // variables locales
    let i;
    // obtiene todos los elementos con clase "sliders" (las diapositivas)
    let slides = document.querySelectorAll(".sliders");
    // obtenemos todos los puntos de navegacion con la clse "carr"
    let dots = document.querySelectorAll(".carr");
    // manejo de ciclo del carrucel con contador 
    if (n > slides.length) slideIndex = 1; //si llega al final vueve al inicio
    if (n < 1) slideIndex = slides.length; //si vamos antes de el inicio nos lleva a el final
    // oculta todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // remueve la clase "active" de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Muestra la diapositiva actual 
    slides[slideIndex - 1].style.display = "block";
    // Marca el punto correspondiente como activo 
    dots[slideIndex - 1].className += " active";
}
const tituloCancion = document.querySelector(".lista1 h3");
const nombreArtista = document.querySelector(".titulo-cancion h2");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion-1");

const inicioControl = document.getElementById("pausa-iniciar");
const botonReproducirPausar = document.querySelector(".boton-iniciar");


const botonAtras = document.querySelector(".botones button.boton-atras");
const botonAdelante = document.querySelector(".botones button.boton-siguiente");
const canciones = [
    {
        titulo: "Fue",
        nombre: "Soda Stereo",
        fuente: "music/Soda Stereo - Fue (Official Audio)(MP3_160K).mp3"
    },
    {
        titulo: "La La La",
        nombre: "Al2 El Aldeano",
        fuente: "music/5- La La La - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3"
    },
    {
        titulo: "A Mi",
        nombre: "Al2 El Aldeano",
        fuente: "music/8- A Mi - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3"
    },
    {
        titulo: "Perranderos",
        nombre: "Al2 El Aldeano",
        fuente: "music/13- Perranderos - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3"
    },
    {
        titulo: "Clint Eastwood",
        nombre: "Gorillaz",
        fuente: "music/Gorillaz - Clint Eastwood (Official Video)(MP3_160K).mp3"
    },
    {
        titulo: "Déjà Vu",
        nombre: "Gorillaz",
        fuente: "music/Gorillaz - Déjà Vu (ft. Alicaì Harley) Live from NW10 (Official Visualiser)(MP3_160K).mp3"
    },
    {
        titulo: "Désolé",
        nombre: "Gorillaz",
        fuente: "music/Gorillaz - Désolé ft.Fatoumata Diawara(Episode Two)(MP3_160K).mp3"
    },
    {
        titulo: "Smokin_ Love",
        nombre: "Taiwan",
        fuente: "music/Smokin_ Love(MP3_160K).mp3"
    },
    {
        titulo: "Smooth Criminal",
        nombre: "Michel jackson",
        fuente: "music/Smooth Criminal(MP3_160K).mp3"
    },
    {
        titulo: "Entre Caníbales",
        nombre: "Soda Stereo",
        fuente: "music/Soda Stereo - Entre Caníbales (Official Visualizer)(MP3_160K).mp3"
    },
];

let indiceCancionActual = 0
function actualizarInfoCancion() {

    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    tituloCancion.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata', function () { });

};
botonReproducirPausar.addEventListener('click', reproducirPausar);
function reproducirPausar() {
    reproducirCancion()
    if (cancion.onpause) {
        reproducirCancion();
    } else {
        pausarCancion()
    }
};

function reproducirCancion() {
    cancion.onplay()


};
actualizarInfoCancion();
function pausarCancion() {

};
