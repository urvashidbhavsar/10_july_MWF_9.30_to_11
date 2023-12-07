// target class /element  = nav class
// perform class / element = btntog
// change icon = icon id
let btn = document.querySelector(".btntog")
let nav = document.querySelector(".nav")
let i = document.getElementById("icon")
btn.addEventListener("click", function () {
    nav.classList.toggle("navigation");

    if (nav.classList.contains("navigation") == true) {
        i.classList.remove("fa-bars-staggered")
        i.classList.add("fa-xmark")
    } else {
        i.classList.remove("fa-xmark")
        i.classList.add("fa-bars-staggered")
    }
})