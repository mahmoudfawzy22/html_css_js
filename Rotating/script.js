let openBtn = document.getElementById("open");
let close = document.getElementById("close"); // corrected spelling
let container = document.querySelector(".container"); // returns a single element

openBtn.addEventListener("click", function () {
    container.classList.add("show-nav")
});

close.addEventListener("click", function(){
    container.classList.remove("show-nav")
})