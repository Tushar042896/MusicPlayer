let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

let songs = [
    "music/1.mp3","music/2.mp3","music/3.mp3","music/4.mp3","music/5.mp3",
    // Add more song URLs here
];

// Initialize current song index
let currentSongIndex = 0;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;


}
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play")

    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;

    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play")

}


// Backward and Forward button functionality
document.querySelector('.controls').addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-backward')) {
        // Change to the previous song
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        song.src = songs[currentSongIndex];
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    } else if (event.target.classList.contains('fa-forward')) {
        // Change to the next song
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        song.src = songs[currentSongIndex];
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
});
