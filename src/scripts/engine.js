const pianoKeys = document.querySelectorAll(".key");
const lettersKey = document.querySelectorAll(".key span");
const volumeSlider = document.querySelector(".volume-slider input");

let keysDefault = [];
let audio = new Audio("/src/audios/a.wav");

const playTune = (key) => {
    audio.src = `/src/audios/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    keysDefault.push(key.dataset.key);
});

addEventListener("keydown", (keyboard) => {
    if (keysDefault.includes(keyboard.key)) {
        playTune(keyboard.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

function hideKeys() {
    lettersKey.forEach((letterKey) => {
        if (letterKey.style.display == "none") {
            letterKey.style.display = "block";
        } else {
            letterKey.style.display = "none";
        }
    });
};

volumeSlider.addEventListener("input", handleVolume);