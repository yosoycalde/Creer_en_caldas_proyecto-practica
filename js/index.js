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
// --- INICIO NUEVO REPRODUCTOR (ACTUALIZADO) ---
const audio = new Audio();
const iniciar = document.getElementById('iniciar-cancion');
const anterior = document.getElementById('cancion-anterior');
const siguiente = document.getElementById('cancion-siguiente');
const contenedorProgreso = document.getElementById('contenedor-proceso-cancion');
const progreso = document.getElementById('progreso');
const tiempoCancion = document.getElementById('tiempo-actual');
const duracionCancion = document.getElementById('duracion');
const nivelVolumen = document.getElementById('volumen');
const cancionInfo = document.getElementById('cancion-info');
const listaCanciones = document.getElementById('lista-canciones');
const albumArt = document.getElementById('albun-musica');

// Lista predefinida de canciones (puedes personalizarla)
const canciones = [
    {
        title: "5- La La La ",
        artist: "Al2 El Aldeano",
        path: "music/5- La La La - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/5- La La La - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).jpg"
    },
    {
        title: "Fue",
        artist: "Soda Stereo",
        path: "music/Soda Stereo - Fue (Official Audio)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Soda Stereo - Fue (Official Audio)(MP3_160K).jpg"
    },
    {
        title: "A Mi",
        artist: "Al2 El Aldeano",
        path: "music/8- A Mi - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/5- La La La - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).jpg"
    },
    {
        title: " Perranderos",
        artist: " Al2 El Aldeano",
        path: "music/13- Perranderos - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/5- La La La - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).jpg"
    },
    {
        title: " Clint Eastwood",
        artist: "Gorillaz",
        path: "music/Gorillaz - Clint Eastwood (Official Video)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Gorillaz - Clint Eastwood (Official Video)(MP3_160K).jpg"
    },
    {
        title: "Déjà Vu",
        artist: "Gorillaz",
        path: "music/Gorillaz - Déjà Vu (ft. Alicaì Harley) Live from NW10 (Official Visualiser)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Gorillaz - Déjà Vu (ft. Alicaì Harley) Live from NW10 (Official Visualiser)(MP3_160K).jpg"
    },
    {
        title: "Désolé",
        artist: "Gorillaz",
        path: "music/Gorillaz - Désolé ft. Fatoumata Diawara (Episode Two)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Gorillaz - Désolé ft. Fatoumata Diawara (Episode Two)(MP3_160K).jpg"
    },
    {
        title: "Smokin Love",
        artist: "taiwan",
        path: "music/Smokin_ Love(MP3_160K).mp3",
        cover: "recursos/imgMusica/Smokin_ Love(MP3_160K).jpg"
    },
    {
        title: "Smooth Criminal",
        artist: "Alien Ant Farm",
        path: "music/Smooth Criminal(MP3_160K).mp3",
        cover: "recursos/imgMusica/Smooth Criminal(MP3_160K).jpg"
    },
    {
        title: "Entre Caníbales",
        artist: "Soda Stereo",
        path: "music/Soda Stereo - Entre Caníbales (Official Visualizer)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Soda Stereo - Entre Caníbales (Official Visualizer)(MP3_160K).jpg"
    }
]

let cancionActual = 0;

function actualizarLista() {
    listaCanciones.innerHTML = '';
    canciones.forEach((cancion, index) => {
        const div = document.createElement('div');
        div.classList.add('cancion');
        if (index === cancionActual) div.classList.add('activa');
        div.innerHTML = `
            <span class="numero-cancion">${index + 1}</span>
            <div class="info-cancion">
                <div class="titulo">${cancion.title}</div>
                <small class="artista" style="opacity: 0.7">${cancion.artist}</small>
            </div>
        `;
        div.addEventListener('click', () => cargarCancion(index));
        listaCanciones.appendChild(div);
    });
}

function cargarCancion(index) {
    if (index >= 0 && index < canciones.length) {
        cancionActual = index;
        const cancion = canciones[index];
        audio.src = cancion.path;
        cancionInfo.textContent = `${cancion.title} - ${cancion.artist}`;

        // Actualizar imagen del álbum
        if (albumArt && cancion.cover) {
            albumArt.innerHTML = `<img src="${cancion.cover}" alt="Album Art">`;
        } else if (albumArt) {
            albumArt.innerHTML = '<div class="por-defecto">🎵</div>';
        }

        audio.play()
            .then(() => {
                iniciar.textContent = '⏸';
            })
            .catch(error => {
                console.error('Error playing audio:', error);
                cancionInfo.textContent = 'Error: No se pudo cargar el audio';
            });

        actualizarLista();
    }
}

iniciar.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        iniciar.textContent = '⏸';
    } else {
        audio.pause();
        iniciar.textContent = '▶';
    }
});

anterior.addEventListener('click', () => {
    cargarCancion(cancionActual - 1 < 0 ? canciones.length - 1 : cancionActual - 1);
});

siguiente.addEventListener('click', () => {
    cargarCancion((cancionActual + 1) % canciones.length);
});

audio.addEventListener('timeupdate', actualizarProgreso);
audio.addEventListener('ended', () => cargarCancion((cancionActual + 1) % canciones.length));

function actualizarProgreso() {
    const { duration, currentTime } = audio;
    const porcentaje = (currentTime / duration) * 100;
    progreso.style.width = `${porcentaje}%`;

    // Actualizar tiempos
    const minActual = Math.floor(currentTime / 60);
    const segActual = Math.floor(currentTime % 60);
    const minDur = Math.floor(duration / 60);
    const segDur = Math.floor(duration % 60);

    tiempoCancion.textContent = `${minActual}:${segActual.toString().padStart(2, '0')}`;
    if (!isNaN(duration)) {
        duracionCancion.textContent = `${minDur}:${segDur.toString().padStart(2, '0')}`;
    }
}

contenedorProgreso.addEventListener('click', function (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

nivelVolumen.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

actualizarLista();
cargarCancion(0);