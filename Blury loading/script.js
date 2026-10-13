let background = document.querySelector(".bg");
let loadingText = document.querySelector(".loading-text");

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
    if(load < 99){ 
        load++;
        let opacity = scale(load, 0, 100, 1, 0); 
        loadingText.style.opacity = `${opacity}`; 
        loadingText.innerHTML = `${load}%`;
        let blur = scale(load, 0, 100, 30, 0);
        background.style.filter = `blur(${blur}px)`
    }
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
