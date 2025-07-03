// Código del carrusel viejo eliminado
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
const likeBtn = document.getElementById('botao');

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
    },
    {
        title: "Adonay",
        artist: "Sin registro",
        path: "music/Adonay(MP3_160K).mp3",
        cover: "recursos/imgMusica/Soda Stereo - Entre Caníbales (Official Visualizer)(MP3_160K).jpg"
    },
    {
        title: "Drive",
        artist: "The Weeknd",
        path: "music/The Weeknd - Drive (Audio)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Soda Stereo - Entre Caníbales (Official Visualizer)(MP3_160K).jpg"
    }
]

let cancionActual = 0;

// Array para almacenar los likes de cada canción
let likesPorCancion = new Array(canciones.length).fill(0);

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

function actualizarLikeBtn() {
    if (likeBtn) {
        likeBtn.innerHTML = likesPorCancion[cancionActual] + '♡';
    }
}

function adicionarLike() {
    likesPorCancion[cancionActual]++;
    actualizarLikeBtn();
}

if (likeBtn) {
    likeBtn.onclick = adicionarLike;
}

function cargarCancion(index) {
    if (index >= 0 && index < canciones.length) {
        cancionActual = index;
        const cancion = canciones[index];
        audio.src = cancion.path;
        cancionInfo.textContent = `${cancion.title} - ${cancion.artist}`;

        // Actualizar imagen del álbum
        if (albumArt && cancion.cover) {
            albumArt.innerHTML = `<img src="${cancion.cover}" alt="Album Art" class="album-img-${index}">`;
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
        actualizarLikeBtn(); // Actualiza el contador de likes al cambiar de canción
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