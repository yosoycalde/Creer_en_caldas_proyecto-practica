const audio = new Audio();
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');
const songInfo = document.getElementById('song-info');
const playlist = document.getElementById('playlist');

// Lista predefinida de canciones
const songs = [
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


];

let currentSongIndex = 0;

function updatePlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const div = document.createElement('div');
        div.classList.add('playlist-item');
        if (index === currentSongIndex) {
            div.classList.add('active');
        }
        div.innerHTML = `
                    <span class="song-number">${index + 1}</span>
                    <div class="song-info">
                        <div>${song.title}</div>
                        <small style="opacity: 0.7">${song.artist}</small>
                    </div>
                `;
        div.addEventListener('click', () => loadSong(index));
        playlist.appendChild(div);
    });
}

function loadSong(index) {
    if (index >= 0 && index < songs.length) {
        currentSongIndex = index;
        const song = songs[index];
        audio.src = song.path;
        songInfo.textContent = `${song.title} - ${song.artist}`;

        // Actualizar imagen del álbum
        const albumArt = document.getElementById('album-art');
        if (song.cover) {
            albumArt.innerHTML = `<img src="${song.cover}" alt="Album Art">`;
        } else {
            albumArt.innerHTML = '<div class="default-art">🎵</div>';
        }

        audio.play()
            .then(() => {
                playBtn.textContent = '⏸';
            })
            .catch(error => {
                console.error('Error playing audio:', error);
                songInfo.textContent = 'Error: No se pudo cargar el audio';
            });

        updatePlaylist();
    }
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});

prevBtn.addEventListener('click', () => {
    loadSong(currentSongIndex - 1);
});

nextBtn.addEventListener('click', () => {
    loadSong(currentSongIndex + 1);
});

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => loadSong(currentSongIndex + 1));

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
    if (!isNaN(duration)) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
    }
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value / 100;
});

// Cargar la primera canción al iniciar
updatePlaylist();
loadSong(0);