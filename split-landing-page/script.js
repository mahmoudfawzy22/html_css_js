let left = document.querySelector(".left");
let right = document.querySelector(".right")
let container = document.querySelector(".container");

left.addEventListener("mouseenter", ()=> container.classList.add("hover-left"))
right.addEventListener("mouseenter", ()=> container.classList.add("hover-right"))
