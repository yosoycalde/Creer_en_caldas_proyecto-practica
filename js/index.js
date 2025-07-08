// --- ANIMACIÓN PARA BOTONES DEL HEADER ---
document.addEventListener('DOMContentLoaded', () => {
  // Animación para los botones del header
  const headerBtns = document.querySelectorAll('.navbar .btn');
  headerBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('animar-header-btn'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('animar-header-btn'));
  });
});
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
        artist: "Don rodolfo :)",
        path: "music/Adonay(MP3_160K).mp3",
        cover: "recursos/imgMusica/Adonay(MP3_160K).jpg"
    },
    {
        title: "Drive",
        artist: "The Weeknd",
        path: "music/The Weeknd - Drive (Audio)(MP3_160K).mp3",
        cover: "recursos/imgMusica/The Weeknd - Drive (Audio)(MP3_160K).jpg"
    },
    {
        title: "La Vuelta",
        artist: "Mañas ru fino, Feid",
        path: "music/Feid_ Mañas Ru-Fino - La Vuelta (Official Video)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Feid_ Mañas Ru-Fino - La Vuelta (Official Video)(MP3_160K).jpg"
    },
    {
        title: "2-Sangre",
        artist: "Al2 El Aldeano",
        path: "music/2- Sangre - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/5- La La La - Al2 El Aldeano _ Dj Figu (Audio Oficial)(MP3_160K).jpg"
    },
    {
        title: "Fear of The Dark",
        artist: "Iron Maiden",
        path: "music/Fear of the Dark (2015 Remaster)(MP3_160K).mp3",
        cover: "recursos/imgMusica/fear-of-the-dark.jpg"
    },
    {
        title: "Frio sur",
        artist: "Mañas Ru Fino",
        path: "music/Frío Sur - Mañas Ru-Fino (Prod. Ru-Fino _ DeeJohend)(M4A_128K).m4a",
        cover: "recursos/imgMusica/frio-sur.jpg"
    },
    {
        title: "La Vacuna",
        artist: "Orishas",
        path: "music/La Vacuna(MP3_160K).mp3",
        cover: "recursos/imgMusica/la-vacuna.jpg"
    },
    {
        title: "Sangre en los ojos",
        artist: "Mañas Rufino",
        path: "music/Mañas Ru-Fino - Sangre En Los Ojos (Prod. Ru-Fino _ DeeJohend) (Vértigo 2024)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Sangre-enlos-ojos.jpg"
    },
    {
        title: "Tierra de nadie",
        artist: "Mañas Rufino",
        path: "music/Mañas Ru-Fino - Tierra de Nadie (Video oficial) (Prod. Ru-Fino _ DeeJohend) Vértigo 2024(MP3_160K).mp3",
        cover: "recursos/imgMusica/Tierra-de-nadie.jpg"
    },
    {
        title: "Medio Muerto",
        artist: "Mañas Rufino",
        path: "music/Medio Muerto - Mañas Ru-Fino (Prod. Ru-Fino _ DeeJohend) Vértigo 2024(MP3_160K).mp3",
        cover: "recursos/imgMusica/Medio-Muerto.jpg"
    },
    {
        title: "4Eva",
        artist: "Penyair, Oblivion",
        path: "music/Oblivion_s Mighty Trash _ _PenyairOficial  - 4EVA (prod. Diavlitx _ Barbatos) (Video Oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/4Eva.jpg"
    },
    {
        title: "1.9.9.9",
        artist: "Orishas",
        path: "music/Orishas -  1.9.9.9 _ Album A Lo Cubano(MP3_160K).mp3",
        cover: "recursos/imgMusica/1999.jpg"
    },
    {
        title: "300 Kilos",
        artist: "Orishas",
        path: "music/Orishas - 300 Kilos _ Album Emigrante(MP3_160K).mp3",
        cover: "recursos/imgMusica/300.jpg"
    },
    {
        title: "537 C.U.B.A",
        artist: "Mañas Rufino",
        path: "music/Orishas - 537 C.U.B.A _ Album A Lo Cubano(MP3_160K).mp3",
        cover: "recursos/imgMusica/1999.jpg"
    },
    {
        title: "El Rey De La Pachacha",
        artist: "Orishas",
        path: "music/Orishas - El Rey De La Pachacha _ Album Emigrante(MP3_160K).mp3",
        cover: "recursos/imgMusica/300.jpg"
    },
    {
        title: "Mistica",
        artist: "Orishas",
        path: "music/Orishas - Mistica _ Album A Lo Cubano(MP3_160K).mp3",
        cover: "recursos/imgMusica/1999.jpg"
    },
    {
        title: "Represent",
        artist: "Orishas",
        path: "music/Orishas - Represent _ Album A Lo Cubano(MP3_160K).mp3",
        cover: "recursos/imgMusica/1999.jpg"
    },
    {
        title: "A mi",
        artist: "Penyair",
        path: "music/Penyair - A mi x _EddyMugre (visualizer)(MP3_160K).mp3",
        cover: "recursos/imgMusica/ami.jpg"
    },
    {
        title: "Agoniaz",
        artist: "Penyair",
        path: "music/Penyair - Agoniaz ft Manny ___ (video oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Agoniaz.jpg"
    },
    {
        title: "Borregos",
        artist: "Penyair",
        path: "music/Penyair - Borregos ft hidden 351 x _djspizike5996 (visualizer)(MP3_160K).mp3",
        cover: "recursos/imgMusica/Borregos.jpg"
    },
    {
        title: "MA",
        artist: "Penyair",
        path: "music/Penyair - Ma ft  _CokoYamasaki229 (Visualizer)(MP3_160K).mp3",
        cover: "recursos/imgMusica/ma.jpg"
    },
    {
        title: "Muerte",
        artist: "Penyair",
        path: "music/Penyair - Muerte 💀 (Video Oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/muerte.jpg"
    },
    {
        title: "No sabia",
        artist: "Mañas Rufino ,  penyair",
        path: "music/Penyair - No sabia que sabia ft Mañas Ru-Fino prod. Juan Sinatra (video oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/nosabia.jpg"
    },
    {
        title: "Pesos, Dolares, y Euros",
        artist: "Mañas Rufino , Piel Roja",
        path: "music/PIEL ROJA _ MAÑAS  RU - FINO - PESOS_ DÓLARES Y EUROS ( PROD KAS RULES)(MP3_160K).mp3",
        cover: "recursos/imgMusica/pesos.jpg"
    },
    {
        title: "Ganado El Round",
        artist: "Realida Mental",
        path: "music/Realidad Mental - Ganando el round ft. _PenyairOficial x _LionFiah (video oficial)(MP3_160K).mp3",
        cover: "recursos/imgMusica/round.jpg"
    },
    {
        title: "Ya veras",
        artist: "Penyair , Realidad Mental",
        path: "music/Realidad Mental - Ya Verás ft. _PenyairOficial Prod _EddyMugre  _AlkaProduce (Visualizer)(MP3_160K).mp3",
        cover: "recursos/imgMusica/yaveras.jpg"
    },
    {
        title: "Temor a Dios",
        artist: "Mañas Rufino",
        path: "music/Temor A Dios - Mañas Ru-Fino (Prod. Ru-Fino _ DeeJohend) Vértigo 2024(MP3_160K).mp3",
        cover: "recursos/imgMusica/temoradios.jpg"
    },
    {
        title: "Babe Ruthless",
        artist: "TERROR REID",
        path: "music/TERROR REID - Babe Ruthless Ft LU (Official Lyric Video)(MP3_160K).mp3",
        cover: "recursos/imgMusica/babe.jpg"
    },
    {
        title: "Bounce Back",
        artist: "Terror Reid",
        path: "music/Terror Reid - Bounce Back(MP3_160K).mp3",
        cover: "recursos/imgMusica/back.jpg"
    },
    {
        title: "First Blood",
        artist: "Terror Reid",
        path: "music/TERROR REID - First Blood (Official Lyric Video)(MP3_160K).mp3",
        cover: "recursos/imgMusica/blood.jpg"
    },
    {
        title: "I.D.F.A",
        artist: "TERROR REID",
        path: "music/TERROR REID - I.D.F.A (Official Lyric Video)(MP3_160K).mp3",
        cover: "recursos/imgMusica/i.d.f.a.jpg"
    },
    {
        title: "SAY NO MO",
        artist: "TERROR REID",
        path: "music/TERROR REID - SAY NO MO_(MP3_160K).mp3",
        cover: "recursos/imgMusica/saynomo.jpg"
    },
    {
        title: "When Its All Gone",
        artist: "Terror Reid",
        path: "music/Terror Reid - When It_s All Gone_(MP3_160K).mp3",
        cover: "recursos/imgMusica/whenits.jpg"
    },
    {
        title: "The Trooper",
        artist: "Iron Maiden",
        path: "music/The Trooper (2015 Remaster)(MP3_160K).mp3",
        cover: "recursos/imgMusica/trhopper.jpg"
    },
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

// Animaciones visuales para mejorar la experiencia
function animarAlbumArt() {
    if (albumArt) {
        albumArt.classList.remove('animar-album');
        // Forzar reflow para reiniciar la animación
        void albumArt.offsetWidth;
        albumArt.classList.add('animar-album');
    }
}

function animarBoton(boton) {
    if (boton) {
        boton.classList.remove('animar-boton');
        void boton.offsetWidth;
        boton.classList.add('animar-boton');
    }
}

// Animar portada al cambiar de canción
const originalCargarCancion = cargarCancion;
cargarCancion = function(index) {
    originalCargarCancion(index);
    animarAlbumArt();
};

// Animar botones de control
iniciar.addEventListener('click', () => animarBoton(iniciar));
anterior.addEventListener('click', () => animarBoton(anterior));
siguiente.addEventListener('click', () => animarBoton(siguiente));

// Animar like
if (likeBtn) {
    likeBtn.addEventListener('click', () => animarBoton(likeBtn));
}

// Animar barra de progreso al hacer seek
contenedorProgreso.addEventListener('click', () => {
    progreso.classList.remove('animar-progreso');
    void progreso.offsetWidth;
    progreso.classList.add('animar-progreso');
});

actualizarLista();
cargarCancion(0);

// --- ANIMACIONES PARA EL RESTO DE LA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in para todas las secciones principales y faltantes
  const secciones = document.querySelectorAll(`
    .container,
    .carrucel-img,
    .fondo-pie-de-paguina,
    .navbar,
    .una-mirada,
    .row,
    .col-12,
    .col-md-6,
    .col-lg-4,
    .col-md-5,
    .col-md-6,
    .col-12.col-md-6,
    .col-12.col-lg-8,
    .col-md-6.d-flex,
    .col-md-6.flex-column,
    .col-md-6.mb-4,
    .col-md-6.justify-content-between,
    .col-md-6.align-items-center,
    .col-md-6.d-flex.flex-column.justify-content-between,
    .col-md-6.d-flex.flex-column,
    .col-md-6.d-flex.flex-column.justify-content-between,
    .col-md-6.d-flex.flex-column.align-items-center,
    .col-md-6.d-flex.flex-column.justify-content-center,
    .col-md-6.d-flex.flex-column.align-items-center.justify-content-center,
    .col-md-6.d-flex.flex-column.justify-content-between.align-items-center,
    .col-md-6.d-flex.flex-column.justify-content-between.align-items-center.order-2,
    .col-md-6.d-flex.flex-column.justify-content-between.align-items-center.order-2.ms-3.h-100
  `);
  secciones.forEach((sec, i) => {
    sec.classList.add('fade-in');
    sec.style.animationDelay = `${i * 0.08}s`;
  });

  // Animación de resalte al pasar el mouse sobre tarjetas de noticias
  const noticias = document.querySelectorAll('.noticia-contenedor1, .noticia-contenedor2, .noticia-contenedor3, .noticia-contenedor4');
  noticias.forEach(noticia => {
    noticia.addEventListener('mouseenter', () => noticia.classList.add('animar-tarjeta'));
    noticia.addEventListener('mouseleave', () => noticia.classList.remove('animar-tarjeta'));
  });

  // Animación de resalte para "ingresa aquí"
  const ingresaBtns = document.querySelectorAll('.ingresa-aqui-1');
  ingresaBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('animar-ingresa'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('animar-ingresa'));
  });

  // Animación de rebote para imágenes de empresas en el carrusel
  const carruselImgs = document.querySelectorAll('.carousel-item img');
  carruselImgs.forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('animar-img-carrusel'));
    img.addEventListener('mouseleave', () => img.classList.remove('animar-img-carrusel'));
  });

  // Animación de resalte para tarjetas de viejitos felices y trabajador
  const empresarios = document.querySelectorAll('.los-nuevos-empresarios1');
  empresarios.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('animar-tarjeta'));
    card.addEventListener('mouseleave', () => card.classList.remove('animar-tarjeta'));
  });

  // Animación de rebote para imágenes del pie de página
  const pieImgs = document.querySelectorAll('.pie-de-paguina img');
  pieImgs.forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('animar-img-carrusel'));
    img.addEventListener('mouseleave', () => img.classList.remove('animar-img-carrusel'));
  });

  // Animación para los botones del header
  const headerBtns = document.querySelectorAll('.navbar .btn');
  headerBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('animar-header-btn'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('animar-header-btn'));
  });

  // Animación de resalte para la tarjeta de 'Foro lideres de la región'
  const foroLideres = document.querySelectorAll('.lideres-de-la-region');
  foroLideres.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('animar-tarjeta'));
    card.addEventListener('mouseleave', () => card.classList.remove('animar-tarjeta'));
  });

  // Animación de resalte para la tarjeta de 'Eventos'
  const eventos = document.querySelectorAll('.eventos-info');
  eventos.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('animar-tarjeta'));
    card.addEventListener('mouseleave', () => card.classList.remove('animar-tarjeta'));
  });

  // Animación de rebote para la imagen de 'Foro lideres de la región'
  const foroImgs = document.querySelectorAll('.lideres-de-la-region, .que-tanto-conoces');
  foroImgs.forEach(el => {
    // Si es imagen, aplicar directo; si es contenedor, buscar imágenes dentro
    if (el.tagName === 'IMG') {
      el.addEventListener('mouseenter', () => el.classList.add('animar-img-carrusel'));
      el.addEventListener('mouseleave', () => el.classList.remove('animar-img-carrusel'));
    } else {
      el.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', () => img.classList.add('animar-img-carrusel'));
        img.addEventListener('mouseleave', () => img.classList.remove('animar-img-carrusel'));
      });
    }
  });

  // Animación de rebote para la imagen de 'Eventos'
  const eventosImgs = document.querySelectorAll('.eventos-info, .familia-comedor, .img-samana img, .samana-img');
  eventosImgs.forEach(el => {
    if (el.tagName === 'IMG') {
      el.addEventListener('mouseenter', () => el.classList.add('animar-img-carrusel'));
      el.addEventListener('mouseleave', () => el.classList.remove('animar-img-carrusel'));
    } else {
      el.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', () => img.classList.add('animar-img-carrusel'));
        img.addEventListener('mouseleave', () => img.classList.remove('animar-img-carrusel'));
      });
    }
  });
});