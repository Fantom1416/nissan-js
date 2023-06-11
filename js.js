const search = document.querySelector(".search")
const yopish = document.querySelector(".search .fa-xmark")
const ochish = document.querySelector(".right_nav .fa-magnifying-glass")
const nav = document.querySelector("nav")
const AbsolutBox = document.querySelector(".absolute_box")
// const BoxYoqotuvchiIcon = document.querySelector(".cards i")
// const li = document.querySelectorAll("li")

function ochmoq(){
    search.style.transform = "translateY(-193px)"
    nav.style.background = "white"

}

function yopmoq(){
    search.style.transform = "translateY(-600px)"
    nav.style.background = ""
    
}

function boxOchish(){
    AbsolutBox.style.transform = "translateY(0px)"
    nav.style.background = "white"
}

function boxYopish(){
    AbsolutBox.style.transform = "translateY(-1800px)"
    nav.style.background = ""
}

// function chiziqlar(){
    // if(li,"click"){
    //     li.style.borderBottom = "thick solid #0000FF"
    // }
// }