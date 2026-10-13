let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = sound;

    btn.addEventListener("click", () => {
        stopSound();
        document.getElementById(sound).play();
    });

    let btns = document.querySelector(".buttons");
    btns.appendChild(btn);
});

function stopSound(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}