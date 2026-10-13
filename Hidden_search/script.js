let btn = document.querySelector(".btn")
let search = document.querySelector(".search")

btn.addEventListener("click", ()=>{
    if(search.classList.contains("active")){
        search.classList.remove("active")
    }else{
        search.classList.add("active")
    }
})
